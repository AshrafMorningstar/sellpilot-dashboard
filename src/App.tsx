import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import Analytics from "@/pages/Analytics";
import Insights from "@/pages/Insights";
import Store from "@/pages/Store";
import Feedback from "@/pages/Feedback";
import Settings from "@/pages/Settings";
import Customers from "@/pages/Customers";
import GenericPage from "@/pages/GenericPage";
import SmoothScroll from "@/components/SmoothScroll";

function App() {
  return (
    <HashRouter>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} /> 
          <Route path="insights" element={<Insights />} /> 
          <Route path="updates" element={<GenericPage title="Updates" />} /> 
          <Route path="customers" element={<Customers />} /> 
          <Route path="store" element={<Store />} /> 
          <Route path="discounts" element={<GenericPage title="Discounts" />} /> 
          <Route path="integration" element={<GenericPage title="Integration" />} /> 
          <Route path="feedback" element={<Feedback />} /> 
          <Route path="settings" element={<Settings />} /> 
          <Route path="help" element={<GenericPage title="Help Desk" />} /> 
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
