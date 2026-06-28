import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export const researchSchema = z.object({
  query: z.string().min(3, "Query must be at least 3 characters"),
  agentType: z.string().optional(),
})

export const chatSchema = z.object({
  message: z.string().min(1, "Message is required"),
  conversationId: z.string().optional(),
  agentType: z.string().optional(),
})

export const documentUploadSchema = z.object({
  title: z.string().min(1, "Title is required"),
  type: z.enum(["PDF", "DOCX", "TXT", "IMAGE", "OTHER"]),
})

export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
})

export const billingSchema = z.object({
  plan: z.enum(["FREE", "PROFESSIONAL", "BUSINESS", "ENTERPRISE"]),
})
