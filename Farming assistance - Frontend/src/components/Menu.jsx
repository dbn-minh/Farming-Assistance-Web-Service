// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
//import { Link, useLocation, useParams } from "react-router-dom";

// NavItem
const AdminItem = [
  {
    name: "Profile",
    link: "/admin/profile",
  },
  {
    name: "Tip",
    link: "/admin/tip",
  },
  {
    name: "AddTip",
    link: "/admin/add-tip",
  },
  {
    name: "Complaint",
    link: "/admin/complaint",
  },
  {
    name: "Transaction",
    link: "/admin/transaction",
  },
];
const FarmerItem = [
  {
    name: "Profile",
    link: "/farmer/profile",
  },
  {
    name: "Inventory",
    link: "/farmer/inventory",
  },
  {
    name: "Tip",
    link: "/farmer/tip",
  },
  {
    name: "Transaction",
    link: "/farmer/transaction",
  },
];
const SupplierItem = [
  {
    name: "Profile",
    link: "/supplier/profile",
  },
  {
    name: "Store",
    link: "/supplier/store",
  },
  {
    name: "Cart",
    link: "/supplier/cart",
  },
  {
    name: "Transaction",
    link: "/supplier/transaction",
  },
];

const Menu = () => {
  const location = useLocation();
  const [NavItem, setNavItem] = useState();
  const { roleName } = useSelector((state) => state.userReducer);
  useEffect(() => {
    checkRoleName();
  }, []);

  const checkRoleName = () => {
    switch (roleName) {
      case "admin":
        setNavItem(AdminItem);
        break;
      case "farmer":
        setNavItem(FarmerItem);
        break;
      default:
        setNavItem(SupplierItem);
        break;
    }
  };

  return (
    <div className=" h-screen w-[18.75rem] p-4 fixed top-[100px]">
      <div className="flex flex-col items-start justify-between bg-[#204E51] h-full rounded-2xl">
        <div className="w-full">
          {NavItem?.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`block p-4 ${
                location.pathname === item.link
                  ? "no-hover text-[#204E51] bg-white rounded-2xl"
                  : "text-offwhite"
              } ${
                location.pathname === item.link
                  ? ""
                  : "hover:bg-white hover:text-green_dark1 rounded-2xl"
              }`}
              style={{ width: "100%", transition: "ease-in-out 0.3s" }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
