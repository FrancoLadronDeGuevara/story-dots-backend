const {
  createBrandService,
  getAllBrandsService,
  updateBrandService,
  deleteBrandService,
} = require("../services/brands.services");

const createBrand = async (req, res) => {
  try {
    const newBrand = req.body;
    const createdBrand = await createBrandService(newBrand);
    res.status(201).json({ brand: createdBrand, message: "Marca creada" });
  } catch (error) {
    res.status(400).json({ message: "Error al crear la marca", error });
  }
};

const getAllBrands = async (req, res) => {
  try {
    const brands = await getAllBrandsService();
    res.status(200).json({ brands: brands, message: "Todas las marcas" });
  } catch (error) {
    res.status(400).json({ message: "Error al obtener las marcas", error });
  }
};

const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = req.body;
    const updatedBrand = await updateBrandService(id, brand);
    res.status(200).json({ brand: updatedBrand, message: "Marca actualizada" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la marca", error });
  }
};

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBrand = await deleteBrandService(id);
    res.status(200).json({ brand: deletedBrand, message: "Marca eliminada" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar la marca", error });
  }
};

module.exports = { createBrand, getAllBrands, updateBrand, deleteBrand };
