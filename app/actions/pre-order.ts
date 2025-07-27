"use server"

import { sendWelcomeEmail, type EmailData } from "@/lib/email"
import { z } from "zod"

// 表单验证 schema
const preOrderSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  journeyType: z.enum(["b2c", "b2b"], {
    required_error: "Please select a journey type",
  }),
})

export type PreOrderFormState = {
  success: boolean
  message: string
  errors?: {
    firstName?: string[]
    lastName?: string[]
    email?: string[]
    journeyType?: string[]
  }
}

export async function submitPreOrder(
  prevState: PreOrderFormState,
  formData: FormData
): Promise<PreOrderFormState> {
  try {
    // 提取表单数据
    const rawData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      journeyType: formData.get("journeyType") as "b2c" | "b2b",
    }

    // 验证数据
    const validationResult = preOrderSchema.safeParse(rawData)

    if (!validationResult.success) {
      return {
        success: false,
        message: "Please correct the errors below",
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const validData = validationResult.data

    // 发送欢迎邮件
    const emailResult = await sendWelcomeEmail(validData)

    if (!emailResult.success) {
      console.error("Email sending failed:", emailResult.error)
      return {
        success: false,
        message: "Failed to send confirmation email. Please try again later.",
      }
    }

    // 这里你可以添加数据库保存逻辑
    // 例如：await savePreOrderToDatabase(validData)

    return {
      success: true,
      message: `Thank you, ${validData.firstName}! A confirmation email has been sent to ${validData.email}. Please check your inbox.`,
    }

  } catch (error) {
    console.error("Pre-order submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
} 