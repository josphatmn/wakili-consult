import { Scale } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "icon" | "text"
  size?: "sm" | "md" | "lg"
  className?: string
  href?: string
}

const sizeMap = {
  sm: { box: "h-6 w-6", icon: "h-3 w-3", text: "text-base", gap: "gap-1.5" },
  md: { box: "h-8 w-8", icon: "h-4 w-4", text: "text-xl", gap: "gap-2" },
  lg: { box: "h-10 w-10", icon: "h-5 w-5", text: "text-2xl", gap: "gap-2.5" },
}

export function Logo({ variant = "full", size = "md", className, href = "/" }: LogoProps) {
  const s = sizeMap[size]
  const inner = (
    <>
      <div
        className={cn(
          "rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20",
          s.box
        )}
      >
        <Scale className={cn("text-white", s.icon)} />
      </div>
      {variant !== "icon" && (
        <span className={cn("font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap", s.text)}>
          M-Wakili AI
        </span>
      )}
    </>
  )

  if (href === null) return <div className={cn("flex items-center", s.gap, className)}>{inner}</div>

  return (
    <a href={href} className={cn("flex items-center shrink-0", s.gap, className)}>
      {inner}
    </a>
  )
}

export function DashboardLogo({ variant = "full", size = "md", className }: Omit<LogoProps, "href">) {
  const s = sizeMap[size]
  const content = (
    <div className={cn("flex items-center", s.gap, className)}>
      <Scale className={cn("text-primary shrink-0", s.icon === "h-3 w-3" ? "h-5 w-5" : s.icon === "h-4 w-4" ? "h-6 w-6" : "h-7 w-7")} />
      {variant !== "icon" && (
        <span className={cn("font-bold gradient-text whitespace-nowrap", s.text)}>M-Wakili AI</span>
      )}
    </div>
  )

  return content
}
