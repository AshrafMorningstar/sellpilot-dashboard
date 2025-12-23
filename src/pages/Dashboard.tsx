/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */


import { KPIGrid } from "@/components/dashboard/KPIGrid";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { GrowthMap } from "@/components/dashboard/GrowthMap";
import { RecentOrders } from "@/components/dashboard/RecentOrders";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
            <div className="flex items-center gap-2">
            </div>
        </div>

        <KPIGrid />
        
        <div className="grid gap-6 md:grid-cols-7 lg:grid-cols-7">
           <RevenueChart />
           <GrowthMap />
        </div>

        <div className="grid grid-cols-1">
             <RecentOrders />
        </div>
    </div>
  )
}
