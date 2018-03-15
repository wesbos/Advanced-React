import { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { removeFromCartEnhancer, userEnhancer, addToCartEnhancer, singleItemEnhancer } from '../enhancers/enhancers';

class AddToCart extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.currentUser.refetch();
  }

  handleAddToCart = async () => {
    const res = await this.props.addToCart({
      variables: {
        id: this.props.id,
      },
    });
  };

  render() {
    return <button onClick={this.handleAddToCart}>🛒 Add To Cart</button>;
  }
}

AddToCart.propTypes = {
  currentUser: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default compose(userEnhancer, addToCartEnhancer)(AddToCart);
export { AddToCart };
