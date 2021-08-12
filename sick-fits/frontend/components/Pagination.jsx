import { number } from 'prop-types';
import Head from 'next/head';
import NextLink from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import PaginationStyled from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ pageNumber }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyled>
      <Head>
        <title>
          Sick Fits | Page {pageNumber} of {pageCount}
        </title>
      </Head>
      <NextLink href={`/products/${pageNumber - 1}`}>
        <a aria-disabled={pageNumber <= 1}>👈 Prev</a>
      </NextLink>
      <p>
        Page {pageNumber} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <NextLink href={`/products/${pageNumber + 1}`}>
        <a aria-disabled={pageNumber === pageCount}>Next 👉</a>
      </NextLink>
    </PaginationStyled>
  );
}

Pagination.propTypes = {
  pageNumber: number,
};
