const router = require("express").Router();
const passport = require("passport");
const recipeServices = require("./recipes.services");

require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(recipeServices.getAllRecipes)
  .post(
    passport.authenticate("jwt", { session: false }),
    recipeServices.createRecipe
  );

router
  .route("/:recipe_id")
  .get(recipeServices.getRecipeById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    recipeServices.patchRecipe
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    recipeServices.deleteRecipe
  );

router.get(
  "/me/my_recipes",
  passport.authenticate("jwt", { session: false }),
  getUserRecipes
);

module.exports = router;
