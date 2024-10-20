const Router = require("express");
const route = Router();
const {
  isAdmin,
  isAuthenticated,
} = require("../middlewares/authentication.middleware");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controllers");
const { productValidations } = require("../validations/products.validations");
const { validateFields } = require("../middlewares/validateFields.middleware");

route.get("/", getAllProducts);

route.get("/get/:id", getProductById);

route.post(
  "/create",
  isAuthenticated,
  isAdmin("admin"),
  [
    productValidations.name,
    productValidations.description,
    productValidations.price,
    productValidations.image_url,
    productValidations.brand,
  ],
  validateFields,
  createProduct
);

route.put(
  "/update/:id",
  isAuthenticated,
  isAdmin("admin"),
  [
    productValidations.name,
    productValidations.description,
    productValidations.price,
    productValidations.image_url,
    productValidations.brand,
  ],
  validateFields,
  updateProduct
);

route.delete("/delete/:id", isAuthenticated, isAdmin("admin"), deleteProduct);

module.exports = route;
