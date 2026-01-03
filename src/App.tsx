/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import Analytics from "@/pages/Analytics";
import Insights from "@/pages/Insights";
import Store from "@/pages/Store";
import Feedback from "@/pages/Feedback";
import Settings from "@/pages/Settings";
import Customers from "@/pages/Customers";
import Updates from "@/pages/Updates";
import Discounts from "@/pages/Discounts";
import Integration from "@/pages/Integration";
import Help from "@/pages/Help";
import SmoothScroll from "@/components/SmoothScroll";
import { CommandPalette } from "@/components/ui/CommandPalette";

function App() {
  return (
    <HashRouter>
      <SmoothScroll />
      <CommandPalette />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} /> 
          <Route path="insights" element={<Insights />} /> 
          <Route path="updates" element={<Updates />} /> 
          <Route path="customers" element={<Customers />} /> 
          <Route path="store" element={<Store />} /> 
          <Route path="discounts" element={<Discounts />} /> 
          <Route path="integration" element={<Integration />} /> 
          <Route path="feedback" element={<Feedback />} /> 
          <Route path="settings" element={<Settings />} /> 
          <Route path="help" element={<Help />} /> 
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
