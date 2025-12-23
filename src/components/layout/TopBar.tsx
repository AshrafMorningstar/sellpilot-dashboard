/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */
import { Search, Calendar as CalendarIcon, Bell, Settings, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TopBar() {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="h-16 sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/40 px-8 flex items-center justify-between z-30 transition-all duration-300">
      {/* Search */}
      <div className="flex items-center w-96 relative group">
        <div className="absolute left-3 text-muted-foreground group-focus-within:text-primary transition-colors">
            <Search size={18} />
        </div>
        <Input 
            placeholder="Search product..." 
            className="pl-10 rounded-full bg-secondary/50 border-transparent focus:bg-background focus:border-primary/20 hover:bg-secondary/80 transition-all"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Date Range Pill (Mock) */}
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary/50 hover:border-primary/30 transition-all hover:shadow-sm group">
            <CalendarIcon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="tabular-nums">Dec 23 - Dec 30</span>
        </button>

        <div className="h-6 w-px bg-border/60 mx-1"></div>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground" onClick={() => setIsDark(!isDark)}>
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
            <Settings size={20} />
        </Button>

        {/* User Menu */}
        <div className="pl-2 border-l border-border/60 ml-1">
             <button className="flex items-center gap-3 hover:bg-secondary/50 p-1.5 rounded-full transition-colors pl-1">
                <img 
                    src="https://github.com/shadcn.png" 
                    alt="User" 
                    className="w-8 h-8 rounded-full border border-border shadow-sm"
                />
             </button>
        </div>
      </div>
    </header>
  );
}
