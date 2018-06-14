import React from 'react';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';

const USER_ORDERS_QUERY = gql`
  query orders {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      updatedAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends React.Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error...</p>;
          if (!orders || !orders.length) return <p>No Orders Yet!</p>;
          return (
            <div>
              <h2>You have {orders.length} Orders</h2>
              <OrderUl>
                {orders.map(order => (
                  <OrderItemStyles key={order.id}>
                    <Link
                      href={{
                        pathname: '/order',
                        query: { id: order.id },
                      }}
                    >
                      <a>
                        <div className="order-meta">
                          <p>
                            <strong>{order.items.reduce((a, b) => a + b.quantity, 0)}</strong>
                            Items
                          </p>
                          <p>
                            <strong>{order.items.length}</strong>
                            Products
                          </p>
                          <p>
                            <strong>{formatDistance(order.createdAt, new Date())}</strong>
                            ago
                          </p>
                          <p>
                            <strong>{formatMoney(order.total)}</strong>
                            Total
                          </p>
                        </div>
                        <div className="images">
                          {order.items.map(item => (
                            <img key={item.id} src={item.image} alt={item.title} />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUl>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OrderList;
export { USER_ORDERS_QUERY };
