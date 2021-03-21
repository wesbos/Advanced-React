import Link from 'next/link';
import Nav from './Nav.js';

export default function Header() {
  return <header>
    <div className="bar">
      <Link href="/">SiCK FiTS</Link>
    </div>
    <div className="sub-bar">
      <p>
        Search
      </p>
    </div>
    <Nav />
  </header>
}