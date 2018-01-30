import styled from 'styled-components';
import React from 'react';

import PropTypes from 'prop-types';

const StyledError = styled.div`
  background: pink;
  border: 2px solid red;
  padding: 20px;
  display: flex;
  p {
    margin: 0;
    flex: 1 0 auto;
  }
`;

const DisplayError = props => {
  if (!props.error || !props.error.message) return null;
  return (
    <StyledError>
      <p>{props.error.message}</p>
      <button onClick={props.onButtonClick}>&times;</button>
    </StyledError>
  );
};

DisplayError.propTypes = {
  error: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default DisplayError;
