
import { GrowthMap } from "@/components/dashboard/GrowthMap";
import { RecentOrders } from "@/components/dashboard/RecentOrders";

export default function Insights() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Insights</h1>
        <div className="grid gap-6 md:grid-cols-2">
            <GrowthMap />
            <div className="p-6 bg-card border border-border/50 rounded-2xl shadow-sm">
                <h3 className="font-semibold mb-2">AI Predictions</h3>
                <p className="text-muted-foreground text-sm">Forecasting 12% growth in Q3 based on current trends.</p>
            </div>
        </div>
        <RecentOrders />
    </div>
  )
}
