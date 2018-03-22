import { Component } from 'react';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { SINGLE_ORDER_QUERY } from '../queries';
import formatMoney from '../lib/formatMoney';

class Order extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Query query={SINGLE_ORDER_QUERY} variables={{ id: this.props.id }}>
        {({ data: { order }, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!order || error) return <p>No Order Found!</p>;
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
        }}
      </Query>
    );
  }
}

export default Order;
