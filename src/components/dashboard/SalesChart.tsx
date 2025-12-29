import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", total: 1540 },
  { name: "Feb", total: 2200 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2800 },
  { name: "May", total: 2100 },
  { name: "Jun", total: 3400 },
  { name: "Jul", total: 3100 },
];

export function SalesChart() {
  return (
    <Card className="col-span-4" hoverEffect>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                />
                <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                    dx={-10}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <Tooltip
                   content={({ active, payload }) => {
                       if (active && payload && payload.length) {
                           return (
                               <div className="rounded-xl border bg-card p-3 shadow-xl ring-1 ring-foreground/5">
                                   <div className="grid gap-2">
                                       <div className="flex flex-col">
                                           <span className="text-[0.70rem] uppercase text-muted-foreground">Revenue</span>
                                           <span className="font-bold text-lg text-foreground">${payload[0].value}</span>
                                       </div>
                                   </div>
                               </div>
                           )
                       }
                       return null
                   }}
                />
                <Area
                    type="monotone"
                    dataKey="total"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorTotal)"
                />
            </AreaChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
