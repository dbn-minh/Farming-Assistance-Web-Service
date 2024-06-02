import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logoSprout.png";

const Footer = () => {
  return (
    <div
      style={{
        background: "#204E51",
      }}
    >
      <div className="mt-24 mx-16 py-[9rem]">
        <div className="grid grid-cols-3 text-white">
          <div className="col-span-2 space-y-8">
            <div
              className="flex"
              style={{
                fontSize: "2.25rem",
                fontWeight: 700,
              }}
            >
              <img
                src={`${logo}`}
                className="h-[4rem] w-fit"
                alt=""
                style={{
                  borderRadius: "6rem",
                  border: "3px solid #63B6BD",
                }}
              />
              <span className="ml-4">Sprout Farm</span>
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 300,
                lineHeight: "1.5rem" /* 120% */,
                width: "25.06863rem",
              }}
            >
              Li Europan lingues es membres del sam familie. Lor separat
              existentie{" "}
            </div>
            <div
              className="space-x-5"
              style={{
                fontSize: "2rem",
              }}
            >
              <NavLink>
                <i class="fab fa-instagram"></i>
              </NavLink>
              <NavLink>
                <i class="fab fa-youtube"></i>
              </NavLink>
              <NavLink>
                <i class="fab fa-facebook"></i>
              </NavLink>
              <NavLink>
                <i class="fa fa-globe"></i>
              </NavLink>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex gap-[8rem]">
            <div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                }}
              >
                Pages
              </div>
              <div className="space-y-[1.3rem] mt-4">
                <div>Home</div>
                <div>About</div>
                <div>Product</div>
                <div>Blog</div>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                }}
              >
                About
              </div>
              <div className="space-y-[1.3rem] mt-4">
                <div>Testimonials</div>
                <div>Our Service</div>
                <div>Contact Us</div>
                <div>Benefit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
