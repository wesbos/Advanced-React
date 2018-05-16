import Permissions from '../components/Permissions';
import PleaseSignIn from '../components/PleaseSignIn';

const ItemPage = () => (
  <PleaseSignIn allowedPermissions={['ADMIN', 'PERMISSIONUPDATE']}>
    <Permissions />
  </PleaseSignIn>
);

export default ItemPage;
