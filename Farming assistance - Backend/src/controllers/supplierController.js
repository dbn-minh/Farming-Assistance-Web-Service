import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Sequelize } from "sequelize";

import { responseData } from "../config/response.js";

let model = initModels(sequelize);
let Op = Sequelize.Op;
export const getProfile = async (req, res) => {
  let { userID } = req.params;
  let data = await model.supplier.findOne({
    where: {
      userID: userID,
    },
    include: ["user", "payment"],
  });
  responseData(res, "Success", data, 200);
};
export const updateProfile = async (req, res) => {
  try {
    let { supplierID } = req.params;
    let { supplierName, phone, email, address } = req.body;
    let getNewProfile = await model.supplier.findOne({
      where: {
        supplierID: supplierID,
      },
    });
    getNewProfile.supplierName = supplierName;
    getNewProfile.phone = phone;
    getNewProfile.email = email;
    getNewProfile.address = address;

    await model.supplier.update(getNewProfile.dataValues, {
      where: {
        supplierID: supplierID,
      },
    });
    let data = await model.supplier.findOne({
      where: {
        supplierID: supplierID,
      },
      include: ["user", "payment"],
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error", "", 500);
  }
};

// export const getProductPage = async (req, res) => {
//   try {
//     let { page } = req.params;
//     let pageSize = 6;
//     let index = (page - 1) * pageSize;

//     let dataCount = await model.inventoryproduct.count();
//     let totalPage = Math.ceil(dataCount / pageSize);

//     // SELECT * FROM video LIMIT index , pageSize
//     let data = await model.inventoryproduct.findAll({
//       offset: index,
//       limit: pageSize,
//     });
//     responseData(res, "successfully", { data, totalPage }, 200);
//   } catch {
//     responseData(res, "Error...", "", 500);
//   }
// };

export const getAllProduct = async (req, res) => {
  try {
    // SELECT * FROM video LIMIT index , pageSize
    let data = await model.inventoryproduct.findAll({
      where: {
        status: 1,
        quantity: {
          [Op.gt]: 0,
        },
      },
      include: ["farmer"],
    });

    responseData(res, "successfully", data, 200);
  } catch {
    responseData(res, "Error...", "", 500);
  }
};

// SELECT *
// FROM inventoryproduct
// WHERE productName LIKE '%{productName}%';

export const searchProducts = async (req, res) => {
  try {
    let { productName } = req.params;
    let data = await model.inventoryproduct.findAll({
      where: {
        status: 1,
        productName: {
          [Op.like]: "%" + productName + "%",
        },
      },
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error", "", 500);
  }
};

export const orderProducts = async (req, res) => {
  try {
    let { supplierID } = req.params;
    const products = req.body.products;

    // If the cart is empty, send a response indicating that the cart is empty
    if (products.length === 0) {
      responseData(res, "Cart is empty", "", 400);
      return; // Exit the function early
    }

    let newTransaction = await model.transaction.create({
      supplierID: supplierID,
    });
    let totalPrice = 0;
    for (const product of products) {
      const { inventoryProductID, quantity } = product;

      const getProduct = await model.inventoryproduct.findOne({
        where: {
          inventoryProductID: inventoryProductID,
        },
      });
      await model.order.create({
        inventoryProductID: inventoryProductID,
        transactionID: newTransaction.transactionID,
        price: getProduct.price * quantity,
        quantity: quantity,
        farmerID: getProduct.farmerID,
        supplierID: supplierID,
      });
      const data = await model.farmer.findOne({
        where: {
          farmerID: getProduct.farmerID,
        },
        include: ["payment"],
      });

      const getReturnedMoney = await model.payment.findOne({
        where: {
          paymentID: data.paymentID,
        },
      });

      let returnedMoney = getProduct.price * quantity;
      getReturnedMoney.balance += returnedMoney;

      await model.payment.update(getReturnedMoney.dataValues, {
        where: {
          paymentID: getReturnedMoney.paymentID,
        },
      });

      totalPrice += getProduct.price * quantity;

      getProduct.quantity -= quantity;

      await model.inventoryproduct.update(getProduct.dataValues, {
        where: {
          inventoryProductID: inventoryProductID,
        },
      });
    }

    newTransaction.totalPrice = totalPrice;
    await model.transaction.update(newTransaction.dataValues, {
      where: {
        transactionID: newTransaction.transactionID,
      },
    });

    const data = await model.supplier.findOne({
      where: {
        supplierID: supplierID,
      },
      include: ["payment"],
    });

    const newSupplierBalance = await model.payment.findOne({
      where: {
        paymentID: data.paymentID,
      },
    });

    newSupplierBalance.balance -= totalPrice;

    await model.payment.update(newSupplierBalance.dataValues, {
      where: {
        paymentID: newSupplierBalance.paymentID,
      },
    });

    responseData(res, "successfully", "", 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};
export const getTransaction = async (req, res) => {
  try {
    const { supplierID } = req.params;
    let data = await model.transaction.findAll({
      where: { supplierID: supplierID },
      include: ["supplier"],
      // {
      //   model: model.supplier,
      //   as: "supplier",
      //   attributes: ["supplierName", "phone", "email", "address", "avatarImg"],
      // },
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

// SELECT o.*, f.*, ip.*
// FROM `order` o
// LEFT JOIN farmer f ON o.farmerID = f.farmerID
// LEFT JOIN inventoryproduct ip ON o.inventoryProductID = ip.inventoryProductID
// WHERE o.transactionID = {transactionID};

export const getDetailOfTransaction = async (req, res) => {
  try {
    const { transactionID } = req.params;
    let data = await model.order.findAll({
      where: {
        transactionID: transactionID,
      },
      include: ["farmer", "inventoryProduct"],
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

export const getDetailOfProduct = async (req, res) => {
  try {
    const { inventoryProductID } = req.params;
    let data = await model.inventoryproduct.findAll({
      where: { inventoryProductID: inventoryProductID },
      include: ["farmer"],
      // {
      //   model: model.farmer,
      //   as: "farmer",
      //   attributes: ["farmerName", "phone", "email"],
      // },
    });
    responseData(res, "successfully", data, 200);
  } catch (exception) {
    responseData(res, "Error...", "", 500);
  }
};

// Assuming your existing Sequelize models are properly defined

// Send a success response

export const postComplaint = async (req, res) => {
  // try {
  // Assuming req.body contains the complaint data, adapt this to your actual request body
  const { content, supplierID, farmerID, inventoryproductID } = req.body;

  // Create the complaint in your database
  const complaint = await model.complaints.create({
    content,
    supplierID,
    farmerID,
    inventoryproductID,
    // Add other complaint data here as needed
  });

  // Send a success response
  responseData(res, "Complaint created successfully", complaint, 200);

  // } catch (error) {
  //   // Handle errors
  //   console.error("Error creating complaint:", error);
  //   responseData(res, "Error creating complaint", null, 500);
  // }
};

// API upload images, done
// yarn add gifsicle@5.2.1 pngquant-bin@6.0.1
import fs from "fs";

export const uploadAvatar = async (req, res) => {
  // try {
  // Read the image file from the file system
  let { file } = req;
  let { supplierID } = req.body;
  let imageData = fs.readFileSync(
    process.cwd() + "/public/imgs/" + file.filename
  );

  // Convert image data to base64 encoding
  let base64Image = `data:${file.mimetype}; base64, ${Buffer.from(
    imageData
  ).toString("base64")}`;

  // Update the admin table with the image data
  let supplier = await model.supplier.findOne({
    where: { supplierID },
  });
  if (!supplier) {
    responseData(res, "Supplier not found", "", 404);
  }

  // Update the avatarImg column with the base64 encoded image
  supplier.avatarImg = base64Image;
  await supplier.save();
  responseData(res, "Success", supplier, 200);
  // } catch (err) {
  //   responseData(res, "Error ...", "", 500);
  // }
};
