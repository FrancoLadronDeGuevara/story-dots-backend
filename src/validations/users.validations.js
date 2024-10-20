const { body } = require("express-validator");

const userValidations = {
  email: body("email")
    .isEmail()
    .withMessage("El email no es válido")
    .notEmpty()
    .withMessage("El email es requerido"),

  password: body("password")
    .notEmpty()
    .withMessage("La contraseña es requerida"),
};

module.exports = {
  userValidations,
};
