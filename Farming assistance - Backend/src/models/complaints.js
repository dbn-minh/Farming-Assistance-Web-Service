import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class complaints extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    complaintID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    supplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'supplier',
        key: 'supplierID'
      }
    },
    farmerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'farmer',
        key: 'farmerID'
      }
    },
    inventoryproductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inventoryproduct',
        key: 'inventoryProductID'
      }
    }
  }, {
    sequelize,
    tableName: 'complaints',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "complaintID" },
        ]
      },
      {
        name: "supplierID",
        using: "BTREE",
        fields: [
          { name: "supplierID" },
        ]
      },
      {
        name: "farmerID",
        using: "BTREE",
        fields: [
          { name: "farmerID" },
        ]
      },
      {
        name: "complaints_ibfk_3",
        using: "BTREE",
        fields: [
          { name: "inventoryproductID" },
        ]
      },
    ]
  });
  }
}
