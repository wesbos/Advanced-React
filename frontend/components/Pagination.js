import React from 'react';
import { compose } from 'react-apollo';
import { Link } from '../routes';
import { itemEnhancer } from '../enhancers/enhancers';

const Pagination = props => {
  if (props.loading) return <p>Loading Item...</p>;
  const { aggregate, pageInfo } = props.itemsQuery.itemsConnection;

  const { page } = props;
  const pages = Math.floor(aggregate.count / 3);
  return (
    <div>
      <p>
        Page <strong>{page} </strong>
        of
        <strong>{pages} </strong>
        -
        <strong>{aggregate.count} </strong>
        total
      </p>
      {pageInfo.hasPreviousPage ? (
        <Link prefetch route="items" params={{ page: page - 1 }}>
          <a>←Prev</a>
        </Link>
      ) : null}

      {pageInfo.hasNextPage ? (
        <Link prefetch route="items" params={{ page: page + 1 }}>
          <a>Next →</a>
        </Link>
      ) : null}
    </div>
  );
};

const ComponentWithMutations = compose(itemEnhancer)(Pagination);

export default ComponentWithMutations;
