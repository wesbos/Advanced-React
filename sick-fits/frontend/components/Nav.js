import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/account">Account</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
    </NavStyles>
  );
}
