import TopNavbar from "../TopNavbar/TopNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="">
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
