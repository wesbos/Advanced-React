import Products from "../components/Products";

export default function OrderPage() {
    return (
        <div>
            <Pagination page={1} />
            <Products />
            <Pagination page={1} />
        </div>
    )
}