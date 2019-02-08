import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';

// function that takes in variable called title.. when it's called
// run mutation crateItem.. and used the $title variable as title
// any variable passed in ex: **title**: String can be used as $title in the query
/* mutation CREATEITEMMUTATION(title: String!){
  createItem(
    title: $title
  ){
    id
  }
}
*/ 
// This mutation takes 5 args.. and we use the $title..etc.. as the variables for the args
// and we want to return id of the item

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
    $price: Int!
  ){ createItem(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      price: $price
    ){
      id
    },
  }
`;

class CreateItem extends Component {
state ={
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  };

handleChange = (e) => {
  const { name, type, value } = e.target;
  // now take const val and check if the input is a number.. coerce to int
  const val = type === 'number' ? parseFloat(value) : value;
// the [name] -> computed property names from the name (e.target.name)..  which returns the name of the input
 this.setState({ [name]: val });
}

uploadFile = async e => {
  console.log(e.target);
  const files = e.target.files;
  const data = new FormData();
  data.append('file', files[0]);
  // upload_preset is an argument needed by cloudinary
  // sickfits -> name of preset
  data.append('upload_preset', 'sickfits');
  // dixjiljfee is the username of my cloudinary acct. 
  const res = await fetch('https://api.cloudinary.com/v1_1/bryandl/image/upload', {
    method: 'POST', 
    body: data
  });
  // parse the response to JSON that we get from the Fetch Post
  const file = await res.json();
  console.log(file);
  // eager is a secondary transformation
  this.setState({
    image: file.secure_url,
    largeImage: file.eager[0].secure_url,
  });

  
}
  render() {
    // Wrap the whole Form in a Mutation Component... the variables to be passed are this.state
    // Mutation takes mutation and variables as properties
    // Always inside Query/Mutation.. you must run a function.. so it's (mutationfunction, payload)
    // change mutationfunction for createItem(just the name of the func)
    // destructure payload to loading and error
    return (
      <Mutation  mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        { (createItem, { loading, error }) => (
        <Form onSubmit={ async e => {
          // stop form from submitting
          // call the mutation
          // then redirect them to single item page
          e.preventDefault();
          const res = await createItem();
          Router.push({
            pathname: '/item',
            query: { id: res.data.createItem.id },

          });
        }}
        >
        <ErrorMessage error={error}/>
        {/* if loading true.. disabled and aria-busy will be activated */}
        {/* fieldset is great because it takes a disabled value! */}
        {/* Check the aria-busy in the css styles for the cool keyframe */}
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="file">
            Image 
            <input
              onChange={this.uploadFile} 
              type="file" 
              id="file" 
              name="file" 
              placeholder="Upload an Image"
              required/>
          </label>
          {this.state.image && <img src={this.state.image}  width="200" alt="Upload preview" />}
          <label htmlFor="file">
            Title 
            <input
              onChange={this.handleChange} 
              type="text" 
              id="title" 
              name="title" 
              placeholder="Title"
              value= {this.state.title}
              required/>
          </label>
          <label htmlFor="price">
            Price 
            <input
              type="number" 
              id="price" 
              name="price" 
              placeholder="Price"
              value= {this.state.price}
              onChange={this.handleChange} 
              required/>
          </label>
          <label htmlFor="description">
            Description 
            <textarea
              id="description" 
              name="description" 
              placeholder="Enter a description"
              value= {this.state.description}
              onChange={this.handleChange} 
              required/>
            </label>
            <button type="submit">Submit</button>
        </fieldset>        
      </Form>
    )}
  </Mutation>
    )
  }
}
export default CreateItem;
export { CREATE_ITEM_MUTATION };