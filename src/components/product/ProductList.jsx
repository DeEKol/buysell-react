import React, { useContext } from 'react';
import { Context } from '../../context/context';
import ProductService from '../../services/product.service';

const ProductList = () => {
  const { objectForm, setObjectForm,
    elements, setElement
  } = useContext(Context);

  const deleteBtn = async (id) => {
    await ProductService.deleteById(id);

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
            description={e.description},
            dateBuy={e.dateBuy},
            dateSold={e.dateSold},
            priceBuy={e.priceBuy},
            priceSell={e.priceSell},
            cost={e.cost}

            <button onClick={() => setObjectForm(e)}>Изменить</button>
            <button onClick={() => deleteBtn(e.id)}>Удалить</button>
          </li>
        )
      })}
    </ul>
  )
}

export default ProductList;