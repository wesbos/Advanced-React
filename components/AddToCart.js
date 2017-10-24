import { Component } from 'react';
import { ADD_TO_CART_MUTATION, CURRENT_USER_QUERY, SINGLE_ITEM_QUERY } from '../queries';
import { removeFromCartEnhancer, userEnhancer } from '../enhancers';
import { graphql, compose } from 'react-apollo';
import Transition from 'react-transition-group/Transition';
import makeImage from '../lib/image';
import styled from 'styled-components';

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
  componentDidMount() {
    this.props.currentUserQuery.refetch();
  }

  addToCart = async () => {
    const res = await this.props.addToCart({
      variables: {
        userId: this.props.currentUserQuery.user.id,
        itemId: this.props.id,
      },
    });
    this.props.currentUserQuery.refetch();
    console.log(res);
  };

  removeFromCart = async () => {
    const res = await this.props.removeFromCart({
      variables: {
        userId: this.props.currentUserQuery.user.id,
        itemId: this.props.id,
      },
    });
    this.props.currentUserQuery.refetch();
    console.log(res);
  };

  render() {
    const user = this.props.currentUserQuery.user;
    if (!user || this.props.singleItemQuery.loading) return <p>Loading...</p>;
    const cartIds = user.cart.map(item => item.id);
    const image = this.props.singleItemQuery.Item.image;
    const isInCart = cartIds.includes(this.props.id);
    const { x, y } = document.querySelector('.cart').getBoundingClientRect();
    console.log({ x, y });

    return (
      <div>
        {isInCart ? (
          <button onClick={this.removeFromCart}>❌ Remove From Cart</button>
        ) : (
          <button onClick={this.addToCart}>Add To Cart 👜</button>
        )}
        <Transition in={isInCart} timeout={1000}>
          {status => <JumpImg x={x} y={y} src={makeImage(image)} className={`jump-${status}`} />}
        </Transition>
      </div>
    );
  }
}

const createOrderEnhancer = graphql(ADD_TO_CART_MUTATION, { name: 'addToCart' });
const singleItemEnhancer = graphql(SINGLE_ITEM_QUERY, {
  name: 'singleItemQuery',
  options: ({ id }) => ({
    variables: {
      id,
    },
  }),
});
export default compose(userEnhancer, createOrderEnhancer, removeFromCartEnhancer, singleItemEnhancer)(AddToCart);
