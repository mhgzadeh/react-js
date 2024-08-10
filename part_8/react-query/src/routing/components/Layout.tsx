import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
