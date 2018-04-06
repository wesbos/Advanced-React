import withData from '../lib/withData';
import Page from '../components/Page';
import Permissions from '../components/Permissions';
import PleaseSignIn from '../components/PleaseSignIn';

const ItemPage = props => (
  <Page>
    <PleaseSignIn allowedPermissions={['ADMIN', 'PERMISSIONUPDATE']}>
      <Permissions />
    </PleaseSignIn>
  </Page>
);

export default withData(ItemPage);
