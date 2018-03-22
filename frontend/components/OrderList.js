import React from 'react';
import { Query } from 'react-apollo';
import { format, formatDistance } from 'date-fns';
import Link from 'next/link';
import { USER_ORDERS_QUERY } from '../queries';

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
              <ul>
                {orders.map(order => (
                  <li key={order.id}>
                    <ul className="order-items">
                      <hr />
                      <h2>
                        <Link
                          href={{
                            pathname: '/order',
                            query: { id: order.id },
                          }}
                        >
                          <a>{order.id}</a>
                        </Link>
                        <time dateTime={order.createdAt} title={format(order.createdAt, 'MMMM D, YYYY h:mm A')}>
                          {formatDistance(order.createdAt, new Date())}
                        </time>
                      </h2>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OrderList;
