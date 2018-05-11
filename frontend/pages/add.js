import Page from '../components/Page';
import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';

const Add = () => (
  <Page>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </Page>
);

export default Add;
