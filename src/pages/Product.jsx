import React, { useContext } from 'react';
import { useFetching } from '../components/hooks/useFetching';
import ProductForm from '../components/product/ProductForm';
import ProductList from '../components/product/ProductList';
import { Context } from '../context/context';
import ProductService from '../services/product.service';

const Product = () => {
  const { setElements } = useContext(Context);

  const [isLoading, error] = useFetching(async () => {
    const response = await ProductService.getAll();
    setElements(response.data);
  })

  return (
    <div>
      <ProductForm />
      <h2>Продукты</h2>
      {
        error &&
        <h1>Произошла ошибка ${error}</h1>
      }
      {isLoading
        ?
        <h1>Загрузка</h1>
        :
        <ProductList />
      }
    </div>
  )
}

export default Product;