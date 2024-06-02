import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
let model = initModels(sequelize);

// Get the admin information for the profile page, Can FE give the userID through the req.parms?
export const getAdmin = async (req, res) => {
  try {
    let { userID } = req.params;
    let data = await model.admin.findOne({
      where: {
        userID: userID,
      },
      include: ["user"],
    });

    if (!data) {
      return responseData(res, "Admin not found", "", 404);
    }

    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// update admin info, PostMan ok but Swagger error
export const updateInfo = async (req, res) => {
  try {
    let { adminID } = req.params;
    let { adminName, phone, email, address } = req.body;
    let getUser = await model.admin.findOne({
      where: {
        adminID,
      },
    });

    getUser.adminName = adminName;
    getUser.phone = phone;
    getUser.email = email;
    getUser.address = address;

    await model.admin.update(getUser.dataValues, {
      where: {
        adminID,
      },
    });



    responseData(res, "successfully", getUser, 200);
  } catch (err) {
    responseData(res, "Error", "", 500);
  }
};

// Get all the tips, done
export const getTips = async (req, res) => {
  try {
    // Fetch all tips from the database
    let data = await model.farmingtips.findAll();

    // Sending a success response with the tips
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// Add the new tips in admin side, done
export const addTip = async (req, res) => {
  try {
    let { title, content } = req.body;
    let data = await model.farmingtips.create({
      title: title,
      content: content,
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// API get all the complaint, done
export const getComplaints = async (req, res) => {
  try {
    let data = await model.complaints.findAll({
      include: ["supplier", "farmer"],
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// API get all the transactions, done
export const getTransactions = async (req, res) => {
  try {
    let data = await model.transaction.findAll({
      include: [
        {
          model: model.supplier,
          as: "supplier",
          attributes: ["supplierName", "email", "phone"],
        },
      ],
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// Get all the orders of given transactionID receive using params, can FE give the transactionID through params?
export const getOrder = async (req, res) => {
  try {
    let { transactionID } = req.params;
    let data = await model.order.findAll({
      where: {
        transactionID,
      },
      include: [
        {
          model: model.inventoryproduct,
          as: "inventoryProduct",
          attributes: ["productName", "quantity", "price"],
        },
        {
          model: model.farmer,
          as: "farmer",
          attributes: ["farmerName", "email", "phone"],
        },
        {
          model: model.supplier,
          as: "supplier",
          attributes: ["supplierName", "email", "phone"],
        },
      ],
    });
    // Sending a success response
    responseData(res, "Success", data, 200);
  } catch {
    responseData(res, "Error ...", "", 500);
  }
};

// API upload images, done
// yarn add gifsicle@5.2.1 pngquant-bin@6.0.1
import fs from "fs";

export const uploadAvatar = async (req, res) => {
  // try {
  // Read the image file from the file system
  let { file } = req;
  let { adminID } = req.body;
  let imageData = fs.readFileSync(
    process.cwd() + "/public/imgs/" + file.filename
  );

  // Convert image data to base64 encoding
  let base64Image = `data:${file.mimetype}; base64, ${Buffer.from(
    imageData
  ).toString("base64")}`;

  // Update the admin table with the image data
  let admin = await model.admin.findOne({
    where: { adminID },
  });
  if (!admin) {
    return responseData(res, "Admin not found", "", 404);
  }

  // Update the avatarImg column with the base64 encoded image
  admin.avatarImg = base64Image;
  await admin.save();
  responseData(res, "Success", admin, 200);
  // } catch (err) {
  //   responseData(res, "Error ...", "", 500);
  // }
};
