import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transDetail } from "../../../../redux/userReducer/userThunk";

const ATransInfor = ({ data }) => {
  const { detailTransList } = useSelector((state) => state.userReducer);
  console.log("TransInfor ~ detailTransList:", detailTransList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(transDetail(data.transactionID));
    };
    fetchData();
  }, [dispatch]);

  const fetchListProduct = () => {
    if (!detailTransList)
    return detailTransList?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.orderID}</td>
          <td>{item?.inventoryProduct.productName}</td>
          <td>{item?.supplier.supplierName}</td>
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
            <th>supplier</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{fetchListProduct()}</tbody>
      </table>
    </div>
  );
};

export default ATransInfor;