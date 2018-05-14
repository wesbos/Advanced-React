import Page from '../components/Page';
import Reset from '../components/Reset';

const ResetPage = props => (
  <Page>
    <h2>So you wanna reset your password?</h2>
    <Reset resetToken={props.query.resetToken} />
  </Page>
);

export default ResetPage;
