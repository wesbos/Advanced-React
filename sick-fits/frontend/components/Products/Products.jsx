import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { number } from 'prop-types';

import Product from './Product';
import { perPage } from '../../config';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int!) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products({ pageNumber }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: pageNumber * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <ProductsListStyled>
      {data.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListStyled>
  );
}

Products.propTypes = {
  pageNumber: number,
};
