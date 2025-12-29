import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  glass?: boolean;
  hoverEffect?: boolean;
}

export function Card({ 
  className, 
  children, 
  glass = false, 
  hoverEffect = false,
  ...props 
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden",
        glass && "glass border-white/20 shadow-glass",
        hoverEffect && "hover:shadow-glow hover:-translate-y-1 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("font-semibold leading-none tracking-tight text-lg", className)} {...props}>{children}</h3>;
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props}>{children}</div>;
}
