import { string } from 'prop-types';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';
import DisplayError from '../ErrorMessage';
import Form from '../styles/Form';
import useForm from '../../lib/hooks/useForm';
import { ALL_PRODUCTS_QUERY } from './Products';
/**
 * 2 - Get the mutation to update the product
 * 3 - Create a form to handle the updates
 */

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      description
      status
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      status
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION, {
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  });

  const { clearForm, handleChange, inputs, resetInputs } = useForm(
    data?.Product
  );

  async function onSubmit(event) {
    event.preventDefault();
    const response = await updateProduct({
      variables: {
        id,
        name: inputs.name,
        description: inputs.description,
        price: inputs.price,
      },
    }).catch((error) => {
      console.log(error);
    });
  }

  if (loading) return <p>Loading...</p>;

  return (
    <Form onSubmit={onSubmit}>
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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
        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
}

UpdateProduct.propTypes = {
  id: string,
};
