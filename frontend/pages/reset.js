import Reset from '../components/Reset';

const ResetPage = props => (
  <>
    <h2>So you wanna reset your password?</h2>
    <Reset resetToken={props.query.resetToken} />
  </>
);

export default ResetPage;
