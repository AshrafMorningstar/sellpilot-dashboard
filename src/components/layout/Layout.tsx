/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { TopBar } from "./TopBar"
import { AnimatePresence, motion } from "framer-motion"

export default function Layout() {
  const location = useLocation()
  
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground">
       <Sidebar />
       <main className="flex-1 flex flex-col ml-[280px] relative z-10 transition-all duration-300">
          <TopBar />
          <div className="p-6 md:p-8 flex-1 overflow-y-auto">
             <div className="max-w-7xl mx-auto space-y-8">
                <AnimatePresence mode="wait">
                   <motion.div
                      key={location.pathname}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                   >
                    <Outlet />
                   </motion.div>
                </AnimatePresence>
             </div>
          </div>
       </main>
    </div>
  )
}
