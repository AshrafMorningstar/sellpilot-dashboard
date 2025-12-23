
import { RecentOrders } from "@/components/dashboard/RecentOrders";

export default function Customers() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Customers</h1>
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">Add Customer</button>
        </div>
        <RecentOrders />
    </div>
  )
}
