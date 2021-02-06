import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/account">Account</Link>
      <Link href="/orders">Orders</Link>
    </nav>
  );
}

export default Nav;
