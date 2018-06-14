import styled from 'styled-components';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import ResetRequest from '../components/ResetRequest';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignUpPage = () => (
  <Columns>
    <Signup />
    <Signin />
    <ResetRequest />
  </Columns>
);

export default SignUpPage;
