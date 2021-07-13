import useForm from "../lib/useForm";
import Form from './styles/Form';

export default function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        image: '',
        name: 'These Shoes are $300',
        price: 30000,
        description: "Kelly",
    });
    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            console.log(inputs);
        }}>
            {/* see Form.js style for aria-busy (accessibility attribute that serves as a loading bar) */}
            <fieldset aria-busy>
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