/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */


import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, ShoppingBag, Users, RefreshCw, TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const KPI_DATA = [
  {
    title: "Total Sales",
    value: 34258.20,
    prefix: "$",
    icon: ShoppingBag,
    change: "+2.5%",
    trend: "up",
    caption: "Last month"
  },
  {
    title: "New Customer",
    value: 2543,
    icon: Users,
    change: "+18%",
    trend: "up",
    caption: "Last month"
  },
  {
    title: "Return Products",
    value: 142,
    icon: RefreshCw,
    change: "-2.1%",
    trend: "down",
    caption: "Last month"
  },
  {
    title: "Total Revenue",
    value: 52190,
    prefix: "$",
    icon: DollarSign,
    change: "+4.2%",
    trend: "up",
    caption: "Last month"
  }
];

function Counter({ value, prefix = "", duration = 2 }: { value: number, prefix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      const countUp = new CountUp(ref.current, value, {
        startVal: 0,
        duration: duration,
        decimalPlaces: value % 1 !== 0 ? 2 : 0,
        prefix: prefix,
        separator: ",",
      });
      if (!countUp.error) {
        countUp.start();
      }
    }
  }, [value, prefix, duration]);

  return <span ref={ref} className="font-bold text-3xl tracking-tight text-foreground" />;
}

export function KPIGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {KPI_DATA.map((item, index) => (
        <Card key={index} className="overflow-hidden border-none shadow-sm shadow-black/5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
              <div className="p-2 bg-secondary/50 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon size={18} />
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
               <Counter value={item.value} prefix={item.prefix} />
               
               <div className="flex items-center gap-2 mt-2">
                  <div className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                      item.trend === 'up' 
                      ? 'bg-green-500/10 text-green-600' 
                      : 'bg-red-500/10 text-red-600'
                  }`}>
                      {item.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {item.change}
                  </div>
                  <span className="text-xs text-muted-foreground">{item.caption}</span>
               </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
