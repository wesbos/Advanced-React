import styled from 'styled-components';
import SignIn from '../components/User/SignIn';
import SignUp from '../components/User/SignUp';

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export default function SignInPage() {
  return (
    <GridStyled>
      <SignIn />
      <SignUp />
    </GridStyled>
  );
}
