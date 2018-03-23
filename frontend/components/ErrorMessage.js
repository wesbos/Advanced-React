import styled from 'styled-components';
import React from 'react';

import PropTypes from 'prop-types';

const StyledError = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(error => (
      <StyledError>
        <p>
          <strong>Shoot!</strong>
          {error.message}
        </p>
      </StyledError>
    ));
  }
  return (
    <StyledError>
      <p>
        <strong>Shoot!</strong>
        {error.message}
      </p>
    </StyledError>
  );
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;
