import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I'm a page</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
