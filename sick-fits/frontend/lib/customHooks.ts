import { useState, FormEvent } from "react"
import Router from "next/router";
import fetch from 'isomorphic-unfetch'

export const useForm = (runMutation, defaultValues) => {
  const [inputs, setInputs] = useState<any>({ ...defaultValues });
  const [invalidInputs, setInvalidInputs] = useState<{}>()

  const handleSubmit = async (event: FormEvent) => {
    if (event) {
      event.preventDefault();
    }
    const res = await runMutation(inputs);

    Router.push({
      pathname: '/item',
      query: { id: res.data.createItem.id },
    });
  }

  const uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('upload_preset', 'sickfitz');
    data.append('file', files[0]);

    const res = await fetch('https://api.cloudinary.com/v1_1/dkd6u9zrb/image/upload', {
      method: 'POST',
      body: data,
    });

    const file = await res.json();
    return file;
  };

  const handleChange = async (event: FormEvent) => {
    event.persist();
    if ((event.target as HTMLInputElement).name === 'file') {
      const file = await uploadFile(event);
      return setInputs({ ...inputs, image: file.secure_url, largeImage: file.eager[0].secure_url })
    }
    const { name, value } = <HTMLInputElement>event.target;
    setInputs({ ...inputs, [name]: value })
  }

  return {
    handleChange,
    handleSubmit,
    inputs,
    setInputs
  }
}