import React, { useEffect, useState } from "react";

import Item from "./SupplierItem/Item";

import { useDispatch, useSelector } from "react-redux";
import { userLocal } from "../../../service/userLocal";
import { userStore } from "../../../redux/userReducer/userThunk";
import { complaintThunk } from "../../../redux/complaintReducer/complaintThunk";

const SStore = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.userReducer);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      dispatch(userStore(userLocal.getRoleName()));
      fetchDataList();
    };
    fetchData();
  }, [dispatch]);

  const sendComplaint = () => {
    const value = {
      content: content,
      supplierID: userLocal.get()?.supplierID,
      farmerID: selectedProduct.farmerID,
      inventoryproductID: selectedProduct.inventoryProductID,
    };
    console.log(value);
    dispatch(complaintThunk(value));
  };

  const handleItemClick = (product) => {
    setSelectedProduct(product);
  };

  const fetchDataList = () => {
    return list.map((item) => {
      return (
        <Item key={item.productId} data={item} onClick={handleItemClick} />
      );
    });
  };

  return (
    <div className="ml-4">
      <div>
        <div className="flex items-center justify-between">
          <div className="title-of-page w-[50%]">
            <div className="text-[#204E51] font-bold text-[2rem] ">
              Welcome to Srpout Farm
            </div>
            <span className="!w-[100%]">
              Buy what You Like, Pay Less For It
            </span>
          </div>
        </div>
      </div>

      {/* Store */}
      <div className="mx-6">
        <div className="grid grid-cols-3 gap-8">{fetchDataList()}</div>
      </div>

      {selectedProduct && (
        <div className=" bg-[#204E51] p-4 rounded-lg shadow-lg bottom-3 w-[78%] fixed text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold ">Product Details</h2>
            <button
              onClick={() => {
                setSelectedProduct(null);
              }}
              className="p-2 px-4 border rounded-full border-white"
            >
              X
            </button>
          </div>
          <div className="flex space-x-2">
            <table className="w-[60%] text-left">
              <tbody>
                <tr>
                  <th className="border px-4 py-2">Product Name</th>
                  <td className="border px-4 py-2">
                    {selectedProduct.productName}
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Description</th>
                  <td className="border px-4 py-2">
                    {selectedProduct.description}
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Price</th>
                  <td className="border px-4 py-2">
                    ${selectedProduct.price}/kg
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Quantity in Stock</th>
                  <td className="border px-4 py-2">
                    {selectedProduct.quantity}kg
                  </td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Farmer</th>
                  <td className="border px-4 py-2">
                    {selectedProduct.farmer.farmerName}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="w-[40%]">
              <label className="text-[1.5rem]">Complaint Product</label>
              <textarea
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                className="textarea textarea-bordered h-24 w-full bg-white text-black"
                placeholder="Write your complaint here"
              ></textarea>
              <button
                disabled={!content}
                onClick={() => {
                  sendComplaint();
                  setSelectedProduct(null);
                }}
                className="border px-4 py-2 rounded-xl hover:bg-white hover:text-[#204E51]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SStore;
