'use strict'

const EasyGraphQLTester = require('easygraphql-tester');
const fs = require('fs');
const path = require('path');

import { ADD_TO_CART_MUTATION } from '../components/AddToCart';
import { CREATE_ITEM_MUTATION } from '../components/CreateItem';
import { DELETE_ITEM_MUTATION } from '../components/DeleteItem';
import { ALL_ITEMS_QUERY } from '../components/Items';
import { SINGLE_ORDER_QUERY } from '../components/Order';
import { USER_ORDERS_QUERY } from '../components/OrderList';
import { PAGINATION_QUERY } from '../components/Pagination';
import { UPDATE_PERMISSIONS_MUTATION, ALL_USERS_QUERY } from '../components/Permissions';
import { REMOVE_FROM_CART_MUTATION } from '../components/RemoveFromCart';
import { REQUEST_RESET_MUTATION } from '../components/RequestReset';
import { RESET_MUTATION } from '../components/Reset';
import { SEARCH_ITEMS_QUERY } from '../components/Search';
import { SIGNIN_MUTATION } from '../components/Signin';
import { SIGN_OUT_MUTATION } from '../components/Signout';
import { SIGNUP_MUTATION } from '../components/Signup';
import { SINGLE_ITEM_QUERY } from '../components/SingleItem';
import { CREATE_ORDER_MUTATION } from '../components/TakeMyMoney';
import { UPDATE_ITEM_MUTATION } from '../components/UpdateItem';
import { CURRENT_USER_QUERY } from '../components/User';

const schema = fs.readFileSync(path.join(__dirname, '..', 'schema.graphql'), 'utf8');

const tester = new EasyGraphQLTester(schema);

it('Should ADD_TO_CART_MUTATION', () => {
  tester.test(true, ADD_TO_CART_MUTATION, {
    id: '1'
  })
});

it('Should CREATE_ITEM_MUTATION', () => {
  tester.test(true, CREATE_ITEM_MUTATION, {
    title: 'New item',
    description: 'This is going to be my new item',
    price: 10
  })
});

it('Should DELETE_ITEM_MUTATION', () => {
  tester.test(true, DELETE_ITEM_MUTATION, {
    id: '1'
  })
});

it('Should ALL_ITEMS_QUERY', () => {
  tester.test(true, ALL_ITEMS_QUERY)
});

it('Should SINGLE_ORDER_QUERY', () => {
  tester.test(true, SINGLE_ORDER_QUERY, { 
    id: '1' 
  })
});

it('Should USER_ORDERS_QUERY', () => {
  tester.test(true, USER_ORDERS_QUERY)
});

it('Should PAGINATION_QUERY', () => {
  tester.test(true, PAGINATION_QUERY)
});

it('Should UPDATE_PERMISSIONS_MUTATION', () => {
  tester.test(true, UPDATE_PERMISSIONS_MUTATION, {
    permissions: ['ADMIN'],
    userId: '1'
  })
});

it('Should ALL_USERS_QUERY', () => {
  tester.test(true, ALL_USERS_QUERY)
});

it('Should REMOVE_FROM_CART_MUTATION', () => {
  tester.test(true, REMOVE_FROM_CART_MUTATION, {
    id: '1'
  })
});

it('Should REQUEST_RESET_MUTATION', () => {
  tester.test(true, REQUEST_RESET_MUTATION, {
    email: 'demo@demo.com'
  })
});

it('Should RESET_MUTATION', () => {
  tester.test(true, RESET_MUTATION, {
    resetToken: 'jnzjkadnan',
    password: 'OldPassword',
    confirmPassword: 'OldPassword'
  })
});

it('Should SEARCH_ITEMS_QUERY', () => {
  tester.test(true, SEARCH_ITEMS_QUERY, {
    searchTerm: 'Shoes'
  })
})

it('Should SIGNIN_MUTATION', () => {
  tester.test(true, SIGNIN_MUTATION, {
    email: 'demo@demo.com',
    password: 'OldPassword'
  })
});

it('Should SIGN_OUT_MUTATION', () => {
  tester.test(true, SIGN_OUT_MUTATION, {})
});

it('Should SIGNUP_MUTATION', () => {
  tester.test(true, SIGNUP_MUTATION, {
    email: 'demo@demo.com',
    name: 'demo',
    password: 'OldPassword'
  })
});

it('Should SINGLE_ITEM_QUERY', () => {
  tester.test(true, SINGLE_ITEM_QUERY, {
    id: '1'
  })
});

it('Should CREATE_ORDER_MUTATION', () => {
  tester.test(true, CREATE_ORDER_MUTATION, {
    token: 'ajsjdk'
  })
});

it('Should UPDATE_ITEM_MUTATION', () => {
  tester.test(true, UPDATE_ITEM_MUTATION, {
    id: '1',
    title: 'New title'
  })
});

it('Should CURRENT_USER_QUERY', () => {
  tester.test(true, CURRENT_USER_QUERY)
});
