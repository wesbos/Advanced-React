'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.USER_ORDERS_QUERY = exports.CURRENT_USER_QUERY = exports.UPDATE_LINK_MUTATION = exports.DELETE_ITEM_MUTATION = exports.SINGLE_LINK_QUERY = exports.ALL_ITEMS_QUERY = exports.CREATE_ORDER_MUTATION = exports.CREATE_USER_MUTATION = exports.CREATE_LINK_MUTATION = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _reactApollo = require('react-apollo');

var _fragments = require('./fragments');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID, $price: Int!) {\n    createItem(\n      description: $description,\n      title: $title,\n      imageId: $imageId\n      price: $price\n    ) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID, $price: Int!) {\n    createItem(\n      description: $description,\n      title: $title,\n      imageId: $imageId\n      price: $price\n    ) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  mutation CreateUserMutation($email: String!, $name: String!, $idToken: String!) {\n    createUser(\n      email: $email,\n      name: $name,\n      authProvider: { auth0: { idToken: $idToken } }\n    ) {\n      id,\n      email,\n      name\n    }\n  }\n'], ['\n  mutation CreateUserMutation($email: String!, $name: String!, $idToken: String!) {\n    createUser(\n      email: $email,\n      name: $name,\n      authProvider: { auth0: { idToken: $idToken } }\n    ) {\n      id,\n      email,\n      name\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  mutation CreateOrderMutation($token: String!, $userId: ID!, $itemId: ID!) {\n    createOrder(token: $token, userId: $userId, itemId: $itemId) {\n      id\n      token\n      charge\n      amount\n      item {\n        id\n        title\n        description\n      }\n      user {\n        id\n        email\n      }\n    }\n  }\n'], ['\n  mutation CreateOrderMutation($token: String!, $userId: ID!, $itemId: ID!) {\n    createOrder(token: $token, userId: $userId, itemId: $itemId) {\n      id\n      token\n      charge\n      amount\n      item {\n        id\n        title\n        description\n      }\n      user {\n        id\n        email\n      }\n    }\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  # Import the Fragment\n  ', '\n  query AllLinksQuery {\n    allItems(orderBy: createdAt_DESC) {\n      # Use that fragment by it\'s name (even though it the same as the variable)\n      ...itemDetails\n    }\n  }\n'], ['\n  # Import the Fragment\n  ', '\n  query AllLinksQuery {\n    allItems(orderBy: createdAt_DESC) {\n      # Use that fragment by it\'s name (even though it the same as the variable)\n      ...itemDetails\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  query FindItem($id: ID!) {\n    Item(id: $id) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  query FindItem($id: ID!) {\n    Item(id: $id) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  mutation DelteItem($id: ID!) {\n    deleteItem(id: $id) {\n      id,\n      title,\n      description\n    }\n  }\n'], ['\n  mutation DelteItem($id: ID!) {\n    deleteItem(id: $id) {\n      id,\n      title,\n      description\n    }\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {\n    updateItem(\n      id: $id,\n      description: $description,\n      title: $title,\n      price: $price,\n      fullPrice: $fullPrice\n    ) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {\n    updateItem(\n      id: $id,\n      description: $description,\n      title: $title,\n      price: $price,\n      fullPrice: $fullPrice\n    ) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  query userQuery {\n    user {\n      id\n      name\n      email\n    }\n  }\n'], ['\n  query userQuery {\n    user {\n      id\n      name\n      email\n    }\n  }\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  query {\n    user { # grab the current user\n      id\n      orders { # and a all their orders\n        id\n        amount\n        charge\n        item { # populate the details about the item they bought with the image, description and title\n          image {\n            id,\n            secret\n          }\n          description\n          title\n        }\n      }\n    }\n  }\n'], ['\n  query {\n    user { # grab the current user\n      id\n      orders { # and a all their orders\n        id\n        amount\n        charge\n        item { # populate the details about the item they bought with the image, description and title\n          image {\n            id,\n            secret\n          }\n          description\n          title\n        }\n      }\n    }\n  }\n']);

var CREATE_LINK_MUTATION = exports.CREATE_LINK_MUTATION = (0, _reactApollo.gql)(_templateObject, _fragments.itemDetails);

var CREATE_USER_MUTATION = exports.CREATE_USER_MUTATION = (0, _reactApollo.gql)(_templateObject2);

var CREATE_ORDER_MUTATION = exports.CREATE_ORDER_MUTATION = (0, _reactApollo.gql)(_templateObject3);

var ALL_ITEMS_QUERY = exports.ALL_ITEMS_QUERY = (0, _reactApollo.gql)(_templateObject4, _fragments.itemDetails);

var SINGLE_LINK_QUERY = exports.SINGLE_LINK_QUERY = (0, _reactApollo.gql)(_templateObject5, _fragments.itemDetails);

var DELETE_ITEM_MUTATION = exports.DELETE_ITEM_MUTATION = (0, _reactApollo.gql)(_templateObject6);

var UPDATE_LINK_MUTATION = exports.UPDATE_LINK_MUTATION = (0, _reactApollo.gql)(_templateObject7, _fragments.itemDetails);

var CURRENT_USER_QUERY = exports.CURRENT_USER_QUERY = (0, _reactApollo.gql)(_templateObject8);

var USER_ORDERS_QUERY = exports.USER_ORDERS_QUERY = (0, _reactApollo.gql)(_templateObject9);