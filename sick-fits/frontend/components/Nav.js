import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import SignOut from './SignOut';
 
export default function Nav() {
    const user = useUser();
    return (
        <NavStyles>
            <Link href="/products">Products</Link>
            {/* if there is a user (i.e. we're logged in) display these 3 Link tags... */}
            { user && (
                <>
                <Link href="/sell">Sell</Link>
                <Link href="/orders">Orders</Link>
                <Link href="/account">Account</Link>
                <SignOut />
                </>
            )}
            { !user && (
                <>
                <Link href="/signin">Sell</Link>
                </>
            )}
            
        </NavStyles>
    )
}