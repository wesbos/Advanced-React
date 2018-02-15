import { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY, SINGLE_ITEM_QUERY } from '../queries';
import { removeFromCartEnhancer, userEnhancer, addtoCartEnhancer } from '../enhancers/enhancers';

console.log(addtoCartEnhancer);

const JumpImg = styled.img`
  border: 0 solid black;
  max-width: 100px;
  transition: all 0.5s;
  position: fixed;
  left: ${props => props.x}px;
  top: -100%;
  &.jump-entered {
    border-color: green;
    transform-origin: 0 0;
    transform: scale(0);
    top: ${props => props.y}px;
    left: ${props => props.x}px;
  }
  &.jump-entering {
    border-color: yellow;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
  }
  &.jump-exited {
    border-color: red;
  }
  &.jump-exiting {
    border-color: yellow;
  }
`;

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

const singleItemEnhancer = graphql(SINGLE_ITEM_QUERY, {
  name: 'singleItemQuery',
  options: ({ id }) => ({
    variables: {
      id,
    },
  }),
});
export default compose(userEnhancer, addtoCartEnhancer, removeFromCartEnhancer, singleItemEnhancer)(AddToCart);
