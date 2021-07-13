import { useState } from "react";
// a custom hook
export default function useForm(initial = {}) {
    const [ inputs, setInputs ] = useState(initial);

    function handleChange(e) {
        let { value, name, type } = e.target;
        if(type === 'number') {
            value = parseInt(value);
        };
        if(type = 'file') {
            [value] = e.target.files;
        };
        setInputs({
            // copy the existing state:
            ...inputs,
            [e.target.name]: e.target.value,
            // variable makes this usable for price, label, etc.
        })
    }
    function resetForm() {
        setInputs(initial);
    }
    
    function clearForm() {
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value ]) => [key, '']));
        setInputs(blankState);
    }
    
    // return the things we want to surface from this custom hook:
    return {
        inputs,
        handleChange,
        clearForm,
        resetForm,
    }
}

