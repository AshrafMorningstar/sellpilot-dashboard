/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { Card, CardContent } from "@/components/ui/card";

interface PageProps {
    title: string;
}

export default function GenericPage({ title }: PageProps) {
  return (
    <div className="space-y-8 animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
        
        <Card glass className="min-h-[400px] flex flex-col items-center justify-center border-dashed">
            <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
                <span className="text-3xl">🚧</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Under Construction</h3>
            <p className="text-muted-foreground max-w-sm text-center mt-2">
                The {title} module is getting a premium makeover. Check back soon for updates.
            </p>
        </Card>
    </div>
  )
}
