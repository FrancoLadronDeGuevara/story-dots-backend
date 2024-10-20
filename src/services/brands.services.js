const Brand = require("../models/brands.model");

const createBrandService = async (brand) => {
  try {
    const newBrand = await Brand.create(brand);
    return newBrand;
  } catch (error) {
    console.error("Error en el servicio: No se pudo crear la marca", error);
    throw new Error("Error en el servicio: No se pudo crear la marca");
  }
};

const getAllBrandsService = async () => {
  try {
    const brands = await Brand.find();
    return brands;
  } catch (error) {
    console.error("Error en el servicio: No se pudo obtener las marcas", error);
    throw new Error("Error en el servicio: No se pudo obtener las marcas");
  }
};

const updateBrandService = async (id, brand) => {
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, brand, {
      new: true,
    });
    return updatedBrand;
  } catch (error) {
    console.error("Error en el servicio: No se pudo actualizar la marca", error);
    throw new Error("Error en el servicio: No se pudo actualizar la marca");
  }
};

const deleteBrandService = async (id) => {
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    return deletedBrand;
  } catch (error) {
    console.error("Error en el servicio: No se pudo eliminar la marca", error);
    throw new Error("Error en el servicio: No se pudo eliminar la marca");
  }
};

module.exports = {
  createBrandService,
  getAllBrandsService,
  updateBrandService,
  deleteBrandService,
};
