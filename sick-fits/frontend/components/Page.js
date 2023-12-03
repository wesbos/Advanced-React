import React from 'react';
import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h1>I'm the page component</h1>
      <h1>{cool}</h1>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
