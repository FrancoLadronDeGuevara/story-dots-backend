const {Schema, model} = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre del producto es obligatorio"]
    },
    description: {
        type: String,
        required: [true, "La descripción del producto es obligatoria"]
    },
    price: {
        type: Number,
        required: [true, "El precio del producto es obligatorio"]
    },
    image_url: {
        type: String,
        required: [true, "La imagen del producto es obligatoria"]
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: [true, "La marca del producto es obligatoria"]
    }
}, {
    timestamps: true
});

module.exports = model("Product", productSchema);