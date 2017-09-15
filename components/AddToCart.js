import { Component } from 'react';
import { ADD_TO_CART_MUTATION, CURRENT_USER_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo';

class AddToCart extends Component {
  componentDidMount() {
    this.props.currentUserQuery.refetch();
  }

  addToCart = async () => {
    const res = await this.props.addToCart({
      variables: {
        userId: this.props.currentUserQuery.user.id,
        itemId: this.props.id,
      }
    });
    this.props.currentUserQuery.refetch();
    console.log(res)
  }
  render() {
    const user = this.props.currentUserQuery.user;
    if (!user) return <p>Loading...</p>;
    const cartIds = user.cart.map(item => item.id);
    return (
      <div>

        {
          cartIds.includes(this.props.id)
            ? <button>Added to cart ✅</button>
            : <button onClick={this.addToCart}>Add To Cart 👜</button>
        }
      </div>
    )
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
const createOrderEnhancer = graphql(ADD_TO_CART_MUTATION, { name: 'addToCart' });
export default compose(userEnhancer, createOrderEnhancer)(AddToCart);
