// TODO THis is not needed
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

import { ALL_ITEMS_QUERY } from '../queries';

class Count extends Component {

  render() {

    // 1
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div>Error</div>
    }

    // 3
    const itemsToRender = this.props.allLinksQuery.allItems

    return (
      <div>
        <h1>There are {itemsToRender.length} items for sale</h1>
      </div>
    )
  }

}

// 1

// We export the graphQL HOC - this will fetch the data and inject it into the Count compeont via props

export default graphql(ALL_ITEMS_QUERY, { name: 'allLinksQuery' })(Count)
