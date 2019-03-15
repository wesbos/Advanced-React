import PleaseSignin from '../components/PleaseSignin';
import PermissionsComp from '../components/Permissions';

const Permissions = props => (
  <>
    <PleaseSignin>
      <PermissionsComp />
    </PleaseSignin>
  </>
);

export default Permissions;
