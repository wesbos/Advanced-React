'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UPDATE_LINK_MUTATION = exports.DELETE_ITEM_MUTATION = exports.SINGLE_LINK_QUERY = exports.ALL_ITEMS_QUERY = exports.CREATE_ORDER_MUTATION = exports.CREATE_LINK_MUTATION = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _reactApollo = require('react-apollo');

var _fragments = require('./fragments');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID) {\n    createItem(\n      description: $description,\n      title: $title,\n      imageId: $imageId\n    ) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID) {\n    createItem(\n      description: $description,\n      title: $title,\n      imageId: $imageId\n    ) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  mutation CreateOrderMutation($token: String!) {\n    createOrder(token: $token) {\n      id,\n      token,\n      charge,\n      amount,\n    }\n  }\n'], ['\n  mutation CreateOrderMutation($token: String!) {\n    createOrder(token: $token) {\n      id,\n      token,\n      charge,\n      amount,\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  # Import the Fragment\n  ', '\n  query AllLinksQuery {\n    allItems(orderBy: createdAt_DESC) {\n      # Use that fragment by it\'s name (even though it the same as the variable)\n      ...itemDetails\n    }\n  }\n'], ['\n  # Import the Fragment\n  ', '\n  query AllLinksQuery {\n    allItems(orderBy: createdAt_DESC) {\n      # Use that fragment by it\'s name (even though it the same as the variable)\n      ...itemDetails\n    }\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  query FindItem($id: ID!) {\n    Item(id: $id) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  query FindItem($id: ID!) {\n    Item(id: $id) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  mutation DelteItem($id: ID!) {\n    deleteItem(id: $id) {\n      id,\n      title,\n      description\n    }\n  }\n'], ['\n  mutation DelteItem($id: ID!) {\n    deleteItem(id: $id) {\n      id,\n      title,\n      description\n    }\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {\n    updateItem(\n      id: $id,\n      description: $description,\n      title: $title,\n      price: $price,\n      fullPrice: $fullPrice\n    ) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {\n    updateItem(\n      id: $id,\n      description: $description,\n      title: $title,\n      price: $price,\n      fullPrice: $fullPrice\n    ) {\n      ...itemDetails\n    }\n  }\n']);

var CREATE_LINK_MUTATION = exports.CREATE_LINK_MUTATION = (0, _reactApollo.gql)(_templateObject, _fragments.itemDetails);

var CREATE_ORDER_MUTATION = exports.CREATE_ORDER_MUTATION = (0, _reactApollo.gql)(_templateObject2);

var ALL_ITEMS_QUERY = exports.ALL_ITEMS_QUERY = (0, _reactApollo.gql)(_templateObject3, _fragments.itemDetails);

var SINGLE_LINK_QUERY = exports.SINGLE_LINK_QUERY = (0, _reactApollo.gql)(_templateObject4, _fragments.itemDetails);

var DELETE_ITEM_MUTATION = exports.DELETE_ITEM_MUTATION = (0, _reactApollo.gql)(_templateObject5);

var UPDATE_LINK_MUTATION = exports.UPDATE_LINK_MUTATION = (0, _reactApollo.gql)(_templateObject6, _fragments.itemDetails);