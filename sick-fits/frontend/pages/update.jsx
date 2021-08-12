import { shape, string } from 'prop-types';
import UpdateProduct from '../components/Products/UpdateProduct';

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}

UpdatePage.propTypes = {
  query: shape({
    id: string,
  }),
};
