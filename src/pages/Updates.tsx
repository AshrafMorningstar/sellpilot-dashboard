import { Card, CardContent } from "@/components/ui/card";
import { GitCommit, Star, Zap, Bug } from "lucide-react";

const updates = [
  {
    version: "v2.4.0",
    date: "October 24, 2024",
    title: "The Premium Overhaul",
    type: "feature",
    description: "We've completely redesigned the entire dashboard with a new design system, glassmorphism, and 60FPS animations.",
    changes: [
      "New 'Midnight & Neon' dark mode palette",
      "Implemented Lenis smooth scrolling",
      "Rebuilt all core components with Framer Motion",
      "Added customizable Settings and Store pages"
    ]
  },
  {
    version: "v2.3.1",
    date: "October 10, 2024",
    title: "Performance Improvements",
    type: "improvement",
    description: "Various under-the-hood optimizations to make the app feel snappier.",
    changes: [
      "Reduced bundle size by 15%",
      "Optimized image loading with lazy-loading",
      "Fixed sidebar flickering issue on route change"
    ]
  },
  {
    version: "v2.3.0",
    date: "September 28, 2024",
    title: "Integration Hub",
    type: "feature",
    description: "You can now connect functionality with 3rd party providers.",
    changes: [
      "Added Slack integration for notifications",
      "Added Stripe connect for payments",
      "Added Shopify sync"
    ]
  },
  {
    version: "v2.2.5",
    date: "September 15, 2024",
    title: "Bug Fixes",
    type: "fix",
    description: "Squashed some pesky bugs reported by users.",
    changes: [
      "Fixed mobile responsiveness on Analytics page",
      "Fixed tooltip z-index issues"
    ]
  }
];

export default function Updates() {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Updates & Changelog</h1>
            <p className="text-muted-foreground">Stay up to date with the latest improvements and features.</p>
        </div>
        
        <div className="relative border-l border-border/50 ml-6 space-y-12 pb-12">
            {updates.map((update, i) => (
                <div key={i} className="relative pl-12 group">
                    <div className="absolute -left-3 top-0 p-1 bg-background border border-border rounded-full group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                        <TypeIcon type={update.type} />
                    </div>
                    
                    <Card hoverEffect className="relative">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h2 className="text-xl font-bold text-foreground">{update.version}</h2>
                                        <TypeBadge type={update.type} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary">{update.title}</h3>
                                </div>
                                <span className="text-sm text-muted-foreground font-mono bg-secondary/30 px-3 py-1 rounded-full whitespace-nowrap">{update.date}</span>
                            </div>
                            
                            <p className="text-muted-foreground mb-6">{update.description}</p>
                            
                            <ul className="space-y-2">
                                {update.changes.map((change, j) => (
                                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                                        <GitCommit size={16} className="mt-0.5 text-muted-foreground" />
                                        {change}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    </div>
  )
}

function TypeIcon({ type }: { type: string }) {
    switch (type) {
        case 'feature': return <Star size={16} className="text-purple-500 fill-purple-500/20" />;
        case 'improvement': return <Zap size={16} className="text-amber-500 fill-amber-500/20" />;
        case 'fix': return <Bug size={16} className="text-rose-500 fill-rose-500/20" />;
        default: return <GitCommit size={16} />;
    }
}

function TypeBadge({ type }: { type: string }) {
    const styles = {
        feature: "bg-purple-500/10 text-purple-600 border-purple-500/20",
        improvement: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        fix: "bg-rose-500/10 text-rose-600 border-rose-500/20"
    }[type] || "bg-secondary text-secondary-foreground";
    
    return (
        <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold border ${styles}`}>
            {type}
        </span>
    )
}
