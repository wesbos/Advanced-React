import { useState } from 'react';
import useForm from '../../lib/hooks/useForm';
import Form from '../styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetInputs } = useForm({
    name: 'Fraser',
    price: 15,
  });

  return (
    <Form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={resetInputs}>
        Reset Inputs
      </button>
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
    </Form>
  );
}
