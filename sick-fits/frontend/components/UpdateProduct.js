import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import DisplayError from "./ErrorMessage";
import useForm from "../lib/useForm";
import Form from "./styles/Form";

const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!) {
        Product(where: { id: $id }) {
            id
            name
            description
            price
        }
    }
`;

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
        $name: String
        $description: String
        $price: Int
    ) {
        updateProduct(
            id: $id,
            data: {
                name: $name
                description: $description
                price: $price
            }
        ) {
            id
            name
            description
            price
        }
    }

`


export default function UpdateProduct({ id }) {
    // 1. get existing product
    const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: { id },
    });


    // console.log(data);

    // 2. get mutation to update existing product
    const [
        updateProduct, 
        { data: updateData, error: updateError, loading: updateLoading },
    ] = useMutation(UPDATE_PRODUCT_MUTATION)
    // 2.5 create some state for the form inputs:
    // *** question mark: if there is data, pass Product
    // this is why "loading" is down here?
    const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);
    if(loading) return <p>loading...</p>;
    // 3. get the form to handle the updates
    return (
        <Form onSubmit={async (e) => {
            e.preventDefault();
            // TO DO: HANDLE SUBMIT!
            const res = await updateProduct({
                variables: {
                    id: id,
                    data: {
                        name: inputs.name,
                        description: inputs.description,
                        price: inputs.price,
                    },
                },
            }).catch(console.error);
            console.log(res);
            // await createProduct();
            // console.log(res);
            // clearForm();
            // // Go to the product's page! Create the URL:
            // Router.push({
            //     pathname: `/product/${res.data.createProduct.id}`,
            // })
        }}> 
            {/* see Form.js style for aria-busy (accessibility attribute that serves as a loading bar) */}
            <DisplayError error={error || updateError} />
            <fieldset disabled={updateLoading} aria-busy={updateLoading}>
                <label htmlFor="name">
                    Name
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Name"
                        value={inputs.name} 
                        onChange={handleChange}
                        />
                </label>
                <label htmlFor="price">
                    Price
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        placeholder="Price"
                        value={inputs.price} 
                        onChange={handleChange}
                        />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea 
                        id="description" 
                        name="description" 
                        placeholder="Name"
                        value={inputs.description} 
                        onChange={handleChange}
                        />
                </label>
                {/* <button type="button" onClick={clearForm}>Clear Form</button>
                <button type="button" onClick={resetForm}>Reset Form</button> */}
                <button type="submit">+ Add Product</button>
            </fieldset>
        </Form>
    )
}