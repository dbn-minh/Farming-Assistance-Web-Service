import express from "express";
// import express from "express";
import {
  getProfile,
  updateProfile,
  getTips,
  getProduct,
  editProduct,
  removeProduct,
  addProduct,
  uploadAvatar,
  getOrder,
} from "../controllers/farmerController.js";

const farmerRoute = express.Router();

farmerRoute.get("/get-farmer/:userID", getProfile);

farmerRoute.put("/update-info/:farmerID", updateProfile);

farmerRoute.get("/tip", getTips);

farmerRoute.get("/inventory/:farmerID", getProduct);

farmerRoute.put("/inventory/:inventoryProductID", editProduct);

farmerRoute.put("/delete-product/:inventoryProductID", removeProduct);

farmerRoute.post("/inventory/:farmerID", addProduct);

farmerRoute.get("/transaction/:farmerID", getOrder);

// API upload avatar
import upload from "../config/upload.js";

// yarn add multer
farmerRoute.post("/upload-avatar", upload.single("avatarImg"), uploadAvatar);

export default farmerRoute;
