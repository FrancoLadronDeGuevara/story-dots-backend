const {Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "El email es obligatorio"]
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
}, {
    timestamps: true
});

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
        expiresIn: process.env.TOKEN_EXPIRES_IN
    });
};

module.exports = model("User", userSchema);