import express from "express";
import {
  orderProducts,
  searchProducts,
  updateProfile,
  getAllProduct,
  getProfile,
  getTransaction,
  getDetailOfProduct,
  postComplaint,
  getDetailOfTransaction,
  uploadAvatar,
} from "../controllers/supplierController.js";

const supplierRoute = express.Router();

supplierRoute.get("/get-supplier/:userID", getProfile);

supplierRoute.put("/update-info/:supplierID", updateProfile);
supplierRoute.put("/order/:supplierID", orderProducts);
supplierRoute.get("/search/:productName", searchProducts);
supplierRoute.get("/store", getAllProduct);
supplierRoute.get("/transaction/:supplierID", getTransaction);
supplierRoute.get("/product-detail/:inventoryProductID", getDetailOfProduct);
supplierRoute.get(
  "/order-of-transaction/:transactionID",
  getDetailOfTransaction
);
supplierRoute.post("/complaint", postComplaint);

// API upload avatar
import upload from "../config/upload.js";

// yarn add multer
supplierRoute.post("/upload-avatar", upload.single("avatarImg"), uploadAvatar);

export default supplierRoute;
