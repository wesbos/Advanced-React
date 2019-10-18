import { FC } from 'react';
import Link from 'next/link';
import NavStyles from '../styles/NavStyles';

export interface NavProps {

}

const Nav: FC<NavProps> = () => {
  return (
    <nav>
      <NavStyles>
        <Link href="/"><a>Items</a></Link>
        <Link href="/sell"><a>Sell</a></Link>
        <Link href="/signup"><a>Signup</a></Link>
        <Link href="/orders"><a>orders</a></Link>
        <Link href="/account"><a>account</a></Link>
      </NavStyles>
    </nav>
  );
}

export default Nav;