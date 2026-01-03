/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bell, Shield, Moon, Globe, LogOut } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-8 animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
            {/* Profile Section */}
            <Card className="col-span-2" hoverEffect>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User size={20} className="text-primary" /> Profile
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 shadow-xl shadow-primary/20"></div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold">Ashraf Morningstar</h3>
                        <p className="text-muted-foreground">ashraf@sellpilot.com</p>
                        <button className="mt-2 text-sm text-primary font-medium hover:underline">Edit Profile</button>
                    </div>
                </CardContent>
            </Card>

            {/* Appearance */}
            <Card hoverEffect>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Moon size={20} /> Appearance
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Dark Mode</span>
                        <ToggleSwitch checked />
                    </div>
                    <div className="flex items-center justify-between">
                         <span className="text-sm font-medium">Reduced Motion</span>
                         <ToggleSwitch />
                    </div>
                </CardContent>
            </Card>
            
            {/* Notifications */}
            <Card hoverEffect>
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bell size={20} /> Notifications
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Email Alerts</span>
                        <ToggleSwitch checked />
                    </div>
                    <div className="flex items-center justify-between">
                         <span className="text-sm font-medium">Push Notifications</span>
                         <ToggleSwitch checked />
                    </div>
                 </CardContent>
            </Card>
            
             <div className="col-span-2 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 font-medium transition-colors">
                    <LogOut size={18} /> Sign Out
                </button>
             </div>
        </div>
    </div>
  )
}

function ToggleSwitch({ checked = false }: { checked?: boolean }) {
    return (
        <div className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${checked ? 'bg-primary' : 'bg-muted'}`}>
            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
        </div>
    )
}
