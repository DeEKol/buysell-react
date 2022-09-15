import api from ".api";

const getAll = () => {
  return api.get("/product");
}
const getOne = (id) => {
  return api.get("/product/" + id);
}
const create = (object) => {
  return api.post("/product", object);
}
const updateById = (id, object) => {
  return api.put("/product/" + id, object);
}
const deleteById = (id) => {
  return api.delete("/product/" + id);
}

const ProductService = {
  getAll,
  getOne,
  create,
  updateById,
  deleteById,
}

export default ProductService;