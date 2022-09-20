import React, { useContext, useEffect, useState } from 'react';
import { useFetching } from '../components/hooks/useFetching';
import ProductTypeForm from '../components/productType/ProductTypeForm';
import ProductTypeList from '../components/productType/ProductTypeList';
import { Context } from '../context/context';
import ProductTypeService from '../services/productType.service';

const ProductType = () => {
  const { setElements } = useContext(Context);

  const [isLoading, error] = useFetching(async () => {
    const response = await ProductTypeService.getAll();
    setElements(response.data);
  })

  return (
    <div>
      <ProductTypeForm />
      {
        error &&
        <h1>Произошла ошибка ${error}</h1>
      }
      {isLoading
        ?
        <h1>Загрузка</h1>
        :
        <ProductTypeList />
      }
    </div>
  )
}

export default ProductType;