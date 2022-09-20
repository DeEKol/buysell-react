import React from 'react';
import ProductService from '../../services/product.service';
import ProductTypeService from '../../services/productType.service';

const ProductTypeList = ({ elements }) => {
  return (
    <ul>
      {elements?.map((e, index) => {
        return (
          <li key={index}>
            id={e.id},
            name={e.name},
            description={e.description}

            <button onClick={() => ProductTypeService.deleteById(e.id)}>Удалить</button>
            {/* <button onClick={() => }>Изменить</button> */}
          </li>
        )
      })}
    </ul>
  )
}

export default ProductTypeList;