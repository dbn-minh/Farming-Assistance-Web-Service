import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../../service/cartService";
import { message } from "antd";

export const cartThunk = createAsyncThunk(
  "cartReducer/cartThunk",
  async (payload) => {
    try {
      let data = await cartService.postOrder(
        payload.orderList,
        payload.supplierID,
        payload.roleName
      );
      message.success("build success");

      return data;
    } catch (error) {
      console.log("error:", error);
    }
  }
);
