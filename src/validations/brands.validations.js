const { body } = require("express-validator");

const brandValidations = {
  name: body("name")
    .notEmpty()
    .withMessage("El nombre de la marca es obligatorio.")
    .isLength({ max: 50 })
    .withMessage("El nombre de la marca no debe exceder los 100 caracteres."),
  logo_url: body("logo_url")
    .notEmpty()
    .withMessage("La imagen de la marca es obligatoria.")
    .isURL()
    .withMessage("La URL de la imagen no es válida."),
};

module.exports = {
  brandValidations,
};
