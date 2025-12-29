import { WorldMap } from "@/components/dashboard/WorldMap";
import { StatCard } from "@/components/dashboard/StatCard";
import { TrendingUp, Users, Eye, MousePointer } from "lucide-react";

export default function Insights() {
  return (
    <div className="space-y-8 animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Insights</h1>
        
        <div className="grid gap-6 md:grid-cols-4">
             <StatCard title="Total Views" value="2.4M" trend={12.5} icon={Eye} />
             <StatCard title="Unique Visitors" value="850K" trend={8.2} icon={Users} delay={0.1} />
             <StatCard title="Click Rate" value="14.2%" trend={-2.4} icon={MousePointer} delay={0.2} />
             <StatCard title="Growth" value="+24%" trend={24} icon={TrendingUp} delay={0.3} />
        </div>

        <div className="grid gap-6 md:grid-cols-1">
            <WorldMap />
        </div>
    </div>
  )
}
