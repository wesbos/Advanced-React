import React from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";

import Nav from "./Nav";

// handle the route loading animation
Router.events.on("routeChangeStart", () => {
  console.log("start");
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  console.log("end");
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  console.log("error");
  NProgress.done();
});

const StyledLogo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <StyledLogo>
          <Link href="/">
            <a>Sick Fits</a>
          </Link>
        </StyledLogo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
      <div>Cart</div>
    </StyledHeader>
  );
};

export default Header;
