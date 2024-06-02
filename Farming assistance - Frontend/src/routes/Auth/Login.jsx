import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setRole } from "../../redux/userReducer/userReducer";
import { cartLocal } from "../../service/cartLocal";
import { userThunk } from "../../redux/userReducer/userThunk";
import { userLocal } from "../../service/userLocal";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    cartLocal.set();
  });

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    console.log(role);
  };

  const handleLogin = () => {
    let roleid;
    switch (selectedRole) {
      case "admin":
        roleid = 3;
        break;
      case "supplier":
        roleid = 2;
        break;
      default:
        roleid = 1;
        break;
    }
    let value = {
      roleID: roleid,
      userName: username,
      password: password,
    };
    console.log("handleLogin ~ value:", value);
    userLocal.setRole(selectedRole);

    dispatch(setRole(selectedRole));
    dispatch(userThunk(value));
    console.log("handleLogin ~ selectedRole:", selectedRole);
    console.log("check nagvigate");
  };

  return (
    <div className="w-full h-full">
      <div
        className="mx-auto"
        style={{
          width: "34.125rem",
          height: "40.75rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1.25rem",
          border: "1px solid #000",
          background: "#204E51",
        }}
      >
        {/* Title  */}
        <div
          className="mt-4"
          style={{
            color: "#FFF",
            textAlign: "center",
            textShadow: "5px 5px 2px rgba(255, 255, 255, 0.25)",
            fontSize: "4.5rem",
            fontWeight: 700,
            lineHeight: "4.68rem",
          }}
        >
          Welcome Sprout
        </div>

        {/* Role check */}
        <div className="flex space-x-4 justify-between mx-12 mt-12 text-white">
          <div className="form-control">
            <div className="">
              <i
                className="fa fa-user-shield p-8 border w-full rounded-xl"
                style={{
                  fontSize: "2rem",
                }}
              ></i>
            </div>
            <label className="label cursor-pointer flex">
              <div className="flex w-full">
                <input
                  type="radio"
                  checked={selectedRole === "admin"}
                  onChange={() => handleRoleChange("admin")}
                  className="radio"
                  name="role"
                />
                <span className="label-text mx-4">Admin</span>
              </div>
            </label>
          </div>
          <div className="form-control">
            <div className="">
              <i
                className="fa fa-tractor p-8 border w-full rounded-xl"
                style={{
                  fontSize: "2rem",
                }}
              ></i>
            </div>
            <label className="label cursor-pointer flex">
              <div className="flex w-full">
                <input
                  type="radio"
                  checked={selectedRole === "farmer"}
                  onChange={() => handleRoleChange("farmer")}
                  className="radio"
                  name="role"
                />
                <span className="label-text mx-4">Farmer</span>
              </div>
            </label>
          </div>
          <div className="form-control">
            <div className="">
              <i></i>
              <i
                className="fa fa-user p-8 border w-full rounded-xl"
                style={{
                  fontSize: "2rem",
                }}
              ></i>
            </div>
            <label className="label cursor-pointer flex">
              <div className="flex w-full">
                <input
                  type="radio"
                  checked={selectedRole === "supplier"}
                  onChange={() => handleRoleChange("supplier")}
                  className="radio"
                  name="role"
                />
                <span className="label-text mx-4">Supplier</span>
              </div>
            </label>
          </div>
        </div>

        {/* Form control  */}
        <div className="mt-8 space-y-4 mx-auto w-5/6">
          <label className="input input-bordered flex items-center gap-2 !bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 !bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <NavLink
            className="text-[#204E51] bg-white font-semibold px-8 py-3 rounded-lg"
            onClick={() => {
              handleLogin();
              setTimeout(() => {
                navigate(`/${selectedRole}/profile`);
              }, 2000); // 2000 milliseconds = 2 seconds
            }}
          >
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;