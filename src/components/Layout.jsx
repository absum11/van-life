import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="viewport-wrap">
      <Header />
      <main>
          <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout