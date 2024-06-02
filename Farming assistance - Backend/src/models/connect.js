import { Sequelize } from "sequelize";
import config from "../config/config.js";

const sequelize = new Sequelize(config.database, config.user, config.pass, {
  host: config.host,
  port: config.port,
  dialect: config.dialect, // name of database
});

export default sequelize;

// try {
//   await sequelize.authenticate();
//   console.log("Connect success!");
// } catch (err) {
//   console.log(err);
// }
