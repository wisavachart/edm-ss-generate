import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] mx-auto mt-14">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
