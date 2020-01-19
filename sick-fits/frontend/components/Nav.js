import Link from 'next/link';

const Nav = () => (
    <div>
        {/* Link uses html5 pushstate to cash links for instant loading */}
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/sell">
            <a>Sell!</a>
        </Link>
    </div>

);

export default Nav;