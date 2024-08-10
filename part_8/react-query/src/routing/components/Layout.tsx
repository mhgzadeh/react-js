import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="container">
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
