import { FC } from 'react';
import Nav from '../Nav';
import * as Styles from './Header.styled';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

const handleStartRouteChange = url => {
  NProgress.start();
  console.log('App is changing to: ', url);
};

const handleCompleteRouteChange = url => {
  NProgress.done();
  console.log('App is changing to: ', url);
};


Router.events.on('routeChangeStart', handleStartRouteChange);
Router.events.on('routeChangeComplete', handleCompleteRouteChange);


export interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
  return (
    <Styles.StyledHeader>
      <div className="bar">
        <Styles.Logo>
          <Link href="/">
            <a>Sick Fits</a>
          </Link>
        </Styles.Logo>
        <Nav />
      </div>
    </Styles.StyledHeader>
  )
}
export default Header;

