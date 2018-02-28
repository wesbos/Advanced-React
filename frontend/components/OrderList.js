import { Component } from 'react';
import { USER_ORDERS_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo';
import { format, formatDistance } from 'date-fns';
import formatMoney from '../lib/formatMoney';
import Link from 'next/link';

class OrderList extends Component {
  componentDidMount() {
    this.props.userOrdersQuery.refetch();
  }
  render() {
    if (this.props.loading) {
      return <p>Loading...</p>;
    }

    if (this.props.error) {
      return <p>Error...</p>;
    }

    const { orders } = this.props.userOrdersQuery;

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
                  <Link href={`/order/${order.id}`} prefetch>
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
  }
}

const ordersEnhancer = graphql(USER_ORDERS_QUERY, { name: 'userOrdersQuery' });
export default compose(ordersEnhancer)(OrderList);
