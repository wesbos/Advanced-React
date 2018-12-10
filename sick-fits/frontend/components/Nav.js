import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href='/items'>
      <a>Shop</a>
    </Link>
    <Link href='/sell'>
      <a>Sell</a>
    </Link>
    <Link href='/singup'>
      <a>Singup</a>
    </Link>
    <Link href='/orders'>
      <a>Orders</a>
    </Link>
    <Link href='/me'>
      <a>Accaunt</a>
    </Link>
  </NavStyles>
)

export default Nav;