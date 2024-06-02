import React, { useEffect, useState } from "react";
import { cartLocal } from "../../../../service/cartLocal";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { userLocal } from "../../../../service/userLocal";

const Item = ({ data, onClick }) => {
  const [quantity, setQuantity] = useState(1);
  const [isDisabled, setDisabled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (data.quantity <= 0) setDisabled(true);
  }, []);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < data.quantity) setQuantity(quantity + 1);
  };

  const addToCart = () => {
    const itemInStock = cartLocal.itemQanInCart(data.inventoryProductID);
    let product = {
      inventoryProductID: data.inventoryProductID,
      productName: data.productName,
      farmerName: data.farmer.farmerName,
      farmerID: data.farmerID,
      quantity: quantity,
      price: data.price,
      image: data.image,
      instockQuantity: data.quantity,
    };

    if (quantity + itemInStock > data.quantity) {
      message.error("Not enough instock");
    } else cartLocal.addToCart(product);
  };

  return (
    <div
      className="bg-white p-2 rounded-2xl cursor-pointer"
      style={{
        boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="space-y-8 w-full px-8" onClick={() => onClick(data)}>
        <div className="text-[#204E51] text-center font-bold text-[1.5rem]">
          {data.productName}
        </div>

        <div className="space-y-2 text-center text-[#204E51]">
          <div
            className="mx-auto border rounded-2xl w-[100%] py-4"
            style={{
              boxShadow: "5px 5px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img
              src={`${data.image}`}
              alt=""
              className="mx-auto h-[20rem] w-[15rem] rounded-2xl"
            />
          </div>
          <div>
            <span className="text-[1.5rem] font-semibold">
              ${data.price}/kg
            </span>
          </div>

          <div className="text-left">
            {data.description.substring(0, 30)} . . .
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div className="text-[#204E51] text-[1rem] font-semibold">
              {data.farmer.farmerName}
            </div>

            <div>
              <div className="rating rating-md">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between mx-4">
          <div>
            <div className="flex space-x-4 text-black mb-2">
              <button
                className="border border-black rounded-full p-2 cursor-pointer"
                style={{
                  lineHeight: "0.5rem",
                }}
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <div className="border border-black px-4 rounded-lg">
                {quantity}
              </div>
              <button
                className="border border-black rounded-full p-2 cursor-pointer"
                style={{
                  lineHeight: "0.5rem",
                }}
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
            <span>{data.quantity}kg in stock</span>
          </div>

          {/* Button Add to cart  */}
          <div className="text-black">
            <button
              onClick={addToCart}
              className="px-4 py-2 border rounded-xl border-black hover:bg-[#63B6BD] hover:text-white hover:border-[transparent]"
              disabled={isDisabled}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
