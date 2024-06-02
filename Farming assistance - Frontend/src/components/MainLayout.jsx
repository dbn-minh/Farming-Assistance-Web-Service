import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Header from "../routes/AboutUs/Header";
import Layout from "./Layout";
// import Menu from "./Menu";

function MainLayout({ children }) {
  return (
    <div>
      <Header /> {/* Render Header trước */}
      <div
        className="main-content"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
