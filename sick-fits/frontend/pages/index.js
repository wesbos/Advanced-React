import Link from 'next/link';

const Home = props => (
    <div>
        <p>Home!</p>
        {/* Link uses html5 pushstate to cash links for instant loading */}
        <Link href="/sell">
            <a>Sell!</a>
        </Link>
    </div>
);

export default Home;