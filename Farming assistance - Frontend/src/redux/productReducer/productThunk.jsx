import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { productService } from "../../service/productService";

export const productThunk = createAsyncThunk("productThunk/deleteProduct");

export const delProductThunk = createAsyncThunk(
  "productThunk/delete",
  async (payload) => {
    try {
      const data = productService.deleteProduct(payload);
      message.success("delete success");

      return data;
    } catch (error) {
      message.error("delete fail");
    }
  }
);
