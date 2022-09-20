import axios from "axios";

const getAll = async () => {
  return await axios.get("https://localhost:8080/api/product");
}
const getOne = async (id) => {
  return await axios.get("/product/" + id);
}
const create = async (object) => {
  return await axios.post("/product", object);
}
const updateById = async (id, object) => {
  return await axios.put("/product/" + id, object);
}
const deleteById = async (id) => {
  return await axios.delete("/product/" + id);
}

const ProductService = {
  getAll,
  getOne,
  create,
  updateById,
  deleteById,
}

export default ProductService;