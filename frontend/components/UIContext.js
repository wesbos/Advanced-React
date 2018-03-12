import React from 'react';

const UIContext = React.createContext();

class UIProvider extends React.Component {
  state = {
    isCartOpen: false,
  };
  render() {
    return (
      <UIContext.Provider
        value={{
          state: this.state,
          toggle: () => this.setState({ isCartOpen: !this.state.isCartOpen }),
        }}
      >
        {this.props.children}
      </UIContext.Provider>
    );
  }
}

export { UIContext, UIProvider };
