"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  className?: string
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(({ value, onValueChange, placeholder, className, children }, ref) => {
  const [open, setOpen] = React.useState(false)
  const items = React.Children.toArray(children) as React.ReactElement<{ value: string; children: React.ReactNode }>[]
  
  const selectedItem = items.find((item) => item.props.value === value)

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        className="flex h-11 w-full items-center justify-between rounded-xl border border-input bg-transparent px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
        onClick={() => setOpen(!open)}
      >
        <span className={selectedItem ? "" : "text-muted-foreground"}>
          {selectedItem ? selectedItem.props.children : placeholder}
        </span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 mt-1 w-full rounded-xl border bg-card p-1 shadow-lg animate-in fade-in zoom-in-95">
            {React.Children.map(children, (child) => {
              const el = child as React.ReactElement<{ value: string; onClick?: (e: React.MouseEvent) => void; active?: boolean }>
              return React.cloneElement(el, {
                onClick: (e: React.MouseEvent) => {
                  e.stopPropagation()
                  onValueChange?.(el.props.value)
                  setOpen(false)
                },
                active: el.props.value === value,
              })
            })}
          </div>
        </>
      )}
    </div>
  )
})
Select.displayName = "Select"

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string; active?: boolean }
>(({ className, children, active, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm outline-none transition-colors",
      active && "bg-accent text-accent-foreground",
      "hover:bg-accent hover:text-accent-foreground",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
SelectItem.displayName = "SelectItem"

export { Select, SelectItem }
