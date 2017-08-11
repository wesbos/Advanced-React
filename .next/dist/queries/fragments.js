'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemDetails = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  fragment itemDetails on Item {\n      id\n      title\n      price\n      fullPrice\n      description\n      image {\n        id\n        url\n        secret\n      }\n  }\n'], ['\n  fragment itemDetails on Item {\n      id\n      title\n      price\n      fullPrice\n      description\n      image {\n        id\n        url\n        secret\n      }\n  }\n']);

var itemDetails = exports.itemDetails = (0, _reactApollo.gql)(_templateObject);