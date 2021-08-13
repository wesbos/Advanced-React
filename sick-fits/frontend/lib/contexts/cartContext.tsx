import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

const LocalStateContext = createContext<{
  cartOpen: boolean;
  setCartOpen?: Dispatch<SetStateAction<boolean>>;
}>({
  cartOpen: false,
});

const LocalStateProvider = LocalStateContext.Provider;

export function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}
