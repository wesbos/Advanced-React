import { useState } from "react";
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import Form from '../styles/Form';
import formatMoney from '../../lib/formatMoney';
import { useForm } from '../../lib/customHooks';
import gql from "graphql-tag";

export interface CreateItemProps {

}

const CREATE_ITEM_MUTATION = gql`
  mutation createItem_mutation(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;



const CreateItem: React.SFC<CreateItemProps> = () => {
  const [createItem, { loading, error }] = useMutation(CREATE_ITEM_MUTATION);
  const defaultValues = {
    file: '',
    title: '',
    price: 0,
    description: '',
  }
  const { handleChange, inputs } = useForm(createItem, defaultValues);

  return (
    <Form
      data-test="form"
      onSubmit={async e => {
        e.preventDefault();
        const res = await createItem({ variables: { ...inputs } })
        Router.push({
          pathname: '/item',
          query: { id: res.data.createItem.id }
        });
      }
      }
    >
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="file">
          Image
        <input
            type="file"
            id="file"
            name="file"
            placeholder="Upload an image"
            required
            onChange={handleChange}
          />
          {inputs.file && (
            <img width="200" src={inputs.file} alt="Upload Preview" />
          )}
        </label>

        <label htmlFor="title">
          Title
        <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
            value={inputs.title}
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
            required
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description
        <textarea
            id="description"
            name="description"
            placeholder="Enter A Description"
            required
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>);
}

export default CreateItem;