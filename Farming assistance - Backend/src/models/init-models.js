import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _account from  "./account.js";
import _admin from  "./admin.js";
import _complaints from  "./complaints.js";
import _farmer from  "./farmer.js";
import _farmingtips from  "./farmingtips.js";
import _inventoryproduct from  "./inventoryproduct.js";
import _order from  "./order.js";
import _payment from  "./payment.js";
import _role from  "./role.js";
import _supplier from  "./supplier.js";
import _transaction from  "./transaction.js";

export default function initModels(sequelize) {
  const account = _account.init(sequelize, DataTypes);
  const admin = _admin.init(sequelize, DataTypes);
  const complaints = _complaints.init(sequelize, DataTypes);
  const farmer = _farmer.init(sequelize, DataTypes);
  const farmingtips = _farmingtips.init(sequelize, DataTypes);
  const inventoryproduct = _inventoryproduct.init(sequelize, DataTypes);
  const order = _order.init(sequelize, DataTypes);
  const payment = _payment.init(sequelize, DataTypes);
  const role = _role.init(sequelize, DataTypes);
  const supplier = _supplier.init(sequelize, DataTypes);
  const transaction = _transaction.init(sequelize, DataTypes);

  admin.belongsTo(account, { as: "user", foreignKey: "userID"});
  account.hasMany(admin, { as: "admins", foreignKey: "userID"});
  farmer.belongsTo(account, { as: "user", foreignKey: "userID"});
  account.hasMany(farmer, { as: "farmers", foreignKey: "userID"});
  supplier.belongsTo(account, { as: "user", foreignKey: "userID"});
  account.hasMany(supplier, { as: "suppliers", foreignKey: "userID"});
  complaints.belongsTo(farmer, { as: "farmer", foreignKey: "farmerID"});
  farmer.hasMany(complaints, { as: "complaints", foreignKey: "farmerID"});
  inventoryproduct.belongsTo(farmer, { as: "farmer", foreignKey: "farmerID"});
  farmer.hasMany(inventoryproduct, { as: "inventoryproducts", foreignKey: "farmerID"});
  order.belongsTo(farmer, { as: "farmer", foreignKey: "farmerID"});
  farmer.hasMany(order, { as: "orders", foreignKey: "farmerID"});
  complaints.belongsTo(inventoryproduct, { as: "inventoryproduct", foreignKey: "inventoryproductID"});
  inventoryproduct.hasMany(complaints, { as: "complaints", foreignKey: "inventoryproductID"});
  order.belongsTo(inventoryproduct, { as: "inventoryProduct", foreignKey: "inventoryProductID"});
  inventoryproduct.hasMany(order, { as: "orders", foreignKey: "inventoryProductID"});
  farmer.belongsTo(payment, { as: "payment", foreignKey: "paymentID"});
  payment.hasMany(farmer, { as: "farmers", foreignKey: "paymentID"});
  supplier.belongsTo(payment, { as: "payment", foreignKey: "paymentID"});
  payment.hasMany(supplier, { as: "suppliers", foreignKey: "paymentID"});
  account.belongsTo(role, { as: "role", foreignKey: "roleID"});
  role.hasMany(account, { as: "accounts", foreignKey: "roleID"});
  complaints.belongsTo(supplier, { as: "supplier", foreignKey: "supplierID"});
  supplier.hasMany(complaints, { as: "complaints", foreignKey: "supplierID"});
  order.belongsTo(supplier, { as: "supplier", foreignKey: "supplierID"});
  supplier.hasMany(order, { as: "orders", foreignKey: "supplierID"});
  transaction.belongsTo(supplier, { as: "supplier", foreignKey: "supplierID"});
  supplier.hasMany(transaction, { as: "transactions", foreignKey: "supplierID"});
  order.belongsTo(transaction, { as: "transaction", foreignKey: "transactionID"});
  transaction.hasMany(order, { as: "orders", foreignKey: "transactionID"});

  return {
    account,
    admin,
    complaints,
    farmer,
    farmingtips,
    inventoryproduct,
    order,
    payment,
    role,
    supplier,
    transaction,
  };
}
