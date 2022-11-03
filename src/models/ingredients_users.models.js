const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Ingredients = require("./ingredients.models");
const Users = require("./users.models");
const IngredientsUsers = db.define("ingredients_user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    reference: {
      key: "id",
      model: Users,
    },
  },
  ingredientId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "ingredient_id",
    reference: {
      key: "id",
      model: Ingredients,
    },
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = IngredientsUsers;
