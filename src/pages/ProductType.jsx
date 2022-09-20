import React, { useContext, useEffect, useState } from 'react';
import { useFetching } from '../components/hooks/useFetching';
import ProductTypeList from '../components/productType/ProductTypeList';
import { Context } from '../context/context';
import ProductTypeService from '../services/productType.service';

const ProductType = () => {
  // const [elements, setElements] = useState();
  const [element, setElement] = useState({});
  const { objectForm, setObjectForm, elements, setElements } = useContext(Context);

  // useEffect(() => {
  //   setElement(objectForm);
  // }, [objectForm])

  const [isLoading, error] = useFetching(async () => {
    const response = await ProductTypeService.getAll();
    setElements(response.data);
  })

  const submitHandler = async (e) => {
    e.preventDefault();

    if (element.id === undefined || element.id === '') {
      await ProductTypeService.create(element);
    } else {
      await ProductTypeService.updateById(element.id, element);
    }

    setObjectForm({});
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name"
          value={element.name || ''}
          onChange={e => setElement({ ...element, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="description"
          value={element.description || ''}
          onChange={e => setElement({ ...element, description: e.target.value })}
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
          setElement={setElement}
        />
      }
    </div>
  )
}

export default ProductType;