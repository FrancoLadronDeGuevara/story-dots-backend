const { Router } = require("express");
const route = Router();

const { isAuthenticated } = require("../middlewares/authentication.middleware");
const { validateFields } = require("../middlewares/validateFields.middleware");
const { userValidations } = require("../validations/users.validations");
const { loginUser, getUser, logoutUser } = require("../controllers/users.controllers");

route.get("/get", isAuthenticated, getUser);

route.post("/login", [userValidations.email, userValidations.password], validateFields, loginUser);

route.get("/logout", isAuthenticated, logoutUser);

module.exports = route;