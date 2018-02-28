import { Component } from 'react';
import { SINGLE_ORDER_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo';
import { format, formatDistance } from 'date-fns';
import formatMoney from '../lib/formatMoney';
import Item from './Item';
import Head from 'next/head';

class Order extends Component {
  componentDidMount() {
    // this.props.orderQuery.refetch();
  }
  render() {
    const { order } = this.props.orderQuery;
    if (!order) {
      return <p>No order Found!</p>;
    }
    return (
      <div>
        <Head>
          <title>Sick Fits - Order {order.id}</title>
        </Head>
        <p>
          <span>Order Id:</span>
          <span>{order.id}</span>
        </p>
        <p>
          <span>Charge</span>
          <span>{order.charge}</span>
        </p>
        <p>
          <span>Date</span>
          <span>{format(order.createdAt, 'MMMM D, YYYY h:mm A')}</span>
        </p>
        <p>
          <span>Order Total</span>
          <span>{formatMoney(order.total)}</span>
        </p>
        <p>You Bought {order.items.length} items in this order</p>
        <div className="items">
          {order.items.map(item => (
            <div className="order-item" key={item.id}>
              <h2>
                {item.quantity} OF {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const orderEnhancer = graphql(SINGLE_ORDER_QUERY, {
  name: 'orderQuery',
  options: ({ id }) => ({
    variables: { id },
  }),
});
export default compose(orderEnhancer)(Order);
