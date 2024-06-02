import express from "express";
import { login } from "../controllers/authController.js";

const authRoute = express.Router();

//login
authRoute.post("/login", login);
//signup

export default authRoute;
