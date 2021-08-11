import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import useForm from '../../lib/hooks/useForm';
import Form from '../styles/Form';
import DisplayError from '../ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';
import router from 'next/router';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        status: "AVAILABLE"
        price: $price
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      description
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetInputs } = useForm({
    name: 'Fraser',
    price: 15,
    description: 'This is a sample description',
  });

  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  /**
   * Submit function
   * @param {event} event
   */
  async function onSubmit(event) {
    event.preventDefault();
    const response = await createProduct();
    clearForm();
    router.push({
      pathname: `/product/${response.createProduct.id}`,
    });
  }

  return (
    <Form onSubmit={onSubmit}>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
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
        <label htmlFor="description">
          Description
          <textarea
            type="number"
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={resetInputs}>
          Reset Inputs
        </button>
        <button type="button" onClick={clearForm}>
          Clear Form
        </button>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
