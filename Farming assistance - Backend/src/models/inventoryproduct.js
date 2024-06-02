import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class inventoryproduct extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    inventoryProductID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    farmerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'farmer',
        key: 'farmerID'
      }
    },
    productName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'inventoryproduct',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventoryProductID" },
        ]
      },
      {
        name: "farmerID",
        using: "BTREE",
        fields: [
          { name: "farmerID" },
        ]
      },
    ]
  });
  }
}
