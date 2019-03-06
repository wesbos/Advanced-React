import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Error from './ErrorMessage';
import Head from 'next/head';

const SingleItemStyle = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error)
            return (
              <Error error={error}>
                <p>Error!</p>;
              </Error>
            );
          if (!data.item) return <p>No item found with "{this.props.id}" id</p>;
          if (loading) return <p>Loading...</p>;
          const item = data.item;
          return (
            <SingleItemStyle>
              <Head>
                <title>Sick Fits | {item.title}</title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className="details">
              <h2>Viewing {item.title}</h2>
              <p>{item.description}</p>
              </div>
            </SingleItemStyle>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
