import Link from "next/link";
import UpdateItem from "../components/UpdateItem";
const Sell = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);
export default Sell;
