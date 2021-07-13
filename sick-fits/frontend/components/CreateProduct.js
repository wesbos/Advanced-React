import useForm from "../lib/useForm";

export default function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        name: 'These Shoes are $300',
        price: 30000,
        description: "Kelly",
    });
    return (
        <form>
            <label htmlFor="name">
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
                <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    placeholder="Price"
                    value={inputs.price} 
                    onChange={handleChange}
                    />
            </label>
            <button type="button" onClick={clearForm}>Clear Form</button>
            <button type="button" onClick={resetForm}>Reset Form</button>
        </form>
    )

}