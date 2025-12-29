import { Card, CardContent } from "@/components/ui/card";
import { Check, ExternalLink, RefreshCw } from "lucide-react";

const apps = [
    { name: "Slack", description: "Send notification alerts to your channels.", category: "Communication", connected: true, logo: "S", color: "bg-[#4A154B]" },
    { name: "Stripe", description: "Process payments and manage subscriptions.", category: "Finance", connected: true, logo: "St", color: "bg-[#635BFF]" },
    { name: "Shopify", description: "Sync products and orders automatically.", category: "E-commerce", connected: false, logo: "Sh", color: "bg-[#96BF48]" },
    { name: "Mailchimp", description: "Sync customer lists for email marketing.", category: "Marketing", connected: false, logo: "M", color: "bg-[#FFE01B] text-black" },
    { name: "Google Analytics", description: "Track visitor behavior and traffic.", category: "Analytics", connected: true, logo: "G", color: "bg-[#E37400]" },
    { name: "Intercom", description: "Customer support chat integration.", category: "Support", connected: false, logo: "I", color: "bg-[#286EFA]" },
];

export default function Integration() {
  return (
    <div className="space-y-8 animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Integrations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, i) => (
                <Card key={i} hoverEffect className="flex flex-col">
                    <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-12 h-12 rounded-xl ${app.color} text-white flex items-center justify-center text-xl font-bold shadow-lg`}>
                                {app.logo}
                            </div>
                            <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${app.connected ? 'bg-emerald-500/10 text-emerald-600' : 'bg-secondary text-muted-foreground'}`}>
                                {app.connected ? 'Connected' : 'Not Connected'}
                            </div>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-1">{app.name}</h3>
                        <p className="text-sm text-muted-foreground mb-6 flex-1">{app.description}</p>
                        
                        <div className="space-y-3">
                            {app.connected ? (
                                <button className="w-full py-2 rounded-lg border border-border bg-transparent hover:bg-secondary text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <RefreshCw size={14} /> Sync Now
                                </button>
                            ) : (
                                <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/10 text-sm font-medium transition-colors">
                                    Connect
                                </button>
                            )}
                            
                            <div className="flex justify-between items-center text-xs text-muted-foreground pt-3 border-t border-border/50">
                                <span>{app.category}</span>
                                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                                    Docs <ExternalLink size={10} />
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}
