import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import DisplayError from './ErrorMessage'
import useForm from "../lib/useForm";
import Form from './styles/Form'
import { ALL_PRODUCTS_QUERY } from './Products'

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        # Which variables are getting passed in? And what types are they?
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload
    ) {
    createProduct(
        data:{
            name: $name
            description: $description
            price: $price
            status: "AVAILABLE"
            photo: {
                create: {
                    image: $image,
                    altText: $name
                }
            }
    }) {
        id
        price
        description
        name
    }
}
`

export default function CreateProduct() {
    const {inputs, handleChange, resetForm, clearForm} = useForm({
        image: '',
        name: "Nike",
        price: 34234,
        description: "Nice Shoes"
    });
    const [createProduct, { loading, error, data }] = useMutation(CREATE_PRODUCT_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
    })
    return (
        <Form onSubmit={async (e) => {
            e.preventDefault();
            // Submit the inputfields to the backend:
            await createProduct();
            clearForm()
        }}>
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="image">
                    Image
                    <input required type="file" name="image" id="image" onChange={handleChange} />
                </label>
                <label htmlFor="name">
                    Name
                    <input type="text" name="name" id="name" placeholder="Name" value={inputs.name}
                        onChange={handleChange}
                        />
                </label>
                <label htmlFor="price">
                    Price
                    <input type="number" name="price" id="price" placeholder="Price" value={inputs.price}
                        onChange={handleChange}
                        />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea name="description" id="description" placeholder="Description" value={inputs.description}
                        onChange={handleChange}
                        />
                </label>

                <button type="Submit">Add Product</button>
            </fieldset>
        </Form>
    )
}
