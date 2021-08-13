import NextLink from 'next/link';
import useUser from '../../lib/hooks/useUser';
import NavStyled from '../styles/NavStyles';
import SignOut from '../User/SignOut';

export default function Nav() {
  const user = useUser();
  console.log({ user });

  return (
    <NavStyled>
      <NextLink href="/products">Products</NextLink>
      {user && (
        <>
          <NextLink href="/sell">Sell</NextLink>
          <NextLink href="/orders">Orders</NextLink>
          <NextLink href="/account">Account</NextLink>
          <NextLink href="/cart">Cart</NextLink>
          <SignOut />
        </>
      )}
      {!user && <NextLink href="/signin">Sign In</NextLink>}
    </NavStyled>
  );
}
