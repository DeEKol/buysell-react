import api from ".api";

const getAll = () => {
  return api.get("/product_type");
}
const getOne = (id) => {
  return api.get("/product_type/" + id);
}
const create = (object) => {
  return api.post("/product_type", object);
}
const updateById = (id, object) => {
  return api.put("/product_type/" + id, object);
}
const deleteById = (id) => {
  return api.delete("/product_type/" + id);
}

const ProductTypeService = {
  getAll,
  getOne,
  create,
  updateById,
  deleteById,
}

export default ProductTypeService;