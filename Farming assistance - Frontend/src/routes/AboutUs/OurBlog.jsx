import React from "react";

import blog1 from "../../assets/Blog1.png";
import blog2 from "../../assets/Blog2.png";
import { NavLink } from "react-router-dom";

const OurBlog = () => {
  return (
    <div className="pb-24">
      <div className="mx-16 bg-white h-fit rounded-xl">
        <div className="mx-4 py-4 text-center space-y-4">
          <span
            style={{
              color: "#204E51",
              fontSize: "4.5rem",
              fontWeight: 700,
              lineHeight: "5.13rem",
            }}
          >
            Our Blog
          </span>
          <div
            className="mx-auto h-fit"
            style={{
              width: "45rem",
              color: "var(--Paragraph, #767681)",
              fontSize: "1.25rem",
              fontWeight: 400,
              lineHeight: "1.5rem",
            }}
          >
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.{" "}
          </div>
          <div className="mr-4 ml-16 grid grid-cols-3 gap-6">
            <div className="text-left">
              <img
                className=""
                style={{
                  width: "23rem",
                  height: "29rem",
                }}
                src={`${blog1}`}
                alt=""
              />
              <div className="space-y-[1.8rem]">
                <div
                  className="mt-[1.8rem]"
                  style={{
                    color: "#204E51",
                    fontSize: "2rem",
                    fontWeight: 700,
                    lineHeight: "2.28rem",
                  }}
                >
                  Innovations for a Greener Future
                </div>
                <div
                  className="w-[24.375rem]"
                  style={{
                    color: "#1E1E1E",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: "1.5rem" /* 120% */,
                  }}
                >
                  Li Europan lingues es membres del sam familie. Lor separat
                  existentie es un myth. Por scientie, musica.
                </div>
                <div>
                  <NavLink
                    style={{
                      color: " #204E51",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      lineHeight: "1.5rem" /* 120% */,
                      textDecorationLine: "underline",
                    }}
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="text-left">
              <img
                className=""
                style={{
                  width: "23rem",
                  height: "29rem",
                }}
                src={`${blog2}`}
                alt=""
              />
              <div className="space-y-[1.8rem]">
                <div
                  className="mt-[1.8rem]"
                  style={{
                    color: "#204E51",
                    fontSize: "2rem",
                    fontWeight: 700,
                    lineHeight: "2.28rem",
                  }}
                >
                  The Power of Agricultural Analytics{" "}
                </div>
                <div
                  className="w-[24.375rem]"
                  style={{
                    color: "#1E1E1E",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: "1.5rem" /* 120% */,
                  }}
                >
                  Li Europan lingues es membres del sam familie. Lor separat
                  existentie es un myth. Por scientie, musica.
                </div>
                <div>
                  <NavLink
                    style={{
                      color: " #204E51",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      lineHeight: "1.5rem" /* 120% */,
                      textDecorationLine: "underline",
                    }}
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="text-left">
              <img
                className=""
                style={{
                  width: "23rem",
                  height: "29rem",
                }}
                src={`${blog2}`}
                alt=""
              />
              <div className="space-y-[1.8rem]">
                <div
                  className="mt-[1.8rem]"
                  style={{
                    color: "#204E51",
                    fontSize: "2rem",
                    fontWeight: 700,
                    lineHeight: "2.28rem",
                    width: "23rem",
                  }}
                >
                  Cultivating Sustainable Farms
                </div>
                <div
                  className="w-[24.375rem]"
                  style={{
                    color: "#1E1E1E",
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    lineHeight: "1.5rem" /* 120% */,
                  }}
                >
                  Li Europan lingues es membres del sam familie. Lor separat
                  existentie es un myth. Por scientie, musica.
                </div>
                <div>
                  <NavLink
                    style={{
                      color: " #204E51",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      lineHeight: "1.5rem" /* 120% */,
                      textDecorationLine: "underline",
                    }}
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
