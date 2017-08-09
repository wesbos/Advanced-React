'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactStripeCheckout = require('react-stripe-checkout');

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/pages/buy.js?entry';


var TakeMoney = function (_React$Component) {
  (0, _inherits3.default)(TakeMoney, _React$Component);

  function TakeMoney() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TakeMoney);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TakeMoney.__proto__ || (0, _getPrototypeOf2.default)(TakeMoney)).call.apply(_ref, [this].concat(args))), _this), _this.onToken = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(token) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(token);
              // now that we have the token, create an "order"

              // const res = await fetch('/save-stripe-token', {
              //   method: 'POST',
              //   body: JSON.stringify(token),
              // })
              // const data = await res.json();
              // console.log(data);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TakeMoney, [{
    key: 'render',

    // ...

    value: function render() {
      return (
        // ...
        _react2.default.createElement(_reactStripeCheckout2.default, {
          token: this.onToken,
          stripeKey: 'pk_lclTtThFp8CnO3QtEZSd8HA9mFUps',
          amount: 1000000 // cents
          , currency: 'USD',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        })
      );
    }
  }]);

  return TakeMoney;
}(_react2.default.Component);

var Buy = function (_Component) {
  (0, _inherits3.default)(Buy, _Component);

  function Buy() {
    (0, _classCallCheck3.default)(this, Buy);

    return (0, _possibleConstructorReturn3.default)(this, (Buy.__proto__ || (0, _getPrototypeOf2.default)(Buy)).apply(this, arguments));
  }

  (0, _createClass3.default)(Buy, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Buy'), _react2.default.createElement(TakeMoney, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }]);

  return Buy;
}(_react.Component);

exports.default = (0, _withData2.default)(Buy);