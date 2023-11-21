import { useUser } from './User';
import SignIn from './SignIn';

const PleaseSignIn = ({ children }) => {
  const me = useUser();
  if (!me) return <SignIn />;
  return children;
};

export default PleaseSignIn;
