import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./index.css"  
import Home from "./pages/Home"
import About from "./pages/About"; 
import Vans from "./pages/Vans"; 


export default function App(){
    
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
    </BrowserRouter>
  )
}

function Navbar(){
  return (
    <nav className="nav">
     <Link to="/" className="site-title">
      #VANLIFE
     </Link>
     <ul>
      <li className="active">
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/vans">Vans</Link>
      </li>
     </ul>
    </nav>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <App />
</React.StrictMode>
);
