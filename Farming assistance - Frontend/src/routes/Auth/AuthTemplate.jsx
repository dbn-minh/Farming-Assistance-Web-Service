import Lottie from "lottie-react";
import React from "react";
import { Outlet } from "react-router-dom";

//import authImg from "../../assets/Auth.png";
import authAnimation from "../../assets/Animation.json";

const AuthTemplate = () => {
  return (
    <div>
      <div className="flex w-sreen h-screen bg-white text-center items-center justify-center">
        <div className="w-1/2 h-full justify-center">
          <Lottie className="h-full" animationData={authAnimation} />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
