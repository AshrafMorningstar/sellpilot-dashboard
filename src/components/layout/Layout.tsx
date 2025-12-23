/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */

import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { TopBar } from "./TopBar"

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-foreground">
       <Sidebar />
       <main className="flex-1 flex flex-col ml-[260px] relative z-10">
          <TopBar />
          <div className="p-6 md:p-8 flex-1 overflow-y-auto">
             <div className="max-w-7xl mx-auto space-y-8">
                <Outlet />
             </div>
          </div>
       </main>
    </div>
  )
}
