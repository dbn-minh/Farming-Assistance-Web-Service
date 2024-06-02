import express from 'express';
import farmerRoute from './farmerRoute.js';
import authRoute from './authRoute.js'
import supplierRoute from './supplierRoute.js'; 
import adminRoute from "./adminRoutes.js";

const rootRoute = express.Router();

rootRoute.use("/farmer", farmerRoute)

rootRoute.use("/admin", adminRoute);

rootRoute.use("/auth", authRoute)

rootRoute.use("/supplier", supplierRoute)


export default rootRoute;


