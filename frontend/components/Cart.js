import { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from '../queries';
import formatMoney from '../lib/formatMoney.js';
import ChaChing from './ChaChing';

const CartStyles = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

class Cart extends Component {
  componentDidMount() {
    // This fetches the new data, but doesn't populate the user via props
    // this.props.currentUserQuery.refetch();
    // This fetches the new data, and populates the user via props
    setTimeout(this.props.currentUserQuery.refetch, 1);
  }

  render() {
    // Check for loading state..
    const { loading, error } = this.props.currentUserQuery;
    const { user } = this.props.currentUserQuery;
    if (loading || error || !user) return <p>Cart Loading...</p>;
    const total = user.cart.reduce((a, b) => a + b.price, 0);

    return (
      <CartStyles className="cart">
        There
        {user.cart.length === 1 ? ' is ' : 'are '}
        <ChaChing amount={user.cart.length} />
        {user.cart.length === 1 ? ' item ' : ' items '}
        in your cart totaling
        <ChaChing amount={formatMoney(total)} />
      </CartStyles>
    );
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
export default compose(userEnhancer)(Cart);
