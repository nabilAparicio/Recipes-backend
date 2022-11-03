const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Recipes = require("./recipes.models");
const Ingredients = require("./ingredients.models");
const IngredientsRecipes = db.define("ingredients_recipes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
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
  ingredientId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "ingredient_id",
    reference: {
      key: "id",
      model: Ingredients,
    },
  },
});

module.exports = IngredientsRecipes;
