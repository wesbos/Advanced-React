import { Component } from "react";
import { graphql, compose } from "react-apollo";
import { CURRENT_USER_QUERY } from "../queries";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney.js";

const cartStyles = styled.div`
  background: white;
  padding: 20px;
`;

class Cart extends Component {
  componentDidMount() {
    // This fetches the new data, but doesn't populate the user via props
    // this.props.currentUserQuery.refetch();
    // This fetches the new data, and populates the user via props
    console.log("refetching!");
    setTimeout(this.props.currentUserQuery.refetch, 1);
  }

  render() {
    // Check for loading state..
    const { loading, error } = this.props.currentUserQuery;
    const { user } = this.props.currentUserQuery;
    if (loading || error || !user) return <p>Cart Loading...</p>;
    const { email = "" } = user;
    const total = user.cart.reduce((a, b) => a + b.price, 0);

    return (
      <div>
        <p>
          💰 There are <strong>{user.cart.length}</strong> Items in your cart
          totaling <strong>{formatMoney(total)}</strong>
        </p>
      </div>
    );
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: "currentUserQuery" });
export default compose(userEnhancer)(Cart);
