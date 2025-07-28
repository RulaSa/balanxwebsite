import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface WelcomeEmailProps {
  firstName: string
  journeyType: "b2c" | "b2b"
  imageUrl: string // <-- Changed from imageBase64 to imageUrl
}

const journeyTypeMap = {
  b2c: "Personal Wellness Journey",
  b2b: "Wellness Center / Business Journey",
}

export const WelcomeEmail = ({
  firstName,
  journeyType,
  imageUrl, // <-- Use the image URL
}: WelcomeEmailProps) => {
  const journeyText = journeyTypeMap[journeyType] || "Wellness Journey"
  const companyName = "BalanX-Bio"
  const contactEmail = "Contact@balanxbio.com"

  return (
    <Html>
      <Head />
      <Preview>You're in! Your BalanX-Bio pre-order is confirmed 🎉</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={imageSection}>
            <Img
              src={imageUrl} // <-- Use the URL directly
              width="500"
              alt="You're all set!"
              style={image}
            />
          </Section>
          
          <Section style={textSection}>
            <Heading style={heading}>Hi {firstName},</Heading>
            
            <Text style={paragraph}>
              Thanks for joining us on this exciting journey toward smarter wellness! We’ve received your
              pre-order and can’t wait to share what we’ve been creating at {companyName}.
            </Text>
            
            <Text style={paragraph}>
              You’re now officially part of the <strong>{journeyText}</strong>! We’re thrilled to have you on board as we build
              toward a healthier future together.
            </Text>
            
            <Text style={paragraph}>
              We’ll keep you posted with updates as we move closer to launch, including exclusive sneak
              peeks, behind-the-scenes progress, and early access opportunities.
            </Text>
            
            <Text style={paragraph}>
              In the meantime, if you have any questions, feel free to reach out to us at{" "}
              <Link href={`mailto:${contactEmail}`} style={link}>
                {contactEmail}
              </Link>.
            </Text>

            <Text style={paragraph}>
              Welcome to the future of wellness. Excited to have you on this path forward.
            </Text>

            <Text style={paragraph}>
              Warmly,
              <br />
              The {companyName} Team
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            {companyName}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default WelcomeEmail

// --- Styles (unchanged from previous version) ---
const main = {
  backgroundColor: "#f9f9f9",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "20px 0",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  overflow: "hidden",
}

const imageSection = {
  padding: "0",
}

const image = {
  display: "block",
  width: "100%",
  maxWidth: "100%",
}

const textSection = {
  padding: "0 35px",
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#333",
  margin: "30px 0",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#555",
}

const link = {
  color: "#57534e",
  textDecoration: "underline",
}

const hr = {
  borderColor: "#e6e6e6",
  margin: "20px 35px",
}

const footer = {
  color: "#888888",
  fontSize: "12px",
  textAlign: "center" as const,
  padding: "20px 0",
}
