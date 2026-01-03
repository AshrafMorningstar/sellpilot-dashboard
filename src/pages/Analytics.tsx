/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { SalesChart } from "@/components/dashboard/SalesChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { DollarSign, Activity, Users, CreditCard } from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
             <h1 className="text-2xl font-bold tracking-tight text-foreground">Analytics</h1>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
             <StatCard title="Total Revenue" value="$45,231.89" trend={20.1} icon={DollarSign} />
             <StatCard title="Subscriptions" value="+2350" trend={180.1} icon={Users} delay={0.1} />
             <StatCard title="Sales" value="+12,234" trend={19} icon={CreditCard} delay={0.2} />
             <StatCard title="Active Now" value="+573" trend={201} icon={Activity} delay={0.3} />
        </div>

        <div className="grid gap-6 md:grid-cols-1">
            <SalesChart />
        </div>
    </div>
  )
}
