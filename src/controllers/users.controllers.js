const sendToken = require("../helpers/createUserToken.helper");
const { getByEmailService, getUserService } = require("../services/users.services");

const loginUser = async (req, res) => {
  try {
    const user = req.body;

    const userFound = await getByEmailService(user.email);

    if (!userFound)
      return res.status(400).json({ message: "El email no se encuentra registrado" });

    if (userFound.password !== user.password)
      return res.status(400).json({ message: "La contraseña es incorrecta" });

    sendToken(userFound, 201, res);
  } catch (error) {
    return res.status(500).json({ message: "Error al loguearse", error });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(200).json({
      message: "Cerraste sesion con exito!",
    });
  } catch (error) {
    return res.status(400).json({ message: "Error al cerrar sesión", error });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.user;

    const userFound = await getUserService(id);

    if (!userFound) {
      return res.status(400).json({ message: "El usuario no existe" });
    }

    res.status(200).json({ user: userFound, message: "Usuario encontrado" });  
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al obtener el usuario", error });
  }
};

module.exports = {
  loginUser,
  logoutUser,
  getUser,
};
