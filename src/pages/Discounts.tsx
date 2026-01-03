/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { Card, CardContent } from "@/components/ui/card";
import { Plus, Tag, Copy, Trash2, Clock, CheckCircle2 } from "lucide-react";

const coupons = [
    { code: "SUMMER2025", discount: "25% OFF", type: "Percentage", used: 142, status: "Active", expires: "2 days" },
    { code: "WELCOME50", discount: "$50.00", type: "Fixed Amount", used: 843, status: "Active", expires: "Never" },
    { code: "FLASH10", discount: "10% OFF", type: "Percentage", used: 24, status: "Expired", expires: "Expired" },
    { code: "VIPSHIP", discount: "Free Shipping", type: "Shipping", used: 56, status: "Active", expires: "1 month" },
    { code: "BLACKFRIDAY", discount: "50% OFF", type: "Percentage", used: 1205, status: "Scheduled", expires: "Nov 24" },
];

export default function Discounts() {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
             <h1 className="text-2xl font-bold tracking-tight text-foreground">Discounts</h1>
             <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                 <Plus size={16} /> Create Coupon
             </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
            <StatCard label="Active Coupons" value="12" icon={Tag} color="text-primary" />
            <StatCard label="Total Redeemed" value="2,431" icon={Copy} color="text-emerald-500" />
            <StatCard label="Discount Value" value="$45.2k" icon={CheckCircle2} color="text-amber-500" />
        </div>

        <Card className="overflow-hidden border-border/50">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-secondary/30 text-xs font-semibold uppercase text-muted-foreground">
                        <tr>
                            <th className="text-left px-6 py-4">Code</th>
                            <th className="text-left px-6 py-4">Discount</th>
                            <th className="text-left px-6 py-4">Status</th>
                            <th className="text-left px-6 py-4">Redeemed</th>
                            <th className="text-left px-6 py-4">Expires</th>
                            <th className="text-right px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {coupons.map((coupon, i) => (
                            <tr key={i} className="hover:bg-secondary/10 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            <Tag size={16} />
                                        </div>
                                        <span className="font-mono font-bold text-foreground">{coupon.code}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">{coupon.discount}</td>
                                <td className="px-6 py-4">
                                    <StatusBadge status={coupon.status} />
                                </td>
                                <td className="px-6 py-4 text-muted-foreground text-sm">{coupon.used} times</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md w-fit">
                                        <Clock size={12} /> {coupon.expires}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-muted-foreground hover:text-destructive transition-colors p-2 hover:bg-destructive/10 rounded-lg">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    </div>
  )
}

function StatCard({ label, value, icon: Icon, color }: { label: string, value: string, icon: any, color: string }) {
    return (
        <Card hoverEffect className="flex items-center p-6 gap-4">
            <div className={`p-3 rounded-xl bg-secondary ${color} bg-opacity-10`}>
                <Icon size={24} className={color} />
            </div>
            <div>
                <p className="text-sm text-muted-foreground font-medium">{label}</p>
                <h3 className="text-2xl font-bold text-foreground">{value}</h3>
            </div>
        </Card>
    )
}

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        Active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
        Scheduled: "bg-blue-500/10 text-blue-600 border-blue-500/20",
        Expired: "bg-slate-500/10 text-slate-600 border-slate-500/20",
    }
    return (
        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${styles[status]}`}>
            {status}
        </span>
    )
}
