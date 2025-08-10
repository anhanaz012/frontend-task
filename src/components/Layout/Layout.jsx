import { Outlet } from "react-router";
import { Footer, Header } from "../index";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
