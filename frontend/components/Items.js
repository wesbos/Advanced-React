import React from 'react';
import { compose } from 'react-apollo';
import styled from 'styled-components';
import Pagination from './Pagination';
import Item from './Item';
import { itemEnhancer } from '../enhancers/enhancers';

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Center = styled.div`
  text-align: center;
`;

class ItemList extends React.Component {
  something() {}
  render() {
    const { loading, error } = this.props.itemsQuery;
    // 1
    if (loading) {
      return <div>Loading</div>;
    }

    // 2
    if (error) {
      console.log(this.props.itemsQuery.error);
      return <div>Error</div>;
    }
    // 3
    const itemsToRender = this.props.itemsQuery.items;

    return (
      <Center>
        <Pagination page={this.props.page} />
        <Items key={this.props.page}>{itemsToRender.map((item, i) => <Item key={item.id} item={item} />)}</Items>
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default compose(itemEnhancer)(ItemList);
