const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
  };
  
  const User = sequelize.define("User", attributes);

  return User;
}
