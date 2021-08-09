import propTypes from 'prop-types';
import NextLink from 'next/link';
import Nav from '../Nav/Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <NextLink href="/">Sick Fits</NextLink>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
