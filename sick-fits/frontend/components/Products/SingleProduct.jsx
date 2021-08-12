import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import { string } from 'prop-types';
import { useQuery } from '@apollo/client';
import DisplayError from '../ErrorMessage';

const SINGLE_PRODUCT_QUERY = gql`
  query GET_PRODUCT($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
      status
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductStyled = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  align-items: center;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { Product } = data;

  return (
    <ProductStyled>
      <Head>
        <title>Sick Bits | {Product.name}</title>
      </Head>
      <img src={Product.photo.image.publicUrlTransformed} alt={Product.name} />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </ProductStyled>
  );
}

SingleProduct.propTypes = {
  id: string,
};
