import React, { useContext } from 'react';
import { Context } from '../../context/context';
import ProductTypeService from '../../services/productType.service';
import { useSubmitForm } from '../hooks/useSubmitForm';

const ProductTypeForm = () => {
  const { objectForm, setObjectForm } = useContext(Context);

  const submitHandler = useSubmitForm(ProductTypeService);

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
      <button type="submit">Add</button>
    </form>
  )
}

export default ProductTypeForm;