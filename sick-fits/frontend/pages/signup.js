import Link from 'next/link';
import styled from 'styled-components';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Signout from '../components/Signout';

const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
const signupPage = props => (
  <Column>
    <Signup />
    <Signin />
    {/* <Signout /> */}
  </Column>
);
export default signupPage;
