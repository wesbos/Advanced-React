import { Component } from 'react';
import withData from '../lib/withData';
import Items from '../components/Items';
import CreateItem from '../components/CreateItem';
import Signup from '../components/Signup';
import LoginAuth0 from '../components/LoginAuth0';
import Page from '../components/Page';
import { USER_ORDERS_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo'
import has from 'lodash.has';
import get from 'lodash.get';
import formatMoney from '../lib/formatMoney';
import makeImage from '../lib/image';

class OrderList extends Component {
  componentDidMount() {
    console.log('Mounting!');
  }
  render() {

    if(this.props.loading) {
      return <p>Loading...</p>
    }

    if(this.props.error) {
      return <p>Error...</p>
    }

    if(!has(this.props, 'userOrdersQuery.user.orders')) {
      return <p>Don't have it yet!</p>
    }

    const orders = this.props.userOrdersQuery.user.orders;

    console.log(orders);
    return (
      <div>
        <h2>You have {orders.length} Orders</h2>
        <ul>
          {orders.map(order => <li key={order.id}>
            <img src={makeImage(order.item.image)} alt=""/>
            <h3>{order.item.title} ({formatMoney(order.amount)}) </h3>
            <p>{order.item.description}</p>
          </li>)}
        </ul>
      </div>
    )
  }
}

const ordersEnhancer = graphql(USER_ORDERS_QUERY, { name: 'userOrdersQuery' });
export default compose(ordersEnhancer)(OrderList)
