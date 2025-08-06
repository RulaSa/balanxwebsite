import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { initializeDatabase, insertPreOrder } from '@/lib/db'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email } = await request.json()

    // Validate input
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Initialize database (creates tables if they don't exist)
    const dbInit = await initializeDatabase()
    if (!dbInit.success) {
      console.error('Database initialization failed:', dbInit.error)
      return NextResponse.json(
        { error: 'Database initialization failed' },
        { status: 500 }
      )
    }

    // Store pre-order data
    const preOrderData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      id: `preorder_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }

    // Save to PostgreSQL database
    let storageResult = null
    let isDuplicate = false
    
    try {
      const dbResult = await insertPreOrder({
        id: preOrderData.id,
        first_name: preOrderData.firstName,
        last_name: preOrderData.lastName,
        email: preOrderData.email
      })

      if (dbResult.success) {
        storageResult = 'PostgreSQL database storage successful'
      } else {
        if (dbResult.code === 'DUPLICATE_EMAIL') {
          // Mark as duplicate but continue to send email
          isDuplicate = true
          storageResult = 'Email already exists - welcome back message will be sent'
        } else {
          throw new Error(dbResult.error || 'Database insert failed')
        }
      }
    } catch (storageError) {
      console.error('Storage error:', storageError)
      return NextResponse.json(
        { error: 'Failed to save pre-order data' },
        { status: 500 }
      )
    }

    // Send confirmation email if Resend is configured
    let emailResult = null
    if (resend) {
      try {
        const emailData = await resend.emails.send({
          from: 'Welcome@balanxbio.com',
          to: [email],
          subject: "You're in! Your BalanX-Bio pre-order is confirmed",
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome to BalanX-Bio</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f9fafb;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                
                <!-- Header -->
                <div style="background: #ffffff; text-align: center; padding: 40px 30px 20px;">
                  <h1 style="color: #57534e; font-size: 28px; font-weight: 300; margin: 0; letter-spacing: -0.5px;">BalanX-Bio</h1>
                </div>
                
                <!-- Main Content -->
                <div style="padding: 20px 40px 40px;">
                  <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 20px;">
                    Hi ${firstName},
                  </p>
                  
                  <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 20px;">
                    ${isDuplicate 
                      ? "Thanks for your continued interest in BalanX-Bio! We see you've already reserved your spot on this exciting journey toward smarter wellness."
                      : "Thanks for joining us on this exciting journey toward smarter wellness! We've received your pre-order and can't wait to share what we've been creating at BalanX-Bio."
                    }
                  </p>
                  
                  <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 20px;">
                    ${isDuplicate
                      ? "You're already part of our Journey! Your reservation is secure and we're excited to have you with us as we build toward a healthier future together."
                      : "You're now officially part of our Journey! We're thrilled to have you on board as we build toward a healthier future together."
                    }
                  </p>
                  
                  <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 20px;">
                    We'll keep you posted with updates as we move closer to launch, including exclusive sneak peeks, behind-the-scenes progress, and early access opportunities.
                  </p>
                  
                  <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 20px;">
                    In the meantime, if you have any questions, feel free to reach out to us at <a href="mailto:Contact@balanxbio.com" style="color: #22c55e; text-decoration: none;">Contact@balanxbio.com</a>.
                  </p>
                  
                  <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 30px;">
                    Welcome to the future of wellness. Excited to have you on this path forward.
                  </p>
                  
                  <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0;">
                    Warmly,<br>
                    <strong style="color: #57534e;">The BalanX-Bio Team</strong>
                  </p>
                </div>
                
                <!-- Footer -->
                <div style="background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="color: #9ca3af; font-size: 12px; line-height: 1.5; margin: 0;">
                    This email was sent to <strong>${email}</strong> because you pre-ordered BalanX-Bio.<br>
                    If you didn't request this, please contact us at Contact@balanxbio.com.
                  </p>
                  <p style="color: #d1d5db; font-size: 11px; margin: 15px 0 0;">
                    © ${new Date().getFullYear()} BalanX-Bio. All rights reserved.
                  </p>
                </div>
                
              </div>
            </body>
            </html>
          `
        })
        emailResult = {
          success: true,
          emailId: emailData.data?.id
        }
      } catch (emailError) {
        console.error('Email error:', emailError)
        emailResult = {
          success: false,
          error: emailError instanceof Error ? emailError.message : 'Unknown email error'
        }
      }
    } else {
      emailResult = {
        success: false,
        error: 'Resend API key not configured'
      }
    }

    console.log('Pre-order processed:', {
      preOrderId: preOrderData.id,
      userEmail: email,
      storage: storageResult,
      emailResult: emailResult
    })

    return NextResponse.json({
      success: true,
      message: isDuplicate ? 'Welcome back! Your reservation is already confirmed' : 'Pre-order received successfully',
      preOrderId: preOrderData.id,
      storage: storageResult,
      email: emailResult,
      isDuplicate: isDuplicate,
      details: {
        emailConfigured: !!resend,
        databaseConfigured: true
      }
    })

  } catch (error) {
    console.error('Pre-order error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process pre-order. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 