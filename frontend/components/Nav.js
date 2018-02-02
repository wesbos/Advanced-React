import Link from "next/link";
import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  li {
    display: flex;
    flex: 1;
  }
  a {
    padding: 10px;
    flex: 1;
    text-decoration: none;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    color: white;
    margin-right: 20px;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

const Nav = () => (
  <StyledUl>
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
    <Link prefetch href="/items">
      <a>Just Items</a>
    </Link>
    <Link prefetch href="/signup">
      <a>Sign Up</a>
    </Link>
    <Link prefetch href="/add">
      <a>Add an Item</a>
    </Link>
    <Link prefetch href="/orders">
      <a>Orders</a>
    </Link>
    <Link prefetch href="/cart">
      <a>My Cart</a>
    </Link>
  </StyledUl>
);

export default Nav;
