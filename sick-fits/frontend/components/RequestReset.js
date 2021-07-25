import Form from "./styles/Form"
import useForm from "../lib/useForm"
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";
import Error from './ErrorMessage'

const REQUEST_RESET_MUTATION = gql`
    mutation REQUEST_RESET_MUTATION($email: String!) {
        sendUserPasswordResetLink(email: $email) {
            code
            message
        }
    }
`;

export default function RequestReset() {
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
    });

    const [signup, { data, loading }] = useMutation(REQUEST_RESET_MUTATION, {
        variables: inputs,
        // don't need refetch because we're not signing in here
        // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    })

    async function handleSubmit(e) {
        e.preventDefault(); // stop the form from submitting
        // send the email and password to the graphQL API
        const res = await signup().catch(console.error);
        resetForm();
    }

    // const error = data?.authenticateUserWithPassword.__typename === 'UserAuthenticationWithPasswordFailure' ? data?.authenticateUserWithPassword : undefined; 

    return (
    <Form method="POST" onSubmit={handleSubmit}>
        <h2>Request a password reset</h2>
        <Error error={error} />
        <fieldset>
            {/* sendUserPasswordResetLink returns null when successful */}
            {data?.sendUserPasswordResetLink === null && <p>Success! Check your email to reset your password.</p>}
            <label htmlFor="email">
            Email
            <input 
                type="email" 
                name="email"
                placeholder="email address"
                autoComplete="email" 
                value={inputs.email}
                onChange={handleChange}
            /> 
            </label>
            <button type="submit">Request Reset</button>
        </fieldset>
    </Form>
    )
    
}