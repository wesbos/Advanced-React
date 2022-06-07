import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/dist/client/router';
import ErrorMessage from '../components/ErrorMessage';

const GET_ALL_ORDERS_QUERY = gql`
  query GET_ALL_ORDERS_QUERY {
    allOrders {
      id
      items {
        id
        name
      }
      label
    }
  }
`;

export default function OrdersPage() {
  const { data, loading, error } = useQuery(GET_ALL_ORDERS_QUERY);
  const router = useRouter();
  console.log('data :>> ', data);
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <h1>Here's a list of all orders</h1>
      {data.allOrders.map((order) => (
        <div key={order.id}>
          <button
            type="button"
            onClick={() =>
              router.push({ pathname: '/order/[id]', query: { id: order.id } })
            }
          >
            {order.id}
          </button>
          {order.items.map((orderItem) => (
            <div key={orderItem.id}>{orderItem.name}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
