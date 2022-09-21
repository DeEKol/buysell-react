import React, { useContext } from 'react';
import { Context } from '../../context/context';
import ProductService from '../../services/product.service';
import { useSubmitForm } from '../hooks/useSubmitForm';

const ProductForm = () => {
  const { objectForm, setObjectForm } = useContext(Context);

  const submitHandler = useSubmitForm(ProductService);

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="name"
        value={objectForm.name || ''}
        onChange={e => setObjectForm({ ...objectForm, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="description"
        value={objectForm.description || ''}
        onChange={e => setObjectForm({ ...objectForm, description: e.target.value })}
      />
      <input
        type="date"
        placeholder="dateBuy"
        value={objectForm.dateBuy || ''}
        onChange={e => setObjectForm({ ...objectForm, dateBuy: e.target.value })}
      />
      <input
        type="date"
        placeholder="dateSold"
        value={objectForm.dateSold || ''}
        onChange={e => setObjectForm({ ...objectForm, dateSold: e.target.value })}
      />
      <input
        type="text"
        placeholder="priceBuy"
        value={objectForm.priceBuy || ''}
        onChange={e => setObjectForm({ ...objectForm, priceBuy: e.target.value })}
      />
      <input
        type="text"
        placeholder="priceSell"
        value={objectForm.priceSell || ''}
        onChange={e => setObjectForm({ ...objectForm, priceSell: e.target.value })}
      />
      <input
        type="text"
        placeholder="cost"
        value={objectForm.cost || ''}
        onChange={e => setObjectForm({ ...objectForm, cost: e.target.value })}
      />
      <input
        type="text"
        placeholder="cost"
        value={objectForm.cost || ''}
        onChange={e => setObjectForm({ ...objectForm, cost: e.target.value })}
      />

      <button type="submit">Add</button>
    </form>
  )
}

export default ProductForm;