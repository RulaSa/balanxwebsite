import { Resend } from "resend"
import { WelcomeEmail } from "@/emails/welcome-email"

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined in environment variables")
}

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailData {
  firstName: string
  lastName: string
  email: string
  journeyType: "b2c" | "b2b"
}

export async function sendWelcomeEmail(data: EmailData) {
  try {
    // Determine the base URL for constructing the image path
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';
    
    const imageUrl = `${baseUrl}/you-r-all-set.jpg`;

    const fromEmail = process.env.COMPANY_EMAIL || "onboarding@resend.dev"
    
    console.log("🚀 Attempting to send email with config:")
    console.log("- From:", fromEmail)
    console.log("- To:", data.email)
    console.log("- Image URL:", imageUrl)

    const emailPayload = {
      from: fromEmail,
      to: [data.email],
      subject: "You're in! Your BalanX-Bio pre-order is confirmed 🎉",
      react: WelcomeEmail({
        firstName: data.firstName,
        journeyType: data.journeyType,
        imageUrl: imageUrl, // <-- Pass the public URL to the template
      }),
      headers: {
        'X-Entity-Ref-ID': `balanx-preorder-${Date.now()}`,
      },
    }

    console.log("📧 Sending email payload...");

    const result = await resend.emails.send(emailPayload)

    console.log("✅ Email sent successfully:", result)
    return { success: true, data: result }
  } catch (error) {
    console.error("❌ Failed to send welcome email:", error)
    if (error instanceof Error) {
        console.error("Error details:", { message: error.message, stack: error.stack })
        return { success: false, error: error.message }
    }
    return { 
      success: false, 
      error: "An unknown error occurred" 
    }
  }
}
