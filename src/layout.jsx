import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;