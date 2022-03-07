import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: 'NIce shoes',
    price: 31515,
    descriptiom: 'batatas on tha house',
  });

  return (
    <form>
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
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
    </form>
  );
}
