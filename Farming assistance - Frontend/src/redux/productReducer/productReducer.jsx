import { createSlice } from "@reduxjs/toolkit";
import { delProductThunk } from "./productThunk";
import { message } from "antd";

const initialState = {};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(delProductThunk.fulfilled, (state, action) => {
      message.success("delete success");
    });
  },
});

export const {} = productReducer.actions;

export default productReducer.reducer;
