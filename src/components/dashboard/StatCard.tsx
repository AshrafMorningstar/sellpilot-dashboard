import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";

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

  return (
    <Card 
      hoverEffect 
      className="relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
        <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-secondary/50 rounded-xl text-primary ring-1 ring-inset ring-foreground/5">
                    {Icon ? <Icon size={22} /> : <div className="w-5 h-5" />}
                </div>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <MoreHorizontal size={18} />
                </button>
            </div>
            
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                <div className="flex items-baseline gap-2">
                     <h3 className="text-2xl font-bold tracking-tight text-foreground">{value}</h3>
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                    <div className={cn(
                        "flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md",
                        isPositive ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"
                    )}>
                        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {Math.abs(trend)}%
                    </div>
                    <span className="text-xs text-muted-foreground/80">{trendLabel}</span>
                </div>
            </div>
            
             {/* Decorative gradient blob */}
             <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
        </CardContent>
    </Card>
  );
}
