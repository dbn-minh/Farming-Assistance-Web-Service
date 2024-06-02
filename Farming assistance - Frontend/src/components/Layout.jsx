import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import Header from "../routes/AboutUs/Header";
// import Menu from "./Menu";

function Layout({ children }) {
  const location = useLocation();

  const isAboutUsPage = location.pathname === "/";
  const isLoginPage = location.pathname === "/auth/login";
  const renderLayout = !isAboutUsPage && !isLoginPage;

  return renderLayout ? (
    <div className="h-screen bg-[#EEE]">
      <div className="fixed w-full h-[100px]">
        <Header />
      </div>
      <div className="flex flex-row items-center bg-[#EEE]">
        <div className="w-[20%]">
          <Menu />
        </div>
        <div className="w-[80%] mt-[120px] mr-[2rem] ">{children}</div>
      </div>
    </div>
  ) : (
    <div>{children}</div>
  );
}

export default Layout;