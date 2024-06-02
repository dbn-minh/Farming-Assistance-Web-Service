import { createSlice } from "@reduxjs/toolkit";
import { cartService } from "../../service/cartService";
import { message } from "antd";

const initialState = {};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => [
    builder.addCase(cartService.fulfilled, (state, action) => {
      console.log("postCheck");
      message.success("Order success");
    }),
  ],
});

export const {} = cartReducer.actions;

export default cartReducer.reducer;
