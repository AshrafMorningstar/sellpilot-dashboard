/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import Analytics from "@/pages/Analytics";
import Insights from "@/pages/Insights";
import Customers from "@/pages/Customers";
import GenericPage from "@/pages/GenericPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} /> 
          <Route path="insights" element={<Insights />} /> 
          <Route path="updates" element={<GenericPage title="Updates" />} /> 
          <Route path="customers" element={<Customers />} /> 
          <Route path="store" element={<GenericPage title="Store" />} /> 
          <Route path="discounts" element={<GenericPage title="Discounts" />} /> 
          <Route path="integration" element={<GenericPage title="Integration" />} /> 
          <Route path="feedback" element={<GenericPage title="Feedback" />} /> 
          <Route path="settings" element={<GenericPage title="Settings" />} /> 
          <Route path="help" element={<GenericPage title="Help Desk" />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
