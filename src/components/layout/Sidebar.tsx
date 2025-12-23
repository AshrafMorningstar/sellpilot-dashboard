/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */

import { NavLink } from "react-router-dom";
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
  Command
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    <aside className="w-[260px] h-screen fixed left-0 top-0 border-r border-border bg-background flex flex-col z-40">
      <div className="h-16 flex items-center px-6 border-b border-border/40">
        <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
          <div className="bg-primary text-white p-1 rounded-lg">
            <Command size={18} />
          </div>
          SellPilot
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
        <section>
          <div className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-3 px-2">Menu</div>
          <div className="space-y-1">
            {MENU_ITEMS.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>
        </section>

        <section>
          <div className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-3 px-2">Products</div>
          <div className="space-y-1">
            {PRODUCT_ITEMS.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>
        </section>

        <section>
          <div className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-3 px-2">General</div>
          <div className="space-y-1">
            {GENERAL_ITEMS.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>
        </section>
      </div>
      
      <div className="p-4 border-t border-border/40">
        <div className="bg-secondary/50 rounded-xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500"></div>
            <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">Ashraf Morningstar</p>
                <p className="text-xs text-muted-foreground truncate">Admin Account</p>
            </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ item }: { item: any }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-[#0B0D12] text-white shadow-lg shadow-gray-900/20"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
        )
      }
    >
      <item.icon size={18} />
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className="w-auto px-1.5 h-5 min-w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
}
