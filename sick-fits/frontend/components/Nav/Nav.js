import NextLink from 'next/link';

export default function Nav() {
  return (
    <nav>
      <NextLink href="/products">Products</NextLink>
      <NextLink href="/sell">Sell</NextLink>
      <NextLink href="/orders">Orders</NextLink>
      <NextLink href="/account">Account</NextLink>
      <NextLink href="/cart">Cart</NextLink>
    </nav>
  );
}
