const { Sequelize, DataTypes, Model } = require("sequelize"); //for things like Sequelize.STRING
//import your db
const db = require("../db");

//define your model
class Campus extends Model {}

Campus.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue:
        "https://i.pinimg.com/originals/fa/1c/69/fa1c69557a3965c3a352c47578ea40ff.jpg",
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize: db, modelName: "campuses" }
);
//define any class or instance methods
Campus.beforeCreate = function (instance) {
  if (!instance.imageUrl.length) {
    instance.imageUrl =
      "https://i.pinimg.com/originals/fa/1c/69/fa1c69557a3965c3a352c47578ea40ff.jpg";
  }
};
//export your model
module.exports = Campus;
