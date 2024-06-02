import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class farmingtips extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    tipID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'farmingtips',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tipID" },
        ]
      },
    ]
  });
  }
}
