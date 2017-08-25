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

var _queries = require('../queries');

var _reactApollo = require('react-apollo');

var _lodash = require('lodash.has');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.get');

var _lodash4 = _interopRequireDefault(_lodash3);

var _formatMoney = require('../lib/formatMoney');

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _image = require('../lib/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/OrderList.js';


var OrderList = function (_Component) {
  (0, _inherits3.default)(OrderList, _Component);

  function OrderList() {
    (0, _classCallCheck3.default)(this, OrderList);

    return (0, _possibleConstructorReturn3.default)(this, (OrderList.__proto__ || (0, _getPrototypeOf2.default)(OrderList)).apply(this, arguments));
  }

  (0, _createClass3.default)(OrderList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Mounting!');
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.props.loading) {
        return _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, 'Loading...');
      }

      if (this.props.error) {
        return _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, 'Error...');
      }

      if (!(0, _lodash2.default)(this.props, 'userOrdersQuery.user.orders')) {
        return _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, 'Don\'t have it yet!');
      }

      var orders = this.props.userOrdersQuery.user.orders;

      console.log(orders);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'You have ', orders.length, ' Orders'), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, orders.map(function (order) {
        return _react2.default.createElement('li', { key: order.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, _react2.default.createElement('img', { src: (0, _image2.default)(order.item.image), alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }), _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, order.item.title, ' (', (0, _formatMoney2.default)(order.amount), ') '), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, order.item.description));
      })));
    }
  }]);

  return OrderList;
}(_react.Component);

var ordersEnhancer = (0, _reactApollo.graphql)(_queries.USER_ORDERS_QUERY, { name: 'userOrdersQuery' });
exports.default = (0, _reactApollo.compose)(ordersEnhancer)(OrderList);