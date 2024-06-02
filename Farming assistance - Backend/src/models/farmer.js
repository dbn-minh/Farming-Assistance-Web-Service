import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class farmer extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    farmerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'account',
        key: 'userID'
      }
    },
    farmerName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    paymentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payment',
        key: 'paymentID'
      }
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatarImg: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'farmer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "farmerID" },
        ]
      },
      {
        name: "userID",
        using: "BTREE",
        fields: [
          { name: "userID" },
        ]
      },
      {
        name: "paymentID",
        using: "BTREE",
        fields: [
          { name: "paymentID" },
        ]
      },
    ]
  });
  }
}
