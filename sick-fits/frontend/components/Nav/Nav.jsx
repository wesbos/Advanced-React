import NextLink from 'next/link';
import NavStyled from '../styles/NavStyles';

export default function Nav() {
  return (
    <NavStyled>
      <NextLink href="/products">Products</NextLink>
      <NextLink href="/sell">Sell</NextLink>
      <NextLink href="/orders">Orders</NextLink>
      <NextLink href="/account">Account</NextLink>
      <NextLink href="/cart">Cart</NextLink>
    </NavStyled>
  );
}
