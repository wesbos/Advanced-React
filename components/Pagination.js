import React, { Component } from 'react'
import { graphql, gql, compose } from 'react-apollo'
import { ALL_ITEMS_QUERY } from '../queries';
import withData from '../lib/withData';
import Link from 'next/link'

class Pagination extends Component {
  render() {
    const { loading, error } = this.props.allItemsQuery;

    if(loading) return <p>Loading Item...</p>

    const meta = this.props.allItemsQuery._allItemsMeta;
    const { page } = this.props;
    const pages = Math.floor(meta.count / 3);
    return (
      <div>
        <p>
          Page <strong>{page} </strong>
          of
          <strong>{pages} </strong>
           -
          <strong>{meta.count} </strong>
           total
          </p>

        { page > 1
          ? <Link prefetch href={{ pathname: 'items', query: { page: page - 1 }}}><a>←Prev</a></Link>
          : null
        }

        {
          page <= pages
          ? <Link prefetch href={{ pathname: 'items', query: { page: page + 1 }}}><a>Next →</a></Link>
          : null
        }

      </div>
    )
  }
}

const ComponentWithMutations = compose(
  graphql(ALL_ITEMS_QUERY, { name: 'allItemsQuery' })
)(Pagination);

export default ComponentWithMutations;
