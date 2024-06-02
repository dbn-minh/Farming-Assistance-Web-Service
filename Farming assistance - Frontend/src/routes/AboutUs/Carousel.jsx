import React from "react";
import carouselImg from "../../assets/carouselImg.png";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <div>
      <div
        style={{
          filter: "brightness(100%)",
        }}
      >
        <img
          className="h-[45rem] w-full relative"
          style={{
            filter: "brightness(40%)",
          }}
          // src={`${carouselImg}`}
          src={`${carouselImg}`}
          alt=""
        />
        <div className="absolute top-0 left-0 text-white w-full text-center mx-auto mt-[6rem]">
          <div
            className="mx-auto h-fit"
            style={{
              fontSize: "5.625rem",
              width: "75rem",
              fontWeight: 700,
              lineHeight: "5.85rem",
            }}
          >
            The Role of Technology in Revolutionizing Agriculture
          </div>
          <div className="w-[40.625rem] text-center mx-auto my-[4rem]">
            <span className="font-normal">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular.
            </span>
          </div>

          <div className=" flex mx-auto justify-center">
            <div>
              <NavLink className="bg-[#204E51] text-white px-8 py-3 rounded-lg mr-16">
                Get Started
              </NavLink>
            </div>
            <div>
              <NavLink className="border text-white px-8 py-3 rounded-lg">
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
