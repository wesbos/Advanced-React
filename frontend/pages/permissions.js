import withData from '../lib/withData';
import Page from '../components/Page';
import Permissions from '../components/Permissions';

const ItemPage = props => (
  <Page>
    <Permissions />
  </Page>
);

export default withData(ItemPage);
