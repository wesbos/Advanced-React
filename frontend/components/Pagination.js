import React from 'react';
import { compose } from 'react-apollo';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { itemEnhancer } from '../enhancers/enhancers';
import { perPage } from '../config';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.lightgrey};
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${props => props.theme.lightgrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

const Pagination = props => {
  if (props.loading) return <p>Loading...</p>;
  const { aggregate } = props.itemsQuery.itemsConnection;
  const { page } = props;
  const pages = Math.ceil(aggregate.count / perPage);

  return (
    <PaginationStyles>
      <Link
        prefetch
        href={{
          pathname: 'items',
          query: { page: page - 1 },
        }}
      >
        <a className="prev" aria-disabled={page <= 1}>
          ←Prev
        </a>
      </Link>
      <p>
        Page <strong>{page} </strong> of <strong className="totalPages">{pages}</strong>
      </p>
      <p>
        <strong>{aggregate.count}</strong> Items Total
      </p>
      <Link
        prefetch
        href={{
          pathname: 'items',
          query: { page: page + 1 },
        }}
      >
        <a className="next" aria-disabled={page >= pages}>
          Next →
        </a>
      </Link>
    </PaginationStyles>
  );
};

Pagination.propTypes = {
  itemsQuery: PropTypes.shape({
    itemsConnection: PropTypes.shape({
      aggregate: PropTypes.shape({
        count: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
  page: PropTypes.number.isRequired,
};

export default compose(itemEnhancer)(Pagination);
export { Pagination };
