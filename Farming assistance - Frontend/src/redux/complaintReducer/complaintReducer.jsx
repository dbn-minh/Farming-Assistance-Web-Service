import { createSlice } from "@reduxjs/toolkit";
import { complaintThunk } from "./complaintThunk";

const initialState = {};

const complaintReducer = createSlice({
  name: "complaintReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(complaintThunk.fulfilled, (state, action) => {});
  },
});

export const {} = complaintReducer.actions;

export default complaintReducer.reducer;
