import Items from "../components/Items";
import SingleItem from "../components/SingleItem";

const Item = ({query}) => (
    <div>
        <SingleItem id={query.id} />
    </div>
);

export default Item