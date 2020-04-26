import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import PaginationStyles from "./styles/PaginationStyles";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { perPage } from "../config";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({ page }) => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      return (
        <PaginationStyles>
          <Head>
            <title>
              Sick Fits || {page} of {pages}
            </title>
          </Head>
          <Link
            href={{
              pathname: "items",
              query: { page: page - 1 },
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Pre
            </a>
          </Link>
          <p>
            This is page {page} of {pages}
          </p>
          <Link
            prefetch
            href={{
              pathname: "items",
              query: { page: page + 1 },
            }}
          >
            <a className="prev" aria-disabled={page >= pages}>
              Next ➝
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);
export default Pagination;
