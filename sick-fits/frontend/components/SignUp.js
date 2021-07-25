import Form from "./styles/Form"
import useForm from "../lib/useForm"
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";
import Error from './ErrorMessage'

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
        createUser(data: {
            email: $email,
            name: $name,
            password: $password
        }) {
            id
            email
            name
        }
    }
`;

export default function SignUp() {
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
    });

    const [signup, { data, loading }] = useMutation(SIGNUP_MUTATION, {
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
        <h2>Sign up for an account</h2>
        <Error error={error} />
        <fieldset>
            {/* Show a "signed up" state: let the user know they're signed up */}
            {data?.createUser && <p>Signed up with {data.createUser.email} - Please go ahead and sign in!</p>}
            <label htmlFor="name">
            Name
            <input 
                type="text" 
                name="name"
                placeholder="your name"
                autoComplete="name" 
                value={inputs.name}
                onChange={handleChange}
            /> 
            </label>
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
            <label htmlFor="password">
                Password
                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    autoComplete="password"
                    value={inputs.password}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Sign In</button>
        </fieldset>
    </Form>
    )
    
}