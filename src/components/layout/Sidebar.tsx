/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */

import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  PieChart, 
  LineChart, 
  RefreshCcw, 
  Users, 
  Store, 
  Tags, 
  Blocks, 
  MessageSquare, 
  Settings, 
  HelpCircle,
  Command,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MENU_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Analytics", icon: PieChart, path: "/analytics", badge: 2 },
  { label: "Insights", icon: LineChart, path: "/insights" },
  { label: "Updates", icon: RefreshCcw, path: "/updates" },
];

const PRODUCT_ITEMS = [
  { label: "Customers", icon: Users, path: "/customers" },
  { label: "Store", icon: Store, path: "/store" },
  { label: "Discounts", icon: Tags, path: "/discounts" },
  { label: "Integration", icon: Blocks, path: "/integration" },
];

const GENERAL_ITEMS = [
  { label: "Feedback", icon: MessageSquare, path: "/feedback" },
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Help Desk", icon: HelpCircle, path: "/help" },
];

export function Sidebar() {
  return (
    <aside className="w-[280px] h-screen fixed left-0 top-0 border-r bg-card/50 backdrop-blur-xl flex flex-col z-40 shadow-xl shadow-primary/5">
      <div className="h-20 flex items-center px-8 border-b border-border/40">
        <div className="flex items-center gap-3 text-foreground font-bold text-xl tracking-tight">
          <div className="bg-gradient-to-br from-primary to-violet-700 text-white p-2 rounded-xl shadow-lg shadow-primary/20">
            <Command size={20} />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            SellPilot
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-8 px-5 space-y-9">
        <MenuSection title="Menu" items={MENU_ITEMS} />
        <MenuSection title="Products" items={PRODUCT_ITEMS} />
        <MenuSection title="General" items={GENERAL_ITEMS} />
      </div>
      
      <div className="p-5 border-t border-border/40">
        <button className="w-full bg-secondary/30 hover:bg-secondary/60 transition-colors rounded-2xl p-4 flex items-center gap-3 group border border-transparent hover:border-border">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 shadow-md ring-2 ring-background group-hover:ring-primary/20 transition-all"></div>
            <div className="flex-1 overflow-hidden text-left">
                <p className="text-sm font-semibold truncate text-foreground group-hover:text-primary transition-colors">Ashraf Morningstar</p>
                <p className="text-xs text-muted-foreground truncate">Admin Account</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </aside>
  );
}

function MenuSection({ title, items }: { title: string, items: any[] }) {
    return (
        <section>
          <div className="text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-4 px-3">{title}</div>
          <div className="space-y-1">
            {items.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>
        </section>
    )
}

function NavItem({ item }: { item: any }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <NavLink
      to={item.path}
      className="relative block group no-underline outline-none"
    >
      {isActive && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 bg-primary/10 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <div className={cn(
        "relative flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
        isActive ? "text-primary font-semibold" : "text-muted-foreground group-hover:text-foreground"
      )}>
        <item.icon size={20} className={cn("transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
        <span className="flex-1">{item.label}</span>
        {item.badge && (
          <span className={cn(
              "px-2 py-0.5 rounded-md text-[10px] font-bold transition-all",
              isActive ? "bg-primary text-white shadow-sm" : "bg-muted text-muted-foreground"
          )}>
            {item.badge}
          </span>
        )}
      </div>
    </NavLink>
  );
}
