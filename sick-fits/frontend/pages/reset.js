import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query.token) {
    return (
      <div>
        <p>Sorry you must suply a token</p>
        <RequestReset />
      </div>
    );
  }

  return (
    <div>
      RESET YOUR PASSWORD {query.token}
      <Reset token={query.token} />
    </div>
  );
}
