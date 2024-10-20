const {
  createProductService,
  getAllProductsService,
  updateProductService,
  deleteProductService,
  getProductByIdService,
} = require("../services/products.services");

const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res
      .status(200)
      .json({ products: products, message: "Todos los Productos" });
  } catch (error) {
    res.status(400).json({ message: "Error al obtener los Productos", error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);
    res.status(200).json({ product: product, message: "Producto encontrado" });
  } catch (error) {
    res.status(400).json({ message: "Error al obtener el Producto", error });
  }
}

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;

    const createdProduct = await createProductService(newProduct);

    res
      .status(201)
      .json({ product: createdProduct, message: "Producto creado" });
  } catch (error) {
    res.status(400).json({ message: "Error al crear el producto", error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;

    const updatedProduct = await updateProductService(id, product);

    res
      .status(200)
      .json({ product: updatedProduct, message: "Producto actualizado" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el producto", error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProductService(id);
    res
      .status(200)
      .json({ product: deletedProduct, message: "Producto eliminado" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el Producto", error });
  }
};

module.exports = {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
