import { useState, FC, PropsWithChildren, ReactHTML, ReactElement, FunctionComponent, useEffect } from "react";
import Router from 'next/router';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Form from '../styles/Form';
import formatMoney from '../../lib/formatMoney';
import { useForm } from '../../lib/customHooks';
import gql from "graphql-tag";

export interface UpdateItemProps extends PropsWithChildren<Promise<any>> {
  id: string;
}


const GET_SINGLE_ITEM = gql`
query getItem($id:ID!){
  item(where:{id:$id}){
    id,
    title,
    description,
    image,
    largeImage,
    price
  }
}
`

const UPDATE_ITEM_MUTATION = gql`
  mutation updateItem_mutation(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    updateItem(
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

const UpdateItem = ({ id }: any) => {
  const [updateItem] = useMutation(UPDATE_ITEM_MUTATION);
  const { data, loading, error } = useQuery(GET_SINGLE_ITEM, { variables: { id } })
  const defaultValues = {
    id: id,
    file: '',
    title: '',
    price: 0,
    description: '',
  }
  const { handleChange, inputs } = useForm(updateItem, defaultValues);

  useEffect(() => {
    Object.entries(defaultValues).map((input) => {
      console.log('input', input, 'data', data);
    })
  }, [data])

  return (
    <Form
      data-test="form"
      onSubmit={async e => {
        e.preventDefault();
        const res = await updateItem({ variables: { ...inputs } })
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

export default UpdateItem;