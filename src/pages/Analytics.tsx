
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { KPIGrid } from "@/components/dashboard/KPIGrid";

export default function Analytics() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Analytics</h1>
        <div className="grid gap-6 md:grid-cols-1">
            <RevenueChart />
        </div>
        <KPIGrid />
    </div>
  )
}
