import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';
import Link from 'next/link';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) <p>Loading...</p>;
        const { count } = data.itemsConnection.aggregate;
        const pages = Math.ceil(count / perPage);
        const { page } = props;
        return (
          <PaginationStyles>
            <Head>
              <title>
                Sick Fits | Page {page} of {pages}
              </title>
            </Head>
            <Link
              prefetch
              href={{
                pathname: 'shop',
                query: {
                  page: page - 1,
                },
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                Prev
              </a>
            </Link>
            <p>
              Page {page} of {pages}
            </p>
            <p>{count} items total</p>
            <Link
              prefetch
              href={{
                pathname: 'shop',
                query: {
                  page: page + 1,
                },
              }}
            >
              <a className="next" aria-disabled={page >= pages}>
                Next
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};

export default Pagination;
