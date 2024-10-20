const {Schema, model} = require("mongoose");

const brandSchema = new Schema({    
    name: {
        type: String,
        required: [true, "El nombre de la marca es obligatorio"]
    },
    logo_url: {
        type: String,
        required: [true, "La imagen de la marca es obligatoria"]
    }
}, {
    timestamps: true
});

module.exports = model("Brand", brandSchema);