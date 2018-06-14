import React from 'react';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';

class LoadingItem extends React.Component {
  render() {
    return (
      <ItemStyles>
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt="Loading..."
        />>
        <Title>
          <a>Loading...</a>
        </Title>
        <p>Please Wait</p>
      </ItemStyles>
    );
  }
}

export default LoadingItem;
