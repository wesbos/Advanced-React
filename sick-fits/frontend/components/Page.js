import React from 'react';
import Header from "./Header";
import Meta from "./Meta";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta/>
        <Header/>
        { this.props.children }
      </div>
    )
  }
}

export default Page;
