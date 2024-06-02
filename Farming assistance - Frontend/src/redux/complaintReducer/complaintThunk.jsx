import { createAsyncThunk } from "@reduxjs/toolkit";
import { complaintService } from "../../service/complaintService";
import { message } from "antd";

export const complaintThunk = createAsyncThunk(
  "complaintReducer/complaintThunk",
  async (payload) => {
    try {
      const data = await complaintService.postCom(payload);
      message.success("complaint success");
      return data;
    } catch (error) {
      message.error("post complaint fail");
    }
  }
);
