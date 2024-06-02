import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Sequelize } from "sequelize";

import { responseData } from "../config/response.js";

let model = initModels(sequelize);
let Op = Sequelize.Op;

export const login = async (req, res) => {
  // try {
  let { roleID, userName, password } = req.body;

  // check email và pass_word == table user
  // SELECT * FROM users WHERE email=email AND pass_word= pass_word
  // if(email==email && pass_word==pass_word)
  let checkUser = await model.account.findOne({
    where: {
      roleID: roleID,
      userName: userName,
    },
  });

  // exist => login successfully
  if (checkUser) {
    if (checkUser.password == password) {
      let token = { userID: checkUser.userID };

      // UPDATE users SET ... WHERE ...

      responseData(res, "Login successfully", token, 200);
    } else {
      // ko tồn tại => sai email hoặc pass
      responseData(res, "this account doesn't exist", "", 400);
    }
  } else {
    responseData(res, "Account doesn't exist", "", 400);
  }
};
