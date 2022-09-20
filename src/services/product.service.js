import axios from "axios";

const getAll = () => {
  return axios.get("https://localhost:8080/api/product");
}
const getOne = (id) => {
  return axios.get("/product/" + id);
}
const create = (object) => {
  return axios.post("/product", object);
}
const updateById = (id, object) => {
  return axios.put("/product/" + id, object);
}
const deleteById = (id) => {
  return axios.delete("/product/" + id);
}

const ProductService = {
  getAll,
  getOne,
  create,
  updateById,
  deleteById,
}

export default ProductService;