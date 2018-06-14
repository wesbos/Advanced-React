import EditUser from '../components/EditUser';
import PleaseSignIn from '../components/PleaseSignIn';

const MyAccount = () => (
  <>
    <h2>My Account</h2>
    <PleaseSignIn>
      <EditUser />
    </PleaseSignIn>
  </>
);

export default MyAccount;
