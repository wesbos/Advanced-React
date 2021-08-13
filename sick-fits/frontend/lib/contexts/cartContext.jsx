import { createContext, useContext, useState } from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

export function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  const closeCart = () => setCartOpen(false);
  const openCart = () => setCartOpen(true);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        closeCart,
        openCart,
        toggleCart,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// Make a custom hook for accessing the cart
export function useCart() {
  const all = useContext(LocalStateContext);

  return all;
}

CartStateProvider.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};
