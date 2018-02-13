import { Component } from 'react';
import { USER_ORDERS_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo';
import { format, formatDistance } from 'date-fns';
import formatMoney from '../lib/formatMoney';
import makeImage from '../lib/image';

class OrderList extends Component {
  componentDidMount() {
    this.props.userOrdersQuery.refetch();
  }
  render() {
    console.log(this.props.userOrdersQuery);
    if (this.props.loading) {
      return <p>Loading...</p>;
    }

    if (this.props.error) {
      return <p>Error...</p>;
    }

    const { orders } = this.props.userOrdersQuery;

    if (!orders || !orders.length) return <p>No Orders Yet!</p>;

    console.log(orders);
    return (
      <div>
        <h2>You have {orders.length} Orders</h2>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <ul className="order-items">
                <hr />
                <h2>
                  {order.id}
                  <time dateTime={order.createdAt} title={format(order.createdAt, 'MMMM D, YYYY h:mm A')}>
                    {formatDistance(order.createdAt, new Date())}
                  </time>
                </h2>

                {order.items.map(item => (
                  <li>
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </li>
                ))}
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
