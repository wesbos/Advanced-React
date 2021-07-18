import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles'
import Link from 'next/Link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

// query the total *number* of products:
const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        _allProductsMeta {
            count
        }
    }
`;

export default function Pagination({ page }) {
    const { error, loading, data } = useQuery(PAGINATION_QUERY);

    if(loading) return 'Loading...'
    if(error) return <DisplayError error={error} />;
    // round up to highest int:
    const pageCount = Math.ceil(count / perPage);
    const count = data._allProductsMeta;
    return (
        <PaginationStyles>
            <Head>
                <title>Sick fits - Page {page} of {pageCount}</title>
            </Head>
            {/* A weird quirk of Next.js where you need an <a> tag for other attributes... */}
            <Link href={`/products/${page - 1}`}>
                <a aria-disabled={page <= 1}>Prev</a>
            </Link>
                <p>Page {page} of {pageCount}</p>
                <p>{count} Items Total</p>
            <Link href={`/products/${page + 1}`}>
                <a aria-disabled={page >= pageCount}>Next</a>
            </Link>
        </PaginationStyles>
    )
};