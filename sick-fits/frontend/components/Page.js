import React, { Component } from 'react';
import Header from './Header'
import Meta from './Meta'

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                {this.props.children} {/* required to render out any inherited styff */}
            </div>
        );
    }
}

export default Page;