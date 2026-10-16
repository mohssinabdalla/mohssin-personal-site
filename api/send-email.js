import { Resend } from 'resend'

// Vercel serverless function: POST /api/send-email
// Env vars (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      required
//   CONTACT_TO_EMAIL    where messages are delivered (defaults to my Gmail)
//   CONTACT_FROM_EMAIL  verified sender, e.g. "Mohssin's Portfolio <contact@mohssin.space>"
//                       (until mohssin.space is verified in Resend, the default test sender is used)

const TO = process.env.CONTACT_TO_EMAIL || 'mohssinabdalla1@gmail.com'
const FROM = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

const LIMITS = { name: 100, email: 200, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

// Visitor input goes into an HTML email, so it must be escaped
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid request' }, 400)
  }

  // Honeypot: real visitors never fill this hidden field
  if (body.website) return json({ success: true })

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || !email || !message) {
    return json({ error: 'All fields are required' }, 400)
  }
  if (!EMAIL_RE.test(email)) {
    return json({ error: 'Invalid email address' }, 400)
  }
  if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
    return json({ error: 'Message is too long' }, 400)
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return json({ error: 'Email service is not configured' }, 500)
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New message from ${name.replace(/[\r\n]+/g, ' ')}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f4f4f4; padding:16px; border-radius:8px; white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return json({ error: 'Failed to send email' }, 500)
  }

  return json({ success: true })
}
