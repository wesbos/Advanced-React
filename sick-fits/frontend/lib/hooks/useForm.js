import { useState } from 'react';

/**
 * Custom form hook for use with forms that deal with basic data
 * @param {object} initialState
 * @returns
 */
export default function useForm(initialState = {}) {
  // Create a state variable for our inputs
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (event) => {
    let { value, name, type } = event.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = event.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetInputs = () => setInputs(initialState);

  const clearForm = () => {
    setInputs(
      Object.fromEntries(Object.entries(inputs).map(([key]) => [key, '']))
    );
  };

  return {
    inputs,
    handleChange,
    resetInputs,
    clearForm,
  };
}
