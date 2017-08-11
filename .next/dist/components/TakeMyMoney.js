'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactStripeCheckout = require('react-stripe-checkout');

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

var _queries = require('../queries');

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/TakeMyMoney.js';


var TakeMyMoney = function (_Component) {
  (0, _inherits3.default)(TakeMyMoney, _Component);

  function TakeMyMoney() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TakeMyMoney);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TakeMyMoney.__proto__ || (0, _getPrototypeOf2.default)(TakeMyMoney)).call.apply(_ref, [this].concat(args))), _this), _this.onToken = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(res) {
        var token, charge;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = res.id;

                console.log('Going to make a purchase with ' + token);
                _context.next = 4;
                return _this.props.createOrder({ variables: { token: token } });

              case 4:
                charge = _context.sent;

                alert('Back from the charge! ' + charge.id);
                console.log(charge);

              case 7:
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

  (0, _createClass3.default)(TakeMyMoney, [{
    key: 'render',
    value: function render() {
      return (
        // ...
        _react2.default.createElement(_reactStripeCheckout2.default, (0, _extends3.default)({}, this.props, {
          token: this.onToken,
          stripeKey: 'pk_lclTtThFp8CnO3QtEZSd8HA9mFUps',
          currency: 'USD',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }), this.props.children)
      );
    }
  }]);

  return TakeMyMoney;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)(_queries.CREATE_ORDER_MUTATION, { name: 'createOrder' })(TakeMyMoney);