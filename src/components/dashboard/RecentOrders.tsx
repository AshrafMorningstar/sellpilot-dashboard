/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const orders = [
  {
    order: "ORD001",
    customer: "Christine Brooks",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Christine",
    status: "Completed",
    amount: "$250.00",
    date: "2 mins ago",
  },
  {
    order: "ORD002",
    customer: "Rosie Pearson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rosie",
    status: "Processing",
    amount: "$140.20",
    date: "15 mins ago",
  },
  {
    order: "ORD003",
    customer: "Darrell Caldwell",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darrell",
    status: "Completed",
    amount: "$500.00",
    date: "1 hour ago",
  },
  {
    order: "ORD004",
    customer: "Gilbert Johnston",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gilbert",
    status: "Rejected",
    amount: "$35.00",
    date: "2 hours ago",
  },
  {
    order: "ORD005",
    customer: "Alan Cain",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alan",
    status: "Processing",
    amount: "$24.00",
    date: "1 day ago",
  },
];

export function RecentOrders() {
  return (
    <Card className="col-span-3" hoverEffect>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {orders.map((order, i) => (
            <div
              key={order.order}
              className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors border-b last:border-0 border-border/50"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={order.avatar} alt="Avatar" />
                  <AvatarFallback>{order.customer[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{order.customer}</p>
                  <p className="text-xs text-muted-foreground">{order.order}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <Badge status={order.status} />
                 <div className="text-right w-20">
                    <p className="text-sm font-medium">{order.amount}</p>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function Badge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        Completed: "bg-emerald-500/15 text-emerald-600 border-emerald-500/20",
        Processing: "bg-amber-500/15 text-amber-600 border-amber-500/20",
        Rejected: "bg-rose-500/15 text-rose-600 border-rose-500/20",
    }
    
    return (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${styles[status]}`}>
            {status}
        </span>
    )
}

function Avatar({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`relative flex shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>
}
function AvatarImage({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <img src={src} alt={alt} className="aspect-square h-full w-full object-cover" />
}
function AvatarFallback({ children }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">{children}</div>
}
