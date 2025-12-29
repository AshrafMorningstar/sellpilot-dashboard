import { Search, Bell, Sun, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { id: 1, title: "New order received", time: "2 min ago", unread: true },
  { id: 2, title: "Payment processed", time: "1 hour ago", unread: true },
  { id: 3, title: "Customer feedback", time: "3 hours ago", unread: false },
];

export function TopBar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-30 pt-4 pb-2">
       <div className="flex-1 max-w-xl">
          <div className="relative group">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
             <input 
                type="text" 
                placeholder="Search analytics, customers, or orders... (Cmd+K)" 
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-card/60 border border-border/60 focus:bg-card focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-muted-foreground/60 text-sm font-medium shadow-elevation-1 backdrop-blur-sm hover:shadow-elevation-2"
             />
          </div>
       </div>

       <div className="flex items-center gap-4 ml-6">
          <IconButton icon={Sun} />
          
          <div className="relative">
            <IconButton 
              icon={Bell} 
              onClick={() => setShowNotifications(!showNotifications)}
            />
            {unreadCount > 0 && (
              <span 
                className="absolute top-0 right-0 w-5 h-5 bg-destructive rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold text-white animate-pulse"
              >
                {unreadCount}
              </span>
            )}
            
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ type: "spring", duration: 0.3 }}
                  className="absolute right-0 top-14 w-80 bg-card border border-border/50 rounded-2xl shadow-elevation-4 overflow-hidden"
                >
                  <div className="p-4 border-b border-border/50">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {notifications.map((notif, i) => (
                      <motion.div
                        key={notif.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={cn(
                          "p-4 border-b border-border/30 hover:bg-secondary/30 transition-colors cursor-pointer",
                          notif.unread && "bg-primary/5"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          {notif.unread && <div className="w-2 h-2 bg-primary rounded-full mt-2" />}
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notif.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
       </div>
    </header>
  )
}

function IconButton({ icon: Icon, className, onClick }: { icon: any, className?: string, onClick?: () => void }) {
    return (
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            type="button"
            className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:border-border hover:shadow-elevation-2 transition-all duration-300",
                className
            )}
        >
            <Icon size={20} />
        </motion.button>
    )
}
