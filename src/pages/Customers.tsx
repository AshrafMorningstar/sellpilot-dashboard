import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Filter } from "lucide-react";

export default function Customers() {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Customers</h1>
            <div className="flex gap-3">
                 <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 hover:bg-secondary text-sm font-medium transition-colors">
                     <Filter size={16} /> Filters
                 </button>
                 <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                     <Users size={16} /> Add Customer
                 </button>
            </div>
        </div>
        
        <div className="grid grid-cols-1">
             <RecentOrders />
        </div>
    </div>
  )
}
