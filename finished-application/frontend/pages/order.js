import Order from '../components/Order';

const OrderPage = props => (
  <Order id={props.query.id} />
);

export default OrderPage;
