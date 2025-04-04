import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";

// mock server
import "./server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="/host" element={<HostLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} /> 
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo/>}/>
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="photos" element={<HostVanPhotos/>}/>
            </Route>      
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
