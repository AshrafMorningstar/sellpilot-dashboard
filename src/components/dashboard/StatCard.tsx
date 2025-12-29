import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  trend: number;
  trendLabel?: string;
  icon?: any;
  chart?: React.ReactNode;
  delay?: number;
}

export function StatCard({ title, value, trend, trendLabel = "vs last month", icon: Icon, chart, delay = 0 }: StatCardProps) {
  const isPositive = trend >= 0;
  const [count, setCount] = useState(0);
  
  // Extract numeric value for animation
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^[^0-9]*/)?.[0] || '';
  const suffix = value.match(/[^0-9.]+$/)?.[0] || '';

  useEffect(() => {
    if (isNaN(numericValue)) return;
    
    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [numericValue]);

  const displayValue = isNaN(numericValue) ? value : `${prefix}${count.toFixed(value.includes('.') ? 2 : 0)}${suffix}`;

  return (
    <Card 
      hoverEffect 
      magnetic
      className="relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
        <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
                <motion.div 
                  className="p-3 bg-secondary/50 rounded-xl text-primary ring-1 ring-inset ring-foreground/5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    {Icon ? <Icon size={22} /> : <div className="w-5 h-5" />}
                </motion.div>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <MoreHorizontal size={18} />
                </button>
            </div>
            
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                <div className="flex items-baseline gap-2">
                     <motion.h3 
                       className="text-2xl font-bold tracking-tight text-foreground"
                       initial={{ scale: 0.5, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
                     >
                       {displayValue}
                     </motion.h3>
                </div>
                
                <motion.div 
                  className="flex items-center gap-2 mt-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: delay + 0.3 }}
                >
                    <div className={cn(
                        "flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md",
                        isPositive ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"
                    )}>
                        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {Math.abs(trend)}%
                    </div>
                    <span className="text-xs text-muted-foreground/80">{trendLabel}</span>
                </motion.div>
            </div>
            
             {/* Decorative gradient blob with glow */}
             <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 group-hover:animate-glow-pulse transition-all duration-500"></div>
        </CardContent>
    </Card>
  );
}
