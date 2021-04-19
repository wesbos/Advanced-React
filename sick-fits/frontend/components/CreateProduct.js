import useForm from "../lib/useForm";
import Form from './styles/Form'

export default function CreateProduct() {
    const {inputs, handleChange, resetForm, clearForm} = useForm({
        image: '',
        name: "Nike",
        price: 34234,
        description: "Nice Shoes"
    });
    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            console.log(inputs)
        }}>
            <fieldset>
                <label htmlFor="image">
                    Name
                    <input required type="file" name="image" id="image" value={inputs.image}
                        onChange={handleChange}
                        />
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
