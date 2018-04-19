import React from 'react';
import { Query } from 'react-apollo';
import { format, formatDistance } from 'date-fns';
import Link from 'next/link';
import { USER_ORDERS_QUERY } from '../queries/queries';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;
const OrderListItem = styled.li`
  box-shadow: ${props => props.theme.bs};
  list-style: none;
  padding: 2rem;
  border: 1px solid ${props => props.theme.offWhite};
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    display: grid;
    grid-gap: 1rem;
    text-align: center;
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
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
                  <OrderListItem key={order.id}>
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
                  </OrderListItem>
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
