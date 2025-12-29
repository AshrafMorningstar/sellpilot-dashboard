import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <TooltipPrimitive.Provider delayDuration={200}>{children}</TooltipPrimitive.Provider>;
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>;
}

export function TooltipTrigger({ children, ...props }: TooltipPrimitive.TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger {...props}>{children}</TooltipPrimitive.Trigger>;
}

export function TooltipContent({ 
  children, 
  className,
  sideOffset = 4,
  ...props 
}: TooltipPrimitive.TooltipContentProps) {
  return (
    <AnimatePresence>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          sideOffset={sideOffset}
          className={cn(
            "z-50 overflow-hidden rounded-lg bg-card border border-border/50 px-3 py-2 text-sm shadow-elevation-3 backdrop-blur-sm",
            "animate-slide-down",
            className
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="fill-card" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </AnimatePresence>
  );
}
