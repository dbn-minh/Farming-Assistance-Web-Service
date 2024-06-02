import React from "react";
import { NavLink } from "react-router-dom";

// Import Image
import ourstory from "../../assets/OurStory.png";

const OurStory = () => {
  return (
    <div className="py-24 mx-16 h-fit">
      <div className="grid grid-cols-2 gap-4">
        <div
          style={{
            width: "38.96356rem",
          }}
        >
          {/* Title */}
          <div
            style={{
              color: "#204E51",
              fontSize: "4.2rem",
              fontWeight: 700,
              lineHeight: "4.68rem",
            }}
          >
            Our Passion for Agriculture Nurturing Growth and Sustaining the
            Future
          </div>

          {/* Content  */}
          <div
            className="my-6"
            style={{
              color: "#1E1E1E",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: "1.875rem",
            }}
          >
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </div>

          {/* Button */}
          <div>
            <NavLink className="bg-[#204E51] text-white px-8 py-3 rounded-lg mr-16 mt-8">
              Get Started
            </NavLink>
          </div>
        </div>
        <div className="mx-auto relative">
          <img
            className="static"
            style={{
              width: "35rem",
              height: "35rem",
            }}
            src={`${ourstory}`}
            alt=""
          />
          <div className="">
            <NavLink
              className="py-[1.5rem] px-[4rem] absolute bottom-[3rem] right-[9rem]"
              style={{
                color: "#204E51",
                background: "white",
                borderRadius: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  lineHeight: "2.34rem",
                }}
              >
                Since 1976
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
