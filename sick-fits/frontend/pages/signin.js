import SignIn from '../components/Signin';
import SignUp from '../components/SignUp';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;

`;

export default function SignInPage() {
    return (
        <div>
            <SignIn />
            <SignUp />
        </div>
        
    )
}