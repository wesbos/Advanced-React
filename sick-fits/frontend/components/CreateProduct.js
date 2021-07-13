import useForm from "../lib/useForm";
import Form from './styles/Form';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';
import { useMutation } from "@apollo/client";

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        # Which variables are getting passed in? And what types are they?
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload
        )   {
        createProduct(
            data: {
                name: $name
                description: $description
                price: $price
                status: "AVAILABLE"
                photo: { create: { image: $image, altText: $name } }
            }
         ) {
            id
            price
            description
            name
        }
    }
`;

export default function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        image: '',
        name: 'These Shoes are $300',
        price: 30000,
        description: "Kelly",
    });

    const [createProduct, { loading, error, data }] = useMutation(CREATE_PRODUCT_MUTATION, {
        variables: inputs,
    });
    // console.log(createProduct);
    return (
        <Form onSubmit={async (e) => {
            e.preventDefault();
            await createProduct();
            console.log(res);
            clearForm();
            
        }}>
            {/* see Form.js style for aria-busy (accessibility attribute that serves as a loading bar) */}
            <DisplayError error={error}/>
            <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="image">
                    Image
                    <input 
                        type="file" 
                        id="image" 
                        name="image"
                        onChange={handleChange}
                        />
                </label>

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