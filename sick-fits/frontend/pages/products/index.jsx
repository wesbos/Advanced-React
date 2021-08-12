import Pagination from '../../components/Pagination';
import ProductsList from '../../components/Products/Products';

export default function Product() {
  return (
    <div>
      <Pagination pageNumber={1} />
      <ProductsList />
      <Pagination pageNumber={1} />
    </div>
  );
}
