const User = require("../models/users.model");

const getByEmailService = async (email) =>{
    try {
        const user = await User.findOne({email});
        return user;
    } catch (error) {
        console.error("Error en el servicio: No se pudo obtener el email del usuario", error);
        throw new Error("Error en el servicio: No se pudo obtener el email del usuario");
    }   
}

const getUserService = async (id) =>{
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error("Error en el servicio: No se pudo obtener el usuario", error);
        throw new Error("Error en el servicio: No se pudo obtener el usuario");
    }   
}

module.exports = {
    getByEmailService,
    getUserService
}