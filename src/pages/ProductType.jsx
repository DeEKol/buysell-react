import React, { useContext, useEffect, useState } from 'react';
import { useFetching } from '../components/hooks/useFetching';
import ProductTypeList from '../components/productType/ProductTypeList';
import ProductTypeService from '../services/productType.service';

const ProductType = () => {
  const [elements, setElements] = useState();
  const [productType, setProductType] = useState({ id: '', name: '', description: '' })

  const [isLoading, error] = useFetching(async () => {
    const response = await ProductTypeService.getAll();
    setElements(response.data);
  })

  const submitHandler = async (e) => {
    e.preventDefault();

    await ProductTypeService.create(productType);

    setProductType('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name"
          value={productType.name || ''}
          onChange={e => setProductType({...productType, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="description"
          value={productType.description || ''}
          onChange={e => setProductType({ ...productType, description: e.target.value })}
        />
        <button type="submit">Add trip</button>
      </form>

      {
        error &&
        <h1>Произошла ошибка ${error}</h1>
      }
      {isLoading
        ?
        <h1>Загрузка</h1>
        :
        <ProductTypeList
          elements={elements}
        />
      }
    </div>
  )
}

export default ProductType;