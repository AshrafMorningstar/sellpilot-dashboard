/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { WorldMap } from "@/components/dashboard/WorldMap";
import { Users, DollarSign, CreditCard, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
        {/* Stats Row */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard 
                title="Total Revenue" 
                value="$45,231.89" 
                trend={20.1} 
                icon={DollarSign}
                delay={0}
            />
            <StatCard 
                title="Subscriptions" 
                value="+2350" 
                trend={180.1} 
                icon={Users} 
                delay={0.1}
            />
            <StatCard 
                title="Sales" 
                value="+12,234" 
                trend={19} 
                icon={CreditCard} 
                delay={0.2}
            />
            <StatCard 
                title="Active Now" 
                value="+573" 
                trend={201} 
                trendLabel="since last hour"
                icon={Activity} 
                delay={0.3}
            />
        </div>

        {/* Charts & Maps Row */}
        <div className="grid gap-6 md:grid-cols-7">
            <SalesChart />
            <RecentOrders />
        </div>
        
        {/* World Map Row */}
        <div className="grid gap-6 md:grid-cols-4">
             <WorldMap />
        </div>
    </div>
  )
}
