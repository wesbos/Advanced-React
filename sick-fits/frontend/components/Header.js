import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

const LogoStyles = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background-color: red;
  transform: skew(-7deg);

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

// Search query fetching with lazyQuery wasn't working properly... would fetch correctly on the graphql playground but we would get an infite loading state and no data on the app
// Okay, another way to get it to work is to update to the latest release of @apollo/client which is 3.5.10 . Change the version number in the package.json file and run npm i to install it.
// Then add this ClientOnly component to mount the Search component only on the client. Newer releases of @apollo/client cause an infinite loop when server rendering with useLazyQuery so mounting it on the Client stops that from happening.
// https://wesbos.slack.com/archives/C9G96G2UB/p1649362470736129?thread_ts=1649019262.784559&cid=C9G96G2UB
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...delegated}>{children}</div>;
}

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">Sick beats</Link>
        </LogoStyles>
        <Nav />
      </div>
      <div className="sub-bar">
        <ClientOnly>
          <Search />
        </ClientOnly>
      </div>
      <Cart />
    </HeaderStyles>
  );
}
