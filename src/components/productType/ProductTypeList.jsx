import React, { useContext } from 'react';
import { Context } from '../../context/context';
import ProductTypeService from '../../services/productType.service';

const ProductTypeList = ({ elements, setElement }) => {
  const { setObjectForm } = useContext(Context);

  const deleteBtn = (id) => {
    ProductTypeService.deleteById(id);
    setObjectForm({});
  }

  return (
    <ul>
      {elements?.map((e, index) => {
        return (
          <li key={index}>
            id={e.id},
            name={e.name},
            description={e.description}

            <button onClick={() => deleteBtn(e.id)}>Удалить</button>
            <button onClick={() => setElement(e)}>Изменить</button>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductTypeList;