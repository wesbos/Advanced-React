import styled from 'styled-components';

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  margin: 100px;
  padding: 100px;
  font-size: 2.5rem;
  font-weight: 600;
  label {
    margin-bottom: 1rem;
    display: block;
  }
  input,
  textarea,
  select {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 1rem;
    font-size: 2rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 2rem;
  }
`;

Form.displayName = 'Form';

export default Form;
