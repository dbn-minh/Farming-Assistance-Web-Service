import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userLocal } from "../../../service/userLocal";
import { userInfor, updateInforUser } from "../../../redux/userReducer/userThunk";

const AProfile = () => {
  const { inforUser, roleName } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [information, setInformation] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState(inforUser?.adminName);
  const [phone, setPhone] = useState(inforUser?.phone);
  const [email, setEmail] = useState(inforUser?.email);
  const [address, setAddress] = useState(inforUser?.address);

  useEffect(() => {
    const fetchUserInformation = async () => {
      dispatch(userInfor(userLocal.getUserId()));
    };
    if (update) {
      fetchUserInformation();
      setUpdate(false);
    } else fetchUserInformation();
  }, [dispatch, update]);

  useEffect(() => {
    if (inforUser) {
      setInformation(inforUser);
    }
  }, [inforUser]);

  const updateNewInforUser = () => {
    const data = {
      adminName: name,
      phone: phone,
      email: email,
      address: address,
    };
    dispatch(updateInforUser(data)).then(() => {
      setUpdate(!update);
      setShowForm(false);
    });
  };


  const showPage = () => {
    return (
      <div>
        <div
          style={{
            color: "#204E51",
            fontSize: "1.875rem",
            fontWeight: 600,
          }}
        >
          Your Profile
        </div>

        <div className="w-full bg-white rounded-xl p-8 h-fixed">
          <div className="h-fit mb-8">
            <div className="flex justify-center">
              <div className="w-[30%]">
                <div className="px-24">

                  <img
                    src={`${information.avatarImg}`}
                    className="rounded-full"
                    alt=""
                  />

                </div>
                <div className="text-center">
                  <div
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: "1.875rem",
                      fontWeight: 500,
                    }}
                  >
                    {information.adminName}
                  </div>
                  <span
                    style={{
                      color: "#808080",
                      fontSize: "1.25rem",
                      fontWeight: 300,
                      textAlign: "center",
                    }}
                  >
                    {roleName}
                  </span>
                </div>
              </div>

              <div className="w-[70%]">
                <div
                  style={{
                    borderRadius: "0.9375rem",
                    border: "1px solid #D9D9D9",
                    background: "#FFF",
                    boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Item 1 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4 w-[30rem]">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-user"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Name
                      </span>
                    </div>

                    <div>{information.adminName}</div>
                  </div>

                  {/* Item 2 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-cog"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Password
                      </span>
                    </div>

                    {information.user && <div>{information.user.password}</div>}

                  </div>

                  {/* Item 3 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-phone"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Phone
                      </span>
                    </div>

                    <div>{information.phone}</div>
                  </div>

                  {/* Item 4 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-envelope"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        Email
                      </span>
                    </div>

                    <div>{information.email}</div>
                  </div>

                  {/* Item 5 */}
                  <div className="px-4 pt-4 text-black flex items-center space-x-4">
                    <div className="space-x-4 border border-black rounded-3xl p-2 w-[8rem]">
                      <i className="fa fa-address-book"></i>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 400,
                          width: "4rem",
                        }}
                      >
                        Address
                      </span>
                    </div>

                    <div>{information.address}</div>
                  </div>

                  <div className="flex justify-end mx-8 mb-2">
                  <button
                      className="py-2 px-4 bg-[#63B6BD] text-white border rounded-2xl w-fit cursor-pointer"
                      onClick={() => {
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const displayForm = () => {
    return (
      <div className="fixed top-1/4 left-1/3 bg-[#204E51] rounded-2xl w-[50rem]">
        <div className="m-8 space-y-4 mx-auto w-5/6">
          <div className="flex justify-between">
            <div className="text-white text-[1.5rem] font-semibold">
              Change Information
            </div>
            <button
              className="p-2 px-4 border rounded-full hover:bg-white hover:text-[#204E51] hover:font-semibold"
              onClick={() => {
                setShowForm(false);
              }}
            >
              X
            </button>
          </div>
          <div className="flex space-x-4 w-full">
            <div className="w-1/2 space-y-4">
              <div>
                <div className="text-white">Name</div>
                <input
                  type="text"
                  placeholder={`${inforUser?.adminName}`}
                  class="input input-bordered input-md w-full max-w-xs bg-white"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div>
                <div className="text-white">Phone</div>
                <input
                  type="text"
                  placeholder={`${inforUser?.phone}`}
                  class="input input-bordered input-md w-full max-w-xs bg-white"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="w-1/2 space-y-4">
              <div>
                <div className="text-white">Email</div>
                <input
                  type="text"
                  placeholder={`${inforUser?.email}`}
                  class="input input-bordered input-md w-full max-w-xs bg-white"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div>
                <div className="text-white">Address</div>
                <input
                  type="text"
                  placeholder={`${inforUser?.address}`}
                  class="input input-bordered input-md w-full max-w-xs bg-white"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="border rounded-xl p-2 hover:bg-white hover:text-[#204E51]"
              onClick={() => {
                updateNewInforUser();
              }}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        {}
        {showForm ? displayForm() : showPage()}
      </div>
    </div>
  );
};


export default AProfile;
