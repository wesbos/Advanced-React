import Link from 'next/link'

export default () => (
  <ul>
    <Link href="/"><a>Home</a></Link>
    <Link href="/signup"><a>Signup</a></Link>
    <Link href="/orders"><a>Orders</a></Link>
    <Link href="/cart"><a>My Cart</a></Link>
  </ul>
)
