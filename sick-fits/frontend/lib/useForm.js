import { useState } from 'react';

export default function useForm(initial = {}) {
    // create a state object for our inputs
    const [inputs, setInputs] = useState(initial);
    
    function handleChange(e) {
        let { value, name, type } = e.target;
        if(type === 'number') {
            value = parseInt(value);
        }
        if(type === 'file') {
            value[0] = e.target.files;
        }
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }
    // {
        //     name: name,
        //     description: 'cool stuff',
        //     price: price
        // }
        


    function resetForm() {
        setInputs(initial);
    }

    function clearForm() {
        const blankState = Object.fromEntries(
            Object.entries(inputs).map(([key, value]) => [key, ''])
        );
        setInputs(blankState)
    }

    // return the things we want to surface from this custom hook
    return {
        inputs,
        handleChange,
        resetForm,
        clearForm
    }
}