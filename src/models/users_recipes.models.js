const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Recipes = require("./recipes.models");
const Users = require("./users.models");
const UserRecipes = db.define("user_recipes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "User_id",
    reference: {
      key: "id",
      model: Users,
    },
  },
  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "recipe_id",
    reference: {
      key: "id",
      model: Recipes,
    },
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UserRecipes;
