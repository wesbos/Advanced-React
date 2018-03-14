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
    console.log(`Gonna add this item to the cart! ${this.props.id}`);
    const res = await this.props.addToCart({
      variables: {
        id: this.props.id,
      },
    });
    // this.props.currentUser.refetch();
  };

  render() {
    return <button onClick={this.handleAddToCart}>🛒 Add To Cart</button>;
  }
}

export default compose(userEnhancer, addToCartEnhancer)(AddToCart);
