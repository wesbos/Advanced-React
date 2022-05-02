import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();

  return (
    <NavStyles>
      <Link href="/account">Account</Link>
      {user && (
        <>
          <Link href="/orders">Orders</Link>
          <Link href="/products">Products</Link>
          <Link href="/sell">Sell</Link>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
