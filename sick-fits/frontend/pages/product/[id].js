// square brackets in filename allow lookup
// match product/[id] in a URL with this:
// create a "slug" for the URL
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
    <SingleProduct id={query.id} />
}