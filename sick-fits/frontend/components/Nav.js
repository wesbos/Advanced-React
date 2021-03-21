import Link from 'next/link';

export default function Nav() {

  return <nav>
    <Link href="/products">products</Link>
    <Link href="/sell">sell</Link>
    <Link href="/orders">orders</Link>
    <Link href="/account">account</Link>

  </nav>
}