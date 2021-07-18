import { useRouter } from "next/router";
import Products from "../../components/Products";

export default function OrderPage() {
    // a next.js hook:
    const { query } = useRouter();
    // destructure & get query from router
    // console.log(router);
    const page = parseInt(query.page);
    // go to the page in the query, else to page 1
    return (
        <div>
            <Pagination page={page || 1} />
            <Products />
            <Pagination page={page || 1} />
        </div>
    )
}