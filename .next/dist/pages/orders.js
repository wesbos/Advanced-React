'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _Items = require('../components/Items');

var _Items2 = _interopRequireDefault(_Items);

var _CreateItem = require('../components/CreateItem');

var _CreateItem2 = _interopRequireDefault(_CreateItem);

var _Signup = require('../components/Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _LoginAuth = require('../components/LoginAuth0');

var _LoginAuth2 = _interopRequireDefault(_LoginAuth);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _OrderList = require('../components/OrderList');

var _OrderList2 = _interopRequireDefault(_OrderList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/pages/orders.js?entry';


var Orders = function (_Component) {
  (0, _inherits3.default)(Orders, _Component);

  function Orders() {
    (0, _classCallCheck3.default)(this, Orders);

    return (0, _possibleConstructorReturn3.default)(this, (Orders.__proto__ || (0, _getPrototypeOf2.default)(Orders)).apply(this, arguments));
  }

  (0, _createClass3.default)(Orders, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'My Orders'), _react2.default.createElement(_OrderList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return Orders;
}(_react.Component);

exports.default = Orders;