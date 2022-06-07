import { useQuery } from '@apollo/client';
import React from 'react';
import { gql } from 'graphql-tag';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

/* SingleOrderItem I created during the tutorial - unused, can be deleted */
const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      items {
        id
        name
        photo {
          image {
            publicUrlTransformed
          }
          altText
        }
      }
    }
  }
`;

const OrderItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Order({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <h1>Order {id}</h1>

      <OrderItems>
        {data.Order.items.map((item) => (
          <div key={item.id}>
            <p>
              {item.id} - {item.name}
            </p>
            <img
              width="100"
              src={item?.photo?.image?.publicUrlTransformed}
              alt={item?.name}
            />
          </div>
        ))}
      </OrderItems>
    </>
  );
}
