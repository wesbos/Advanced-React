import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Pagination';
import ProductsList from '../../components/Products/Products';

export default function Product() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Pagination pageNumber={page || 1} />
      <ProductsList pageNumber={page || 1} />
      <Pagination pageNumber={page || 1} />
    </div>
  );
}
