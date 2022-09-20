import React from 'react';
import ProductTypeService from '../../services/productType.service';

const ProductTypeList = ({ elements, setProductType }) => {
  return (
    <ul>
      {elements?.map((e, index) => {
        return (
          <li key={index}>
            id={e.id},
            name={e.name},
            description={e.description}

            <button onClick={() => ProductTypeService.deleteById(e.id)}>Удалить</button>
            <button onClick={() => setProductType(e)}>Изменить</button>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductTypeList;