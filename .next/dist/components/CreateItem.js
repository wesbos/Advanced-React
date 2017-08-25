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

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/CreateItem.js';


var CreateLink = function (_Component) {
  (0, _inherits3.default)(CreateLink, _Component);

  function CreateLink() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CreateLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CreateLink.__proto__ || (0, _getPrototypeOf2.default)(CreateLink)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      description: '',
      title: '',
      image: '',
      price: 0,
      fullPrice: 0,
      loading: false
    }, _this.uploadFile = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
        var files, data, res, file;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                files = e.currentTarget.files;
                data = new FormData();

                data.append('data', files[0]);

                // use the file endpoint
                _context.next = 5;
                return fetch('https://api.graph.cool/file/v1/cj5xz8szs28930145gct82bdj', {
                  method: 'POST',
                  body: data
                });

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                file = _context.sent;

                console.log(file);
                _this.setState({ image: file.id });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this._createLink = function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
        var _this$state, description, title, image, price, fullPrice, res;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                // pull the values from state
                _this$state = _this.state, description = _this$state.description, title = _this$state.title, image = _this$state.image, price = _this$state.price, fullPrice = _this$state.fullPrice;
                // create a mutation
                // TODO: handle any errors
                // turn loading on

                _this.setState({ loading: true });
                _context2.next = 5;
                return _this.props.createLinkMutation({
                  // pass in those variables from state
                  variables: {
                    description: description,
                    title: title,
                    price: parseInt(price),
                    fullPrice: fullPrice,
                    imageId: image
                  }
                });

              case 5:
                res = _context2.sent;

                _this.setState({ loading: false });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CreateLink, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.state.loading ? 'LOADING...' : 'Ready!', _react2.default.createElement('form', { onSubmit: this._createLink, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Image', _react2.default.createElement('input', { onChange: this.uploadFile, type: 'file', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Title', _react2.default.createElement('input', { value: this.state.title, onChange: function onChange(e) {
          return _this3.setState({ title: e.target.value });
        }, type: 'text', placeholder: 'A description for the link', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Price', _react2.default.createElement('input', { type: 'number', min: '0', value: this.state.price, onChange: function onChange(e) {
          return _this3.setState({ price: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement('textarea', {
        value: this.state.description,
        onChange: function onChange(e) {
          return _this3.setState({ description: e.target.value });
        },
        type: 'text',
        placeholder: 'The desc for this item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement('button', { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Submit')));
    }
  }]);

  return CreateLink;
}(_react.Component);
// When we submit this mutation, we need to update our store - we have a few ways to do that:
// One - we can go nucular and run refetchQueries() which will just go get everything - this is easy, but at the cost of efficiency.


exports.default = (0, _reactApollo.graphql)(_queries.CREATE_LINK_MUTATION, { name: 'createLinkMutation', options: {
    // Easy, but slow
    // refetchQueries: ['AllLinksQuery']
    // This is much Better / efficient
    // Notice how the variable is called createItem - that is because createItem is the name of the query!
    update: function update(proxy, _ref4) {
      var createItem = _ref4.data.createItem;

      console.log({ createItem: createItem, ALL_ITEMS_QUERY: _queries.ALL_ITEMS_QUERY });
      var data = proxy.readQuery({ query: _queries.ALL_ITEMS_QUERY });
      // data is our store, allItems is our sub-"state", it's just an array. We can just add it to
      data.allItems.unshift(createItem);
      // and then "set state", so it will update on the page. This will update the cache for us!
      proxy.writeQuery({ query: _queries.ALL_ITEMS_QUERY, data: data });
    }
  } })(CreateLink);