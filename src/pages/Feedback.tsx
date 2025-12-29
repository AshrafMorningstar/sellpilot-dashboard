import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";

export default function Feedback() {
  return (
    <div className="space-y-8 animate-fade-in">
         <h1 className="text-2xl font-bold tracking-tight text-foreground">Feedback</h1>
         
         <div className="grid gap-8 md:grid-cols-2">
             <Card hoverEffect>
                 <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                         <MessageSquare size={20} /> Share your thoughts
                     </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                     <div className="space-y-2">
                         <label className="text-sm font-medium">Subject</label>
                         <input type="text" className="w-full p-3 rounded-xl bg-secondary/30 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Feature request..." />
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm font-medium">Message</label>
                         <textarea className="w-full p-3 h-32 rounded-xl bg-secondary/30 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Tell us how we can improve..."></textarea>
                     </div>
                     <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all">
                         <Send size={18} /> Send Feedback
                     </button>
                 </CardContent>
             </Card>
             
             <div className="space-y-6">
                 <h3 className="text-lg font-semibold">Recent Updates</h3>
                 <UpdateCard version="v2.1.0" date="Today" title="Premium UI Overhaul" description="Complete redesign with glassmorphism, new colors, and smoother animations." />
                 <UpdateCard version="v2.0.5" date="Last Week" title="Performance Boost" description="Improved dashboard loading time by 40%." />
             </div>
         </div>
    </div>
  )
}

function UpdateCard({ version, date, title, description }: { version: string, date: string, title: string, description: string }) {
    return (
        <div className="p-4 rounded-xl border border-border/60 bg-card/50 hover:bg-card transition-colors">
            <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold">{version}</span>
                <span className="text-xs text-muted-foreground">{date}</span>
            </div>
            <h4 className="font-medium mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
    )
}
