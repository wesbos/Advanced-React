import { } from 'prop-types'
import RequestReset from '../components/User/RequestReset';
import Reset from '../components/User/Reset';

export default function ResetPage({ query }) {
    // If there is no token query string provided
    if(!query?.token) {
        return (
            <div>
                <RequestReset />
            </div>
        );
    }
    // There is a token query string provided
    return (
        <div>
            <Reset token={query?.token}/>
        </div>
    )
}

ResetPage.propTypes = {

}