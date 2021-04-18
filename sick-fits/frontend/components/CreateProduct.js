import { useState } from "react"
import useForm from "../lib/useForm";

export default function CreateProduct() {
    const {inputs, handleChange, resetForm, clearForm} = useForm({
        name: "Nike",
        price: 34234,
        description: "Nice Shoes"
    });
    return (
        <form>
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
                <input type="text" name="description" id="description" placeholder="Description" value={inputs.description}
                    onChange={handleChange}
                />
            </label>

            <button type="button" onClick={clearForm}>
                Clear Form
            </button>
            <button type="button" onClick={resetForm}>
                Reset Form
            </button>
        </form>
    )
}
