'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/UpdateItem.js';


var UpdateLink = function (_Component) {
  (0, _inherits3.default)(UpdateLink, _Component);

  function UpdateLink() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UpdateLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UpdateLink.__proto__ || (0, _getPrototypeOf2.default)(UpdateLink)).call.apply(_ref, [this].concat(args))), _this), _this.state = (0, _extends3.default)({}, _this.props.findItem.Item), _this.saveToState = function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;

      if (type === 'number') {
        value = parseInt(value);
      }

      _this.setState((0, _defineProperty3.default)({}, name, value));
    }, _this._createLink = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var _this$state, description, title, id, res;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                // pull the values from state
                _this$state = _this.state, description = _this$state.description, title = _this$state.title;
                id = _this.props.id;
                // create a mutation
                // TODO: handle any errors
                // turn loading on

                _this.setState({ loading: true });
                console.log(_this.state);
                _context.next = 7;
                return _this.props.updateItem({
                  // pass in those variables from state
                  variables: (0, _extends3.default)({}, _this.state)
                });

              case 7:
                res = _context.sent;

                _this.setState({ loading: false });

              case 9:
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

  (0, _createClass3.default)(UpdateLink, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Edit ', this.props.id), this.state.loading ? 'LOADING...' : 'Ready!', _react2.default.createElement('form', { onSubmit: this._createLink, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('label', { htmlFor: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Title'), _react2.default.createElement('input', { value: this.state.title, name: 'title', onChange: this.saveToState, type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('label', { htmlFor: 'description', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Description'), _react2.default.createElement('textarea', { value: this.state.description, name: 'description', onChange: this.saveToState, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('label', { htmlFor: 'price', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Price'), _react2.default.createElement('input', { type: 'number', name: 'price', onChange: this.saveToState, value: this.state.price, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('label', { htmlFor: 'fullPrice', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Full Price'), _react2.default.createElement('input', { type: 'number', name: 'fullPrice', onChange: this.saveToState, value: this.state.fullPrice, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('button', { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Save...')));
    }
  }]);

  return UpdateLink;
}(_react.Component);

var ComponentWithMutations = (0, _reactApollo.compose)(
// First, query for getting the link
(0, _reactApollo.graphql)(_queries.SINGLE_LINK_QUERY, {
  name: 'findItem',
  options: function options(_ref3) {
    var id = _ref3.id;
    return {
      variables: { id: id }
    };
  }
}),
// Second, the mutation for updating the link
(0, _reactApollo.graphql)(_queries.UPDATE_LINK_MUTATION, { name: 'updateItem' }))(UpdateLink);

exports.default = ComponentWithMutations;