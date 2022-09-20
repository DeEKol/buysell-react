import axios from "axios";

const getAll = async () => {
  return await axios.get("http://localhost:8080/api/product_type");
}
const getOne = async (id) => {
  return await axios.get("http://localhost:8080/api/product_type/" + id);
}
const create = async  (object) => {
  return await axios.post("http://localhost:8080/api/product_type", object);
}
const updateById = async (id, object) => {
  return await axios.put("http://localhost:8080/api/product_type/" + id, object);
}
const deleteById = async (id) => {
  return await axios.delete("http://localhost:8080/api/product_type/" + id);
}

const ProductTypeService = {
  getAll,
  getOne,
  create,
  updateById,
  deleteById,
}

export default ProductTypeService;