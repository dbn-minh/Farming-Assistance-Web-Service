import express from "express";
import {
  addTip,
  getAdmin,
  getComplaints,
  getOrder,
  getTips,
  getTransactions,
  uploadAvatar,
  updateInfo,
} from "../controllers/adminController.js";

const adminRoute = express.Router();

// API get admin info
adminRoute.get("/get-admin/:userID", getAdmin);

// API to update info admin
adminRoute.put("/update-info/:adminID", updateInfo);

// API get all the tips
adminRoute.get("/tip", getTips);

// API post new tips
adminRoute.post("/add-tip", addTip);

// API get all complaints
adminRoute.get("/complaint", getComplaints);

// API get all complaints
adminRoute.get("/transaction", getTransactions);

// API get all order
adminRoute.get("/order/:transactionID", getOrder);

// API upload avatar
import upload from "../config/upload.js";

// yarn add multer
adminRoute.post("/upload-avatar", upload.single("avatarImg"), uploadAvatar);

export default adminRoute;
