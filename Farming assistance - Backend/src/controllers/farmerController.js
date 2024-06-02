import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Sequelize } from "sequelize";

import { responseData } from "../config/response.js";
import inventoryproduct from "../models/inventoryproduct.js";

let model = initModels(sequelize);
let Op = Sequelize.Op;

export const getProfile = async (req, res) => {
  let { userID } = req.params;
  let data = await model.farmer.findOne({
    where: {
      userID: userID,
    },
    include: ["user", "payment"],
  });
  responseData(res, "Success", data, 200);
};
export const updateProfile = async (req, res) => {
  try {
    let { farmerID } = req.params;
    let { farmerName, phone, email, address } = req.body;
    let getNewProfile = await model.farmer.findOne({
      where: {
        farmerID: farmerID,
      },
    });
    getNewProfile.farmerName = farmerName;
    getNewProfile.phone = phone;
    getNewProfile.email = email;
    getNewProfile.address = address;

    await model.farmer.update(getNewProfile.dataValues, {
      where: {
        farmerID: farmerID,
      },
    });
    let data = await model.farmer.findOne({
      where: {
        userID: userID,
      },
      include: ["user", "payment"],
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error", "", 500);
  }
};
export const getTips = async (req, res) => {
  try {
    let data = await model.farmingtips.findAll({});
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};
export const editProduct = async (req, res) => {
  try {
    let { inventoryProductID } = req.params;

    let { quantity, price, image, description } = req.body;
    let getProduct = await model.inventoryproduct.findOne({
      where: {
        inventoryProductID,
      },
    });

    getProduct.quantity = quantity;
    getProduct.price = price;
    getProduct.image = image;
    getProduct.description = description;

    await model.inventoryproduct.update(getProduct.dataValues, {
      where: {
        inventoryProductID: getProduct.inventoryProductID,
      },
    });

    responseData(res, "successfully", getProduct, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

// let getProductID = await model.inventoryproduct.findOne({
//   where: {
//     inventoryProductID,
//   },
// });

export const removeProduct = async (req, res) => {
  try {
    let { inventoryProductID } = req.params;
    let getProduct = await model.inventoryproduct.findOne({
      where: {
        inventoryProductID,
      },
    });
    getProduct.status = 0;
    await model.inventoryproduct.update(getProduct.dataValues, {
      where: {
        inventoryProductID: getProduct.inventoryProductID,
      },
    });

    responseData(res, "successfully", "", 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

export const addProduct = async (req, res) => {
  try {
    let { farmerID } = req.params;
    let { productName, quantity, price, image, description } = req.body;
    let data = await model.inventoryproduct.create({
      farmerID: farmerID,
      productName,
      quantity,
      price,
      image,
      description,
      status: 1,
    });
    // let data = await model.inventoryproduct.findAll({
    //   where: {
    //     farmerID: farmerID,
    //     status: 1,
    //   },
    // });
    // Sending a success response
    responseData(res, "Successfully", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

export const getProduct = async (req, res) => {
  try {
    let { farmerID } = req.params;
    let data = await model.inventoryproduct.findAll({
      where: {
        farmerID: farmerID,
        status: 1,
      },
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

export const getOrder = async (req, res) => {
  try {
    let { farmerID } = req.params;
    let data = await model.order.findAll({
      where: {
        farmerID: farmerID,
      },
      include: ["supplier", "inventoryProduct"],
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

// API upload images, done
// yarn add gifsicle@5.2.1 pngquant-bin@6.0.1
import fs from "fs";

export const uploadAvatar = async (req, res) => {
  try {
    // Read the image file from the file system
    let { file } = req;
    let { farmerID } = req.body;
    let imageData = fs.readFileSync(
      process.cwd() + "/public/imgs/" + file.filename
    );

    // Convert image data to base64 encoding
    let base64Image = `data:${file.mimetype}; base64, ${Buffer.from(
      imageData
    ).toString("base64")}`;

    // Update the admin table with the image data
    let farmer = await model.farmer.findOne({
      where: { farmerID },
    });
    if (!farmer) {
      responseData(res, "Farmer not found", "", 404);
    }
    // Update the avatarImg column with the base64 encoded image
    farmer.avatarImg = base64Image;
    await farmer.save();
    responseData(res, "Success", farmer, 200);
  } catch (err) {
    responseData(res, "Error ...", "", 500);
  }
};
