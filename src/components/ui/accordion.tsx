"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext<{ openItem: string | null; setOpenItem: (v: string | null) => void }>({
  openItem: null,
  setOpenItem: () => {},
})

function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, value, children, ...props }, ref) => {
    const { openItem, setOpenItem } = React.useContext(AccordionContext)
    const isOpen = openItem === value

    return (
      <div ref={ref} className={cn("rounded-xl border", className)} {...props}>
        <button
          className="flex w-full items-center justify-between p-4 text-sm font-medium"
          onClick={() => setOpenItem(isOpen ? null : value)}
        >
          {children}
          <ChevronDown className={cn("h-4 w-4 transition-transform shrink-0", isOpen && "rotate-180")} />
        </button>
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

function AccordionContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-4 pb-4 text-sm text-muted-foreground", className)}>{children}</div>
}

export { Accordion, AccordionItem, AccordionContent }
