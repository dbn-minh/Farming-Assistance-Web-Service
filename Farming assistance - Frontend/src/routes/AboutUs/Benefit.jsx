import React from "react";
import { NavLink } from "react-router-dom";

const Benefit = () => {
  return (
    <div className="mx-16">
      <div className="grid grid-cols-2">
        {/* Right Content */}
        <div className="my-[5rem]">
          <div
            style={{
              width: "32.71619rem",
              color: "#204E51",
              fontSize: "4.5rem",
              fontWeight: 700,
              lineHeight: "5.13rem",
            }}
          >
            The Benefits of Choosing Our Expertise
          </div>
          <div
            style={{
              color: " #1E1E1E",
              fontSize: "1.25rem",
              fontWeight: 400,
              lineHeight: "1.5rem" /* 120% */,
              width: "29.43713rem",
              marginTop: "1.79rem",
            }}
          >
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.{" "}
          </div>
          <div className="mt-[5rem]">
            <NavLink className="bg-[#204E51] text-white px-8 py-3 rounded-lg mr-16 mt-8 flex item-center w-fit">
              <span className="mr-4">Get Started</span>
              <i class="fa fa-arrow-right my-auto"></i>
            </NavLink>
          </div>
        </div>

        {/* right content */}
        <div
          className="rounded-2xl"
          style={{
            background: "#204E51",
          }}
        >
          <div className="my-[5rem] mx-[8rem]">
            <div className="flex">
              <div
                className="rounded-full w-[7rem] h-[7rem] text-center"
                style={{
                  background: "rgba(0, 0, 0, 0.40)",
                }}
              >
                <i
                  class="fa fa-star h-fit w-fit"
                  style={{
                    fontSize: "3rem",
                    lineHeight: "7rem",
                    color: "white",
                  }}
                ></i>
              </div>

              <div className="ml-[2rem] my-auto text-white">
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    lineHeight: "2.4375rem" /* 81.25% */,
                  }}
                >
                  15+
                </span>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    lineHeight: "1.6875rem" /* 135% */,
                  }}
                >
                  Years Of Experience
                </div>
              </div>
            </div>
          </div>
          <div className="my-[5rem] mx-[8rem]">
            <div className="flex">
              <div
                className="rounded-full w-[7rem] h-[7rem] text-center my-auto"
                style={{
                  background: "rgba(0, 0, 0, 0.40)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7rem"
                  height="7rem"
                  viewBox="0 0 127 125"
                  fill="none"
                >
                  <path
                    d="M72.4305 25.6623L95.217 37.5469C100.601 40.3551 103.918 45.5449 103.918 51.1614V74.9305C103.918 80.547 100.601 85.7368 95.217 88.545L72.4305 100.43C67.0462 103.238 60.4125 103.238 55.0282 100.43L32.2417 88.545C26.8574 85.7368 23.5405 80.547 23.5405 74.9305V51.1614C23.5405 45.5449 26.8574 40.3551 32.2417 37.5469L55.0282 25.6623C60.4125 22.8541 67.0462 22.8541 72.4305 25.6623ZM58.5343 29.9058L57.9286 30.2005L35.142 42.0851C31.7414 43.8587 29.5779 47.0573 29.3595 50.5727L29.3413 51.1614V74.9305C29.3413 78.4777 31.3259 81.7697 34.5869 83.6982L35.142 84.0068L57.9286 95.8914C61.3187 97.6595 65.4518 97.7578 68.9244 96.1861L69.5301 95.8914L92.3167 84.0068C95.7173 82.2332 97.8808 79.0346 98.0992 75.5192L98.1174 74.9305V51.1614C98.1174 47.6142 96.1328 44.3222 92.8719 42.3937L92.3167 42.0851L69.5301 30.2005C66.14 28.4323 62.0069 28.3341 58.5343 29.9058ZM84.0909 51.4058C84.8429 52.6834 84.306 54.2699 82.8917 54.9493L66.5963 62.7752L66.5965 80.5105C66.5965 81.9575 65.2979 83.1306 63.6961 83.1306C62.0942 83.1306 60.7957 81.9575 60.7957 80.5105L60.7956 62.7752L44.5005 54.9493C43.0861 54.2699 42.5492 52.6834 43.3012 51.4058C44.0532 50.1281 45.8094 49.6431 47.2237 50.3224L63.696 58.2319L80.1684 50.3224C81.5827 49.6431 83.3389 50.1281 84.0909 51.4058Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="ml-[2rem] my-auto text-white">
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    lineHeight: "2.4375rem" /* 81.25% */,
                  }}
                >
                  40+
                </span>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    lineHeight: "1.6875rem" /* 135% */,
                  }}
                >
                  Products
                </div>
              </div>
            </div>
          </div>
          <div className="my-[5rem] mx-[8rem]">
            <div className="flex">
              <div
                className="rounded-full w-[7rem] h-[7rem] text-center"
                style={{
                  background: "rgba(0, 0, 0, 0.40)",
                }}
              >
                <i
                  class="fa-solid fa-check "
                  style={{
                    fontSize: "3rem",
                    lineHeight: "7rem",
                    color: "white",
                  }}
                ></i>
              </div>

              <div className="ml-[2rem] my-auto text-white">
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    lineHeight: "2.4375rem" /* 81.25% */,
                  }}
                >
                  2,458+
                </span>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    lineHeight: "1.6875rem" /* 135% */,
                  }}
                >
                  Satisfied Clients{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="my-[5rem] mx-[8rem]">
            <div className="flex">
              <div
                className="rounded-full w-[7rem] h-[7rem] text-center"
                style={{
                  background: "rgba(0, 0, 0, 0.40)",
                }}
              >
                <div className="p-[1rem] w-[7rem] h-[7rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5rem"
                    height="5rem"
                    viewBox="0 0 86 43"
                    fill="none"
                  >
                    <path
                      d="M43.227 23.9656C49.0272 23.9656 54.1512 25.3292 58.3145 27.1124C62.1576 28.7907 64.5773 32.567 64.5773 36.6578V38.8257C64.5773 40.7487 62.976 42.3222 61.0189 42.3222H25.4351C23.478 42.3222 21.8767 40.7487 21.8767 38.8257V36.6928C21.8767 32.567 24.2964 28.7907 28.1394 27.1474C32.3028 25.3292 37.4268 23.9656 43.227 23.9656ZM14.7599 24.8397C18.6741 24.8397 21.8767 21.6929 21.8767 17.8467C21.8767 14.0006 18.6741 10.8537 14.7599 10.8537C10.8457 10.8537 7.64314 14.0006 7.64314 17.8467C7.64314 21.6929 10.8457 24.8397 14.7599 24.8397ZM18.7809 28.6858C17.4643 28.4761 16.1477 28.3362 14.7599 28.3362C11.2371 28.3362 7.89223 29.0705 4.8676 30.3642C2.23439 31.483 0.526367 34.0005 0.526367 36.8327V38.8257C0.526367 40.7487 2.12764 42.3222 4.08475 42.3222H16.5391V36.6928C16.5391 33.7907 17.3575 31.0635 18.7809 28.6858ZM71.6941 24.8397C75.6083 24.8397 78.8109 21.6929 78.8109 17.8467C78.8109 14.0006 75.6083 10.8537 71.6941 10.8537C67.7799 10.8537 64.5773 14.0006 64.5773 17.8467C64.5773 21.6929 67.7799 24.8397 71.6941 24.8397ZM85.9276 36.8327C85.9276 34.0005 84.2196 31.483 81.5864 30.3642C78.5618 29.0705 75.2169 28.3362 71.6941 28.3362C70.3063 28.3362 68.9897 28.4761 67.6731 28.6858C69.0965 31.0635 69.9149 33.7907 69.9149 36.6928V42.3222H82.3692C84.3263 42.3222 85.9276 40.7487 85.9276 38.8257V36.8327ZM43.227 0.364258C49.1339 0.364258 53.9022 5.04956 53.9022 10.8537C53.9022 16.6579 49.1339 21.3432 43.227 21.3432C37.3201 21.3432 32.5518 16.6579 32.5518 10.8537C32.5518 5.04956 37.3201 0.364258 43.227 0.364258Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <div className="ml-[2rem] my-auto text-white">
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    lineHeight: "2.4375rem" /* 81.25% */,
                  }}
                >
                  20
                </span>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    lineHeight: "1.6875rem" /* 135% */,
                  }}
                >
                  Local Team Members{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
