import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string) {
  const d = new Date(date)
  return d.toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function formatCurrency(amount: number, currency = "KES") {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency,
  }).format(amount / 100)
}

export function generateId() {
  return Math.random().toString(36).substring(2, 15)
}

export function truncate(str: string, length = 100) {
  if (str.length <= length) return str
  return str.substring(0, length) + "..."
}
