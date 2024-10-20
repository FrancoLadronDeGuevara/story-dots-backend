const { body } = require("express-validator");

const productValidations = {
  name: body("name")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio.")
    .isLength({ max: 100 })
    .withMessage("El nombre del producto no debe exceder los 100 caracteres."),
  description: body("description")
    .notEmpty()
    .withMessage("La descripción del producto es obligatoria.")
    .isLength({ max: 500 })
    .withMessage("La descripción no debe exceder los 500 caracteres."),
  image_url: body("image_url")
    .notEmpty()
    .withMessage("La URL de la imagen es obligatoria.")
    .isURL()
    .withMessage("La URL de la imagen no es válida."),
  price: body("price")
    .notEmpty()
    .withMessage("El precio es obligatorio.")
    .isFloat({ gt: 0 })
    .withMessage("El precio debe ser un número mayor a 0."),
  brand: body("brand")
    .notEmpty()
    .withMessage("La marca del producto es obligatoria."),
};

module.exports = {
  productValidations,
};
