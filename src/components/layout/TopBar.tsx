import { Search, Bell, Sun, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function TopBar() {
  return (
    <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-30 pt-4 pb-2">
       <div className="flex-1 max-w-xl">
          <div className="relative group">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
             <input 
                type="text" 
                placeholder="Search analytics, customers, or orders..." 
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-card/60 border border-border/60 focus:bg-card focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-muted-foreground/60 text-sm font-medium shadow-sm backdrop-blur-sm"
             />
          </div>
       </div>

       <div className="flex items-center gap-4 ml-6">
          <IconButton icon={Sun} />
          <div className="relative">
            <IconButton icon={Bell} />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-background animate-pulse"></span>
          </div>
       </div>
    </header>
  )
}

function IconButton({ icon: Icon, className }: { icon: any, className?: string }) {
    return (
        <button className={cn(
            "w-11 h-11 rounded-full flex items-center justify-center bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:border-border hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300",
            className
        )}>
            <Icon size={20} />
        </button>
    )
}
