/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Dashboard />} /> 
          <Route path="insights" element={<Dashboard />} /> 
          <Route path="updates" element={<Dashboard />} /> 
          <Route path="customers" element={<Dashboard />} /> 
          <Route path="store" element={<Dashboard />} /> 
          <Route path="discounts" element={<Dashboard />} /> 
          <Route path="integration" element={<Dashboard />} /> 
          <Route path="feedback" element={<Dashboard />} /> 
          <Route path="settings" element={<Dashboard />} /> 
          <Route path="help" element={<Dashboard />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
