import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transDetail, transFarmerDetail } from "../../../../redux/userReducer/userThunk";

const TransInfor = ({ data }) => {
  const { transFarmerDetailProduct } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(transFarmerDetail(data.orderID));
    };
    fetchData();
  }, [dispatch]);

  const fetchListProduct = () => {
    return transFarmerDetailProduct?.map((item, index) => {
      console.log(item)
      return (
        <tr key={index}>
          <td>{item.orderID}</td>
          <td>{item?.inventoryProduct.productName}</td>
          <td>{item?.farmer.farmerName}</td>
          <td>{item?.inventoryProduct.price}</td>
          <td>{item?.inventoryProduct.quantity}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="table">
        {/* head */}
        <thead className="bg-[#204E51]">
          <tr className="text-white">
            <th>OrderID</th>
            <th>Product Name</th>
            <th>Farmer</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{fetchListProduct()}</tbody>
      </table>
    </div>
  );
};

export default TransInfor;