const Categories = require("./categories.models");
const Ingredients = require("./ingredients.models");
const IngredientsRecipes = require("./ingredients_recipes.models");
const IngredientsUsers = require("./ingredients_users.models");
const Instructions = require("./instructions.models");
const Recipes = require("./recipes.models");
const Types = require("./types.models");
const Users = require("./users.models");
const UserRecipes = require("./users_recipes.models");

const initModels = () => {
  Users.hasMany(Recipes);
  Recipes.belongsTo(Users);

  Users.hasMany(UserRecipes);
  UserRecipes.belongsTo(Users);

  Recipes.hasMany(UserRecipes);
  UserRecipes.belongsTo(Recipes);

  Users.hasMany(IngredientsUsers);
  IngredientsUsers.belongsTo(Users);

  Ingredients.hasMany(IngredientsUsers);
  IngredientsUsers.belongsTo(Ingredients);

  Categories.hasMany(Recipes);
  Recipes.belongsTo(Categories);

  Types.hasMany(Ingredients);
  Ingredients.belongsTo(Types);

  Recipes.hasMany(IngredientsRecipes);
  IngredientsRecipes.belongsTo(Recipes);

  Ingredients.hasMany(IngredientsRecipes);
  IngredientsRecipes.belongsTo(Ingredients);

  Recipes.hasMany(Instructions);
  Instructions.belongsTo(Recipes);
};

module.exports = initModels;
