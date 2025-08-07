import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, question, type } = await request.json()

    const subject = type === 'partnership' 
      ? '🤝 New Partnership Inquiry - BalanX Website'
      : '📧 New Customer Message - BalanX Website'

    // 获取当前时间
    const currentDate = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC'
    })

    const emailContent = type === 'partnership'
      ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤝 PARTNERSHIP INQUIRY RECEIVED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Date & Time: ${currentDate} (UTC)
🌐 Source: BalanX Official Website
📝 Inquiry Type: Partnership Collaboration

CONTACT INFORMATION:
▪️ Name: ${name}
▪️ Company Email: ${email}

PARTNERSHIP MESSAGE:
${question}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔔 FOLLOW-UP REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This partnership inquiry requires immediate attention.
Please respond within 24 hours to maintain professional standards.

Best regards,
BalanX Automated System
      `
      : `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 NEW CUSTOMER MESSAGE RECEIVED  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Date & Time: ${currentDate} (UTC)
🌐 Source: BalanX Official Website
📝 Inquiry Type: General Customer Support

CONTACT INFORMATION:
▪️ Customer Name: ${name}
▪️ Email Address: ${email}

CUSTOMER MESSAGE:
${question}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔔 CUSTOMER SERVICE ALERT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This customer message requires prompt attention.
Recommended response time: Within 2-4 business hours.

Best regards,
BalanX Customer Service System
      `

    await resend.emails.send({
      from: 'Contact@balanxbio.com',
      to: 'Contact@balanxbio.com',
      subject: subject,
      text: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}