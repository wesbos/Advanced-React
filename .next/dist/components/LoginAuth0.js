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

var _auth0Lock = require('auth0-lock');

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/LoginAuth0.js';


var LoginAuth0 = function (_Component) {
  (0, _inherits3.default)(LoginAuth0, _Component);

  function LoginAuth0(props) {
    (0, _classCallCheck3.default)(this, LoginAuth0);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoginAuth0.__proto__ || (0, _getPrototypeOf2.default)(LoginAuth0)).call(this, props));

    _this.createUser = function () {
      var variables = {
        idToken: window.localStorage.getItem("auth0IdToken"),
        emailAddress: 'wesbos@gmail.com',
        name: 'Hardcoded Wes'
      };
      // TODO - make a createUser function
      _this.props.createUser({ variables: variables }).then(function (response) {
        _this.props.history.replace("/");
      }).catch(function (e) {
        console.error(e);
        _this.props.history.replace("/");
      });
    };

    _this._showLogin = function () {
      _this._lock.show();
    };

    if (typeof window === 'undefined') return (0, _possibleConstructorReturn3.default)(_this);
    var redirectUrl = 'http://localhost:3000/signup';
    console.log(redirectUrl);
    _this._lock = new _auth0Lock2.default('l851ev2q8X48wf56eGLjIWFbMwwbvWPE', 'wesbos.auth0.com', {
      auth: {
        redirect: false
      }
    });
    return _this;
  }

  (0, _createClass3.default)(LoginAuth0, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('MOUNT');
      this._lock.on('authenticated', function (authResult) {
        console.log('HIIIIIIII');
        window.localStorage.setItem('auth0IdToken', authResult.idToken);
        console.log('Done!', authResult);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('button', { onClick: this._showLogin, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Log in with Auth0 '));
    }
  }]);

  return LoginAuth0;
}(_react.Component);

exports.default = LoginAuth0;