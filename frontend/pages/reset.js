import withData from '../lib/withData';
import Page from '../components/Page';
import Reset from '../components/Reset';

const ResetPage = props => (
  <Page>
    <h2>So you wanna reset your password?</h2>
    <Reset resetToken={props.url.query.resetToken} />
  </Page>
);

export default withData(ResetPage);
