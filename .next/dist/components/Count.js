'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_ITEMS_QUERY = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _queries = require('../queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/Count.js';


var Count = function (_Component) {
  (0, _inherits3.default)(Count, _Component);

  function Count() {
    (0, _classCallCheck3.default)(this, Count);

    return (0, _possibleConstructorReturn3.default)(this, (Count.__proto__ || (0, _getPrototypeOf2.default)(Count)).apply(this, arguments));
  }

  (0, _createClass3.default)(Count, [{
    key: 'render',
    value: function render() {

      // 1
      if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, 'Loading');
      }

      // 2
      if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, 'Error');
      }

      // 3
      var itemsToRender = this.props.allLinksQuery.allItems;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'There are ', itemsToRender.length, ' items for sale'));
    }
  }]);

  return Count;
}(_react.Component);

// 1

// We export the graphQL HOC - this will fetch the data and inject it into the Count compeont via props

exports.ALL_ITEMS_QUERY = _queries.ALL_ITEMS_QUERY;
exports.default = (0, _reactApollo.graphql)(_queries.ALL_ITEMS_QUERY, { name: 'allLinksQuery' })(Count);