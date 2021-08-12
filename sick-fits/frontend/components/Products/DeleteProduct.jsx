import gql from 'graphql-tag';
import { useState } from 'react';
import { oneOfType, node, arrayOf, string, number } from 'prop-types';
import { useMutation } from '@apollo/client';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
      description
      status
    }
  }
`;

export default function DeleteProduct({ id }) {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const messages = ['Delete Product', 'Are you sure?', 'Theres no going back'];
  const [deleteProduct, { data, error, loading }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: {
        id,
      },
    }
  );

  return (
    <button
      type="button"
      disabled={loading}
      onClick={async () => {
        if (numberOfClicks < 2) {
          setNumberOfClicks(numberOfClicks + 1);
        } else if (numberOfClicks === 2) {
          setNumberOfClicks(numberOfClicks + 1);
          await deleteProduct();
        }
      }}
    >
      {data && !error ? 'Deleted' : messages[numberOfClicks]}
      {error && error.toString()}
    </button>
  );
}

DeleteProduct.propTypes = {
  id: string,
};
