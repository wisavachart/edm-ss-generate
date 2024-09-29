import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
