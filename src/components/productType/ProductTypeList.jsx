import React, { useContext } from 'react';
import { Context } from '../../context/context';
import ProductTypeService from '../../services/productType.service';

const ProductTypeList = () => {
  const { objectForm, setObjectForm,
    elements, setElement
  } = useContext(Context);

  const deleteBtn = async (id) => {
    await ProductTypeService.deleteById(id);

    setElement(objectForm);
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

            <button onClick={() => setObjectForm(e)}>Изменить</button>
            <button onClick={() => deleteBtn(e.id)}>Удалить</button>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductTypeList;