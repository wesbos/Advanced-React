import withData from '../lib/withData';
import Page from '../components/Page';
import SingleItem from '../components/SingleItem';

const ItemPage = props => (
  <Page>
    <SingleItem id={props.url.query.itemId} />
  </Page>
);

export default withData(ItemPage);
