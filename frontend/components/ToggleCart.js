import { Component } from 'react';
import { compose } from 'react-apollo';
import { uiEnhancer, updateUIEnhancer } from '../enhancers/enhancers';
import PropTypes from 'prop-types';

class ToggleCart extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    toggleCart: PropTypes.func.isRequired,
    ui: PropTypes.object.isRequired,
  };
  toggle = e => {
    // if this is a keyPress event, make sure it's the enter key
    if (e.keyCode && e.keyCode !== 16) return;
    this.props.toggleCart(!this.props.ui.uiData.isCartOpen);
  };
  render() {
    return this.props.render(this.toggle);
  }
}

export default compose(uiEnhancer, updateUIEnhancer)(ToggleCart);
