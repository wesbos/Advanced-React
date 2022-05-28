import Order from '../../components/Order';

export default function OrderPage({ query }) {
  return <Order id={query.id} />;
}
