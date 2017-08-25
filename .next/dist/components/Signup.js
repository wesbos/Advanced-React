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

var _reactApollo = require('react-apollo');

var _queries = require('../queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/Signup.js';


var Signup = function (_Component) {
  (0, _inherits3.default)(Signup, _Component);

  function Signup() {
    (0, _classCallCheck3.default)(this, Signup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Signup.__proto__ || (0, _getPrototypeOf2.default)(Signup)).call(this));

    _initialiseProps.call(_this);

    var idToken = typeof window !== 'undefined' ? localStorage.getItem('auth0IdToken') || '' : '';
    _this.state = {
      email: '',
      name: '',
      idToken: idToken,
      error: undefined
    };

    return _this;
  }

  (0, _createClass3.default)(Signup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.state.loading ? 'LOADING...' : 'Ready!', this.state.error ? _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.state.error.message) : '', _react2.default.createElement('form', { onSubmit: this._createUser, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Email', _react2.default.createElement('input', { value: this.state.email, onChange: function onChange(e) {
          return _this2.setState({ email: e.target.value });
        }, type: 'text', placeholder: 'email', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'Name', _react2.default.createElement('input', { value: this.state.name, onChange: function onChange(e) {
          return _this2.setState({ name: e.target.value });
        }, type: 'text', placeholder: 'name', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'idToken', _react2.default.createElement('input', { disabled: true, value: this.state.idToken, onChange: function onChange(e) {
          return _this2.setState({ idToken: e.target.value });
        }, type: 'text', placeholder: 'name', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement('button', { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Submit')));
    }
  }]);

  return Signup;
}(_react.Component);
// When we submit this mutation, we need to update our store - we have a few ways to do that:
// One - we can go nucular and run refetchQueries() which will just go get everything - this is easy, but at the cost of efficiency.


var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._createUser = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
      var _state, email, name, idToken, res;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              // pull the values from state
              _state = _this3.state, email = _state.email, name = _state.name, idToken = _state.idToken;
              // create a mutation
              // TODO: handle any errors
              // turn loading on

              _this3.setState({ loading: true });
              console.log(name, email, idToken);
              _context.prev = 4;
              _context.next = 7;
              return _this3.props.createUserMutation({
                // pass in those variables from state
                variables: { name: name, email: email, idToken: idToken }
              });

            case 7:
              res = _context.sent;
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](4);

              _this3.setState({ error: _context.t0 });
              console.dir(_context.t0);

            case 14:
              _this3.setState({ loading: false });

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this3, [[4, 10]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.default = (0, _reactApollo.graphql)(_queries.CREATE_USER_MUTATION, { name: 'createUserMutation', options: {
    // Easy, but slow
    // refetchQueries: ['AllLinksQuery']
    // This is much Better / efficient
    // Notice how the variable is called createItem - that is because createItem is the name of the query!
  } })(Signup);