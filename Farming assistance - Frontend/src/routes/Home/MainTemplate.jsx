import React from "react";
import { Outlet } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";

const MainTemplate = () => {
  return (
    <AuthWrapper>
      <div className="">
        <Outlet />
      </div>
    </AuthWrapper>
  );
};

export default MainTemplate;
