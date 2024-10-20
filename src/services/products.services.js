const Product = require("../models/products.model");
const createProductService = async (product) => {
  try {
    const newProduct = await Product.create(product);
    const populatedProduct = await Product.findById(newProduct._id).populate(
      "brand"
    );
    return populatedProduct;
  } catch (error) {
    console.error("Error en el servicio: No se pudo crear el producto", error);
    throw new Error("Error en el servicio: No se pudo crear el producto");
  }
};

const getAllProductsService = async () => {
  try {
    const products = await Product.find().populate("brand");
    return products;
  } catch (error) {
    console.error(
      "Error en el servicio: No se pudo obtener los Productos",
      error
    );
    throw new Error("Error en el servicio: No se pudo obtener los Productos");
  }
};

const getProductByIdService = async (id) => {
  try {
    const product = await Product.findById(id).populate("brand");
    return product;
  } catch (error) {
    console.error(
      "Error en el servicio: No se pudo obtener el Producto",
      error
    );
    throw new Error("Error en el servicio: No se pudo obtener el Producto");
  }
};

const updateProductService = async (id, product) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    const populatedProduct = await Product.findById(
      updatedProduct._id
    ).populate("brand");
    return populatedProduct;
  } catch (error) {
    console.error(
      "Error en el servicio: No se pudo actualizar el producto",
      error
    );
    throw new Error("Error en el servicio: No se pudo actualizar el Producto");
  }
};

const deleteProductService = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  } catch (error) {
    console.error(
      "Error en el servicio: No se pudo eliminar el Producto",
      error
    );
    throw new Error("Error en el servicio: No se pudo eliminar el Producto");
  }
};

module.exports = {
  createProductService,
  getProductByIdService,
  getAllProductsService,
  updateProductService,
  deleteProductService,
};
