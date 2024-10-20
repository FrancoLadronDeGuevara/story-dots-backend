const Router = require("express");
const route = Router();
const {
  isAdmin,
  isAuthenticated,
} = require("../middlewares/authentication.middleware");
const { brandValidations } = require("../validations/brands.validations");
const { validateFields } = require("../middlewares/validateFields.middleware");
const {
  createBrand,
  updateBrand,
  getAllBrands,
  deleteBrand,
} = require("../controllers/brands.controllers");

route.post(
  "/create",
  isAuthenticated,
  isAdmin("admin"),
  [brandValidations.name, brandValidations.logo_url],
  validateFields,
  createBrand
);

route.get("/", getAllBrands);

route.put(
  "/update/:id",
  isAuthenticated,
  isAdmin("admin"),
  [brandValidations.name, brandValidations.logo_url],
  validateFields,
  updateBrand
);

route.delete("/delete/:id", isAuthenticated, isAdmin("admin"), deleteBrand);

module.exports = route;
