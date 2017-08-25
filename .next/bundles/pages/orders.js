
          window.__NEXT_REGISTER_PAGE('/orders', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.USER_ORDERS_QUERY = exports.CURRENT_USER_QUERY = exports.UPDATE_LINK_MUTATION = exports.DELETE_ITEM_MUTATION = exports.SINGLE_LINK_QUERY = exports.ALL_ITEMS_QUERY = exports.CREATE_ORDER_MUTATION = exports.CREATE_USER_MUTATION = exports.CREATE_LINK_MUTATION = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(576);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _reactApollo = __webpack_require__(547);

var _fragments = __webpack_require__(733);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID, $price: Int!) {\n    createItem(\n      description: $description,\n      title: $title,\n      imageId: $imageId\n      price: $price\n    ) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID, $price: Int!) {\n    createItem(\n      description: $description,\n      title: $title,\n      imageId: $imageId\n      price: $price\n    ) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  mutation CreateUserMutation($email: String!, $name: String!, $idToken: String!) {\n    createUser(\n      email: $email,\n      name: $name,\n      authProvider: { auth0: { idToken: $idToken } }\n    ) {\n      id,\n      email,\n      name\n    }\n  }\n'], ['\n  mutation CreateUserMutation($email: String!, $name: String!, $idToken: String!) {\n    createUser(\n      email: $email,\n      name: $name,\n      authProvider: { auth0: { idToken: $idToken } }\n    ) {\n      id,\n      email,\n      name\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  mutation CreateOrderMutation($token: String!, $userId: ID!, $itemId: ID!) {\n    createOrder(token: $token, userId: $userId, itemId: $itemId) {\n      id\n      token\n      charge\n      amount\n      item {\n        id\n        title\n        description\n      }\n      user {\n        id\n        email\n      }\n    }\n  }\n'], ['\n  mutation CreateOrderMutation($token: String!, $userId: ID!, $itemId: ID!) {\n    createOrder(token: $token, userId: $userId, itemId: $itemId) {\n      id\n      token\n      charge\n      amount\n      item {\n        id\n        title\n        description\n      }\n      user {\n        id\n        email\n      }\n    }\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  # Import the Fragment\n  ', '\n  query AllLinksQuery {\n    allItems(orderBy: createdAt_DESC) {\n      # Use that fragment by it\'s name (even though it the same as the variable)\n      ...itemDetails\n    }\n  }\n'], ['\n  # Import the Fragment\n  ', '\n  query AllLinksQuery {\n    allItems(orderBy: createdAt_DESC) {\n      # Use that fragment by it\'s name (even though it the same as the variable)\n      ...itemDetails\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  query FindItem($id: ID!) {\n    Item(id: $id) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  query FindItem($id: ID!) {\n    Item(id: $id) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  mutation DelteItem($id: ID!) {\n    deleteItem(id: $id) {\n      id,\n      title,\n      description\n    }\n  }\n'], ['\n  mutation DelteItem($id: ID!) {\n    deleteItem(id: $id) {\n      id,\n      title,\n      description\n    }\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {\n    updateItem(\n      id: $id,\n      description: $description,\n      title: $title,\n      price: $price,\n      fullPrice: $fullPrice\n    ) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {\n    updateItem(\n      id: $id,\n      description: $description,\n      title: $title,\n      price: $price,\n      fullPrice: $fullPrice\n    ) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  query userQuery {\n    user {\n      id\n      name\n      email\n    }\n  }\n'], ['\n  query userQuery {\n    user {\n      id\n      name\n      email\n    }\n  }\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  query {\n    user { # grab the current user\n      id\n      orders { # and a all their orders\n        id\n        amount\n        charge\n        item { # populate the details about the item they bought with the image, description and title\n          image {\n            id,\n            secret\n          }\n          description\n          title\n        }\n      }\n    }\n  }\n'], ['\n  query {\n    user { # grab the current user\n      id\n      orders { # and a all their orders\n        id\n        amount\n        charge\n        item { # populate the details about the item they bought with the image, description and title\n          image {\n            id,\n            secret\n          }\n          description\n          title\n        }\n      }\n    }\n  }\n']);

var CREATE_LINK_MUTATION = exports.CREATE_LINK_MUTATION = (0, _reactApollo.gql)(_templateObject, _fragments.itemDetails);

var CREATE_USER_MUTATION = exports.CREATE_USER_MUTATION = (0, _reactApollo.gql)(_templateObject2);

var CREATE_ORDER_MUTATION = exports.CREATE_ORDER_MUTATION = (0, _reactApollo.gql)(_templateObject3);

var ALL_ITEMS_QUERY = exports.ALL_ITEMS_QUERY = (0, _reactApollo.gql)(_templateObject4, _fragments.itemDetails);

var SINGLE_LINK_QUERY = exports.SINGLE_LINK_QUERY = (0, _reactApollo.gql)(_templateObject5, _fragments.itemDetails);

var DELETE_ITEM_MUTATION = exports.DELETE_ITEM_MUTATION = (0, _reactApollo.gql)(_templateObject6);

var UPDATE_LINK_MUTATION = exports.UPDATE_LINK_MUTATION = (0, _reactApollo.gql)(_templateObject7, _fragments.itemDetails);

var CURRENT_USER_QUERY = exports.CURRENT_USER_QUERY = (0, _reactApollo.gql)(_templateObject8);

var USER_ORDERS_QUERY = exports.USER_ORDERS_QUERY = (0, _reactApollo.gql)(_templateObject9);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/queries/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/queries/index.js"); } } })();

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(63);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(547);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _initApollo = __webpack_require__(723);

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/lib/withData.js';


// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, url, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 19;
                    break;
                  }

                  apollo = (0, _initApollo2.default)();
                  // Provide the `url` prop data in case a GraphQL query uses it

                  url = { query: ctx.query, pathname: ctx.pathname };
                  _context.prev = 9;
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(_react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    }
                  }))));

                case 12:
                  _context.next = 16;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](9);

                case 16:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  _head2.default.rewind();

                  // Extract query data from the Apollo store
                  state = apollo.getInitialState();

                  serverState = {
                    apollo: {
                      // Only include the Apollo data state
                      data: state.data
                    }
                  };

                case 19:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 20:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[9, 14]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)(_this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        })));
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)))

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(576);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(547);

var _UpdateItem = __webpack_require__(731);

var _UpdateItem2 = _interopRequireDefault(_UpdateItem);

var _link = __webpack_require__(636);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(641);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TakeMyMoney = __webpack_require__(750);

var _TakeMyMoney2 = _interopRequireDefault(_TakeMyMoney);

var _formatMoney = __webpack_require__(752);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _image = __webpack_require__(753);

var _image2 = _interopRequireDefault(_image);

var _queries = __webpack_require__(557);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/Items.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 50px;\n'], ['\n  font-size: 50px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: grid;\n  grid-template-columns: repeat(4, calc(25% - 20px));\n  grid-gap: 20px;\n'], ['\n  display: grid;\n  grid-template-columns: repeat(4, calc(25% - 20px));\n  grid-gap: 20px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background: #f3f3f3;\n  padding: 20px;\n  img {\n    width: 100%;\n  }\n'], ['\n  background: #f3f3f3;\n  padding: 20px;\n  img {\n    width: 100%;\n  }\n']);

var Title = _styledComponents2.default.h1(_templateObject);

var Items = _styledComponents2.default.div(_templateObject2);

var Item = _styledComponents2.default.div(_templateObject3);

var ItemList = function (_Component) {
  (0, _inherits3.default)(ItemList, _Component);

  function ItemList() {
    (0, _classCallCheck3.default)(this, ItemList);

    return (0, _possibleConstructorReturn3.default)(this, (ItemList.__proto__ || (0, _getPrototypeOf2.default)(ItemList)).apply(this, arguments));
  }

  (0, _createClass3.default)(ItemList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // 1
      if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, 'Loading');
      }

      // 2
      if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
        console.log(this.props.allLinksQuery.error);
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, 'Error');
      }

      // 3
      var itemsToRender = this.props.allLinksQuery.allItems;

      return _react2.default.createElement(Items, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Items For Sale'), itemsToRender.map(function (item, i) {
        return _react2.default.createElement(Item, { className: 'item', key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, item.image ? _react2.default.createElement('img', { src: (0, _image2.default)(item.image), __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }) : null, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, item.title), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, item.description), _react2.default.createElement(_link2.default, { href: {
            pathname: '/admin/update',
            query: { id: item.id }
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, 'Edit ', item.id)), _react2.default.createElement(_TakeMyMoney2.default, {
          id: item.id,
          amount: item.price,
          name: item.title // the pop-in header title
          , description: item.description // the pop-in header subtitle
          , image: (0, _image2.default)(item.image),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, _react2.default.createElement('button', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, 'Buy for ', (0, _formatMoney2.default)(item.price))), _react2.default.createElement('button', { onClick: function onClick() {
            return _this2.props.removeItemMutation({ variables: { id: item.id } });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, '\xD7 Delete item'));
      }));
    }
  }]);

  return ItemList;
}(_react.Component);

// 1

// We export the graphQL HOC - this will fetch the data and inject it into the ItemList compeont via props

// Create some Enhancers


var itemsEnahncer = (0, _reactApollo.graphql)(_queries.ALL_ITEMS_QUERY, { name: 'allLinksQuery' });
var deleteItemEnhancer = (0, _reactApollo.graphql)(_queries.DELETE_ITEM_MUTATION, {
  name: 'removeItemMutation',
  options: {
    update: function update(proxy, _ref) {
      var deleteItem = _ref.data.deleteItem;

      // grab the data from our cache
      var data = proxy.readQuery({ query: _queries.ALL_ITEMS_QUERY });

      // filter out the delted item
      data.allItems = data.allItems.filter(function (item) {
        return item.id !== deleteItem.id;
      });

      // and then "set state" (update cache), so it will update whereever we have used this data on the page
      proxy.writeQuery({ query: _queries.ALL_ITEMS_QUERY, data: data });
    }
  }
});

exports.default = (0, _reactApollo.compose)(itemsEnahncer, deleteItemEnhancer)(ItemList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/Items.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/Items.js"); } } })();

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(547);

var _queries = __webpack_require__(557);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/CreateItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/CreateItem.js"); } } })();

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(547);

var _queries = __webpack_require__(557);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/Signup.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/Signup.js"); } } })();

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _auth0Lock = __webpack_require__(645);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/LoginAuth0.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/LoginAuth0.js"); } } })();

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(576);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(872);

var _Header2 = _interopRequireDefault(_Header);

var _Meta = __webpack_require__(873);

var _Meta2 = _interopRequireDefault(_Meta);

var _withData = __webpack_require__(586);

var _withData2 = _interopRequireDefault(_withData);

var _Nav = __webpack_require__(678);

var _Nav2 = _interopRequireDefault(_Nav);

var _styledComponents = __webpack_require__(641);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/Page.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: sans-serif;\n  color: #303030;\n  background: #efc600;\n  padding: 100px;\n'], ['\n  font-family: sans-serif;\n  color: #303030;\n  background: #efc600;\n  padding: 100px;\n']);

var StyledPage = _styledComponents2.default.div(_templateObject);

var Page = function Page(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(StyledPage, { className: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_Meta2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(_Nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, children));
};

exports.default = (0, _withData2.default)(Page);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/Page.js"); } } })();

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(636);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/wesbos/Sites/advanced-react/examples/next/components/Nav.js";

exports.default = function () {
  return _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_link2.default, { href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Home")), _react2.default.createElement(_link2.default, { href: "/signup/", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Signup")), _react2.default.createElement(_link2.default, { href: "/orders/", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Orders")));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/Nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/Nav.js"); } } })();

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(680);


/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _withData = __webpack_require__(586);

var _withData2 = _interopRequireDefault(_withData);

var _Items = __webpack_require__(635);

var _Items2 = _interopRequireDefault(_Items);

var _CreateItem = __webpack_require__(642);

var _CreateItem2 = _interopRequireDefault(_CreateItem);

var _Signup = __webpack_require__(643);

var _Signup2 = _interopRequireDefault(_Signup);

var _LoginAuth = __webpack_require__(644);

var _LoginAuth2 = _interopRequireDefault(_LoginAuth);

var _Page = __webpack_require__(677);

var _Page2 = _interopRequireDefault(_Page);

var _OrderList = __webpack_require__(874);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/pages/orders.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/pages/orders.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/orders")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(547);

var _isomorphicFetch = __webpack_require__(724);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create(initialState) {

  var networkInterface = (0, _reactApollo.createNetworkInterface)({
    uri: 'https://api.graph.cool/simple/v1/cj5xz8szs28930145gct82bdj', // Server URL (must be absolute)
    opts: { // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin'
    }
  });

  // use the auth0IdToken in localStorage for authorized requests
  networkInterface.use([{
    applyMiddleware: function applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      // get the authentication token from local storage if it exists
      if (typeof localStorage !== 'undefined' && localStorage.getItem("auth0IdToken")) {
        req.options.headers.authorization = 'Bearer ' + localStorage.getItem("auth0IdToken");
      }
      next();
    }
  }]);

  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: networkInterface
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/lib/initApollo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/lib/initApollo.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54), __webpack_require__(53)))

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(732);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(547);

var _queries = __webpack_require__(557);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/UpdateItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/UpdateItem.js"); } } })();

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemDetails = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(576);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _reactApollo = __webpack_require__(547);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  fragment itemDetails on Item {\n      id\n      title\n      price\n      fullPrice\n      description\n      image {\n        id\n        url\n        secret\n      }\n  }\n'], ['\n  fragment itemDetails on Item {\n      id\n      title\n      price\n      fullPrice\n      description\n      image {\n        id\n        url\n        secret\n      }\n  }\n']);

var itemDetails = exports.itemDetails = (0, _reactApollo.gql)(_templateObject);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/queries/fragments.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/queries/fragments.js"); } } })();

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactStripeCheckout = __webpack_require__(751);

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

var _queries = __webpack_require__(557);

var _reactApollo = __webpack_require__(547);

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
        var token, userId, itemId, charge;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = res.id;
                userId = _this.props.currentUserQuery.user.id;
                itemId = _this.props.id;

                console.log('Going to make a purchase with ' + token);
                console.log('THe person that bought this was ' + userId);
                console.log('The item id is ' + itemId);
                _context.next = 8;
                return _this.props.createOrder({ variables: { token: token, userId: userId, itemId: itemId } });

              case 8:
                charge = _context.sent;

                alert('Back from the charge! ' + charge.id);
                console.log(charge);

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
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TakeMyMoney, [{
    key: 'render',
    value: function render() {
      var user = this.props.currentUserQuery.user || {};
      var email = user.email || '';
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_reactStripeCheckout2.default, {
        amount: this.props.amount,
        name: this.props.name,
        description: this.props.description,
        token: this.onToken,
        stripeKey: 'pk_lclTtThFp8CnO3QtEZSd8HA9mFUps',
        currency: 'USD',
        email: email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.children));
    }
  }]);

  return TakeMyMoney;
}(_react.Component);

var userEnhancer = (0, _reactApollo.graphql)(_queries.CURRENT_USER_QUERY, { name: 'currentUserQuery' });
var createOrderEnhancer = (0, _reactApollo.graphql)(_queries.CREATE_ORDER_MUTATION, { name: 'createOrder' });
exports.default = (0, _reactApollo.compose)(userEnhancer, createOrderEnhancer)(TakeMyMoney);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/TakeMyMoney.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/TakeMyMoney.js"); } } })();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (amount) {
  return '$' + (amount / 100).toLocaleString();
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/lib/formatMoney.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/lib/formatMoney.js"); } } })();

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (image) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

  if (!image || !image.secret) return '';
  return 'https://images.graph.cool/v1/cj5xz8szs28930145gct82bdj/' + image.secret + '/' + width + 'x' + height;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/lib/image.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/lib/image.js"); } } })();

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(547);

var _queries = __webpack_require__(557);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // This fetches the new data, but doesn't populate the user via props
      // this.props.currentUserQuery.refetch();
      // This fetches the new data, and populates the user via props
      setTimeout(this.props.currentUserQuery.refetch, 1);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props.currentUserQuery.user);
      var user = this.props.currentUserQuery.user || {};
      var _user$email = user.email,
          email = _user$email === undefined ? '' : _user$email;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, email, ' I\'m the header!'));
    }
  }]);

  return Header;
}(_react.Component);

var userEnhancer = (0, _reactApollo.graphql)(_queries.CURRENT_USER_QUERY, { name: 'currentUserQuery' });
exports.default = (0, _reactApollo.compose)(userEnhancer)(Header);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/Header.js"); } } })();

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _index = __webpack_require__(71);

var _index2 = _interopRequireDefault(_index);

var _Nav = __webpack_require__(678);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/Meta.js';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_Nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { rel: 'shortcut icon', href: 'https://wesbos.com/wp-content/themes/wb2014/i/crown-yellow-small.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Sick Fits')));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/Meta.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/Meta.js"); } } })();

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _withData = __webpack_require__(586);

var _withData2 = _interopRequireDefault(_withData);

var _Items = __webpack_require__(635);

var _Items2 = _interopRequireDefault(_Items);

var _CreateItem = __webpack_require__(642);

var _CreateItem2 = _interopRequireDefault(_CreateItem);

var _Signup = __webpack_require__(643);

var _Signup2 = _interopRequireDefault(_Signup);

var _LoginAuth = __webpack_require__(644);

var _LoginAuth2 = _interopRequireDefault(_LoginAuth);

var _Page = __webpack_require__(677);

var _Page2 = _interopRequireDefault(_Page);

var _queries = __webpack_require__(557);

var _reactApollo = __webpack_require__(547);

var _lodash = __webpack_require__(875);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(876);

var _lodash4 = _interopRequireDefault(_lodash3);

var _formatMoney = __webpack_require__(752);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _image = __webpack_require__(753);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/OrderList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/OrderList.js"); } } })();

/***/ })

},[679]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9vcmRlcnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9xdWVyaWVzL2luZGV4LmpzPzczNzBmZmMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGhEYXRhLmpzP2IzYmYzMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtcy5qcz9iM2JmMzJjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlSXRlbS5qcz9iM2JmMzJjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lnbnVwLmpzP2IzYmYzMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkF1dGgwLmpzP2IzYmYzMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlLmpzP2IzYmYzMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuanM/YjNiZjMyYyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9vcmRlcnMuanM/YjNiZjMyYyIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdEFwb2xsby5qcz9iM2JmMzJjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXBkYXRlSXRlbS5qcz9iM2JmMzJjIiwid2VicGFjazovLy8uL3F1ZXJpZXMvZnJhZ21lbnRzLmpzP2IzYmYzMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWtlTXlNb25leS5qcz9iM2JmMzJjIiwid2VicGFjazovLy8uL2xpYi9mb3JtYXRNb25leS5qcz9iM2JmMzJjIiwid2VicGFjazovLy8uL2xpYi9pbWFnZS5qcz9iM2JmMzJjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2IzYmYzMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZXRhLmpzP2IzYmYzMmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9PcmRlckxpc3QuanM/YjNiZjMyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBpdGVtRGV0YWlscyB9IGZyb20gJy4vZnJhZ21lbnRzJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9MSU5LX01VVEFUSU9OID0gZ3FsYFxuICAke2l0ZW1EZXRhaWxzfVxuICBtdXRhdGlvbiBDcmVhdGVMaW5rTXV0YXRpb24oJGRlc2NyaXB0aW9uOiBTdHJpbmchLCAkdGl0bGU6IFN0cmluZyEsICRpbWFnZUlkOiBJRCwgJHByaWNlOiBJbnQhKSB7XG4gICAgY3JlYXRlSXRlbShcbiAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sXG4gICAgICB0aXRsZTogJHRpdGxlLFxuICAgICAgaW1hZ2VJZDogJGltYWdlSWRcbiAgICAgIHByaWNlOiAkcHJpY2VcbiAgICApIHtcbiAgICAgIC4uLml0ZW1EZXRhaWxzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfVVNFUl9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gQ3JlYXRlVXNlck11dGF0aW9uKCRlbWFpbDogU3RyaW5nISwgJG5hbWU6IFN0cmluZyEsICRpZFRva2VuOiBTdHJpbmchKSB7XG4gICAgY3JlYXRlVXNlcihcbiAgICAgIGVtYWlsOiAkZW1haWwsXG4gICAgICBuYW1lOiAkbmFtZSxcbiAgICAgIGF1dGhQcm92aWRlcjogeyBhdXRoMDogeyBpZFRva2VuOiAkaWRUb2tlbiB9IH1cbiAgICApIHtcbiAgICAgIGlkLFxuICAgICAgZW1haWwsXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfT1JERVJfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIENyZWF0ZU9yZGVyTXV0YXRpb24oJHRva2VuOiBTdHJpbmchLCAkdXNlcklkOiBJRCEsICRpdGVtSWQ6IElEISkge1xuICAgIGNyZWF0ZU9yZGVyKHRva2VuOiAkdG9rZW4sIHVzZXJJZDogJHVzZXJJZCwgaXRlbUlkOiAkaXRlbUlkKSB7XG4gICAgICBpZFxuICAgICAgdG9rZW5cbiAgICAgIGNoYXJnZVxuICAgICAgYW1vdW50XG4gICAgICBpdGVtIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICAgIHVzZXIge1xuICAgICAgICBpZFxuICAgICAgICBlbWFpbFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5leHBvcnQgY29uc3QgQUxMX0lURU1TX1FVRVJZID0gZ3FsYFxuICAjIEltcG9ydCB0aGUgRnJhZ21lbnRcbiAgJHtpdGVtRGV0YWlsc31cbiAgcXVlcnkgQWxsTGlua3NRdWVyeSB7XG4gICAgYWxsSXRlbXMob3JkZXJCeTogY3JlYXRlZEF0X0RFU0MpIHtcbiAgICAgICMgVXNlIHRoYXQgZnJhZ21lbnQgYnkgaXQncyBuYW1lIChldmVuIHRob3VnaCBpdCB0aGUgc2FtZSBhcyB0aGUgdmFyaWFibGUpXG4gICAgICAuLi5pdGVtRGV0YWlsc1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU0lOR0xFX0xJTktfUVVFUlkgPSBncWxgXG4gICR7aXRlbURldGFpbHN9XG4gIHF1ZXJ5IEZpbmRJdGVtKCRpZDogSUQhKSB7XG4gICAgSXRlbShpZDogJGlkKSB7XG4gICAgICAuLi5pdGVtRGV0YWlsc1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBEZWx0ZUl0ZW0oJGlkOiBJRCEpIHtcbiAgICBkZWxldGVJdGVtKGlkOiAkaWQpIHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVVBEQVRFX0xJTktfTVVUQVRJT04gPSBncWxgXG4gICR7aXRlbURldGFpbHN9XG4gIG11dGF0aW9uIFVwZGF0ZUl0ZW0oJGlkOiBJRCEsICR0aXRsZTogU3RyaW5nISwgJGRlc2NyaXB0aW9uOiBTdHJpbmchLCAkcHJpY2U6IEludCEsICRmdWxsUHJpY2U6IEludCEpIHtcbiAgICB1cGRhdGVJdGVtKFxuICAgICAgaWQ6ICRpZCxcbiAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sXG4gICAgICB0aXRsZTogJHRpdGxlLFxuICAgICAgcHJpY2U6ICRwcmljZSxcbiAgICAgIGZ1bGxQcmljZTogJGZ1bGxQcmljZVxuICAgICkge1xuICAgICAgLi4uaXRlbURldGFpbHNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENVUlJFTlRfVVNFUl9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgdXNlclF1ZXJ5IHtcbiAgICB1c2VyIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBlbWFpbFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFVTRVJfT1JERVJTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdXNlciB7ICMgZ3JhYiB0aGUgY3VycmVudCB1c2VyXG4gICAgICBpZFxuICAgICAgb3JkZXJzIHsgIyBhbmQgYSBhbGwgdGhlaXIgb3JkZXJzXG4gICAgICAgIGlkXG4gICAgICAgIGFtb3VudFxuICAgICAgICBjaGFyZ2VcbiAgICAgICAgaXRlbSB7ICMgcG9wdWxhdGUgdGhlIGRldGFpbHMgYWJvdXQgdGhlIGl0ZW0gdGhleSBib3VnaHQgd2l0aCB0aGUgaW1hZ2UsIGRlc2NyaXB0aW9uIGFuZCB0aXRsZVxuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgc2VjcmV0XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3F1ZXJpZXMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGluaXRBcG9sbG8gZnJvbSAnLi9pbml0QXBvbGxvJ1xuXG4vLyBHZXRzIHRoZSBkaXNwbGF5IG5hbWUgb2YgYSBKU1ggY29tcG9uZW50IGZvciBkZXYgdG9vbHNcbmZ1bmN0aW9uIGdldENvbXBvbmVudERpc3BsYXlOYW1lIChDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zZWRDb21wb25lbnQgPT4ge1xuICByZXR1cm4gY2xhc3MgV2l0aERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBXaXRoRGF0YSgke2dldENvbXBvbmVudERpc3BsYXlOYW1lKENvbXBvc2VkQ29tcG9uZW50KX0pYFxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBzZXJ2ZXJTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoY3R4KSB7XG4gICAgICBsZXQgc2VydmVyU3RhdGUgPSB7fVxuXG4gICAgICAvLyBFdmFsdWF0ZSB0aGUgY29tcG9zZWQgY29tcG9uZW50J3MgZ2V0SW5pdGlhbFByb3BzKClcbiAgICAgIGxldCBjb21wb3NlZEluaXRpYWxQcm9wcyA9IHt9XG4gICAgICBpZiAoQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGNvbXBvc2VkSW5pdGlhbFByb3BzID0gYXdhaXQgQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAgIH1cblxuICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXMgaW4gdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAvLyBhbmQgZXh0cmFjdCB0aGUgcmVzdWx0aW5nIGRhdGFcbiAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIGNvbnN0IGFwb2xsbyA9IGluaXRBcG9sbG8oKVxuICAgICAgICAvLyBQcm92aWRlIHRoZSBgdXJsYCBwcm9wIGRhdGEgaW4gY2FzZSBhIEdyYXBoUUwgcXVlcnkgdXNlcyBpdFxuICAgICAgICBjb25zdCB1cmwgPSB7cXVlcnk6IGN0eC5xdWVyeSwgcGF0aG5hbWU6IGN0eC5wYXRobmFtZX1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBSdW4gYWxsIEdyYXBoUUwgcXVlcmllc1xuICAgICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShcbiAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XG4gICAgICAgICAgICAgIDxDb21wb3NlZENvbXBvbmVudCB1cmw9e3VybH0gey4uLmNvbXBvc2VkSW5pdGlhbFByb3BzfSAvPlxuICAgICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxuICAgICAgICAgIC8vIEhhbmRsZSB0aGVtIGluIGNvbXBvbmVudHMgdmlhIHRoZSBkYXRhLmVycm9yIHByb3A6XG4gICAgICAgICAgLy8gaHR0cDovL2Rldi5hcG9sbG9kYXRhLmNvbS9yZWFjdC9hcGktcXVlcmllcy5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxuICAgICAgICB9XG4gICAgICAgIC8vIGdldERhdGFGcm9tVHJlZSBkb2VzIG5vdCBjYWxsIGNvbXBvbmVudFdpbGxVbm1vdW50XG4gICAgICAgIC8vIGhlYWQgc2lkZSBlZmZlY3QgdGhlcmVmb3JlIG5lZWQgdG8gYmUgY2xlYXJlZCBtYW51YWxseVxuICAgICAgICBIZWFkLnJld2luZCgpXG5cbiAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxuICAgICAgICBjb25zdCBzdGF0ZSA9IGFwb2xsby5nZXRJbml0aWFsU3RhdGUoKVxuXG4gICAgICAgIHNlcnZlclN0YXRlID0ge1xuICAgICAgICAgIGFwb2xsbzoge1xuICAgICAgICAgICAgLy8gT25seSBpbmNsdWRlIHRoZSBBcG9sbG8gZGF0YSBzdGF0ZVxuICAgICAgICAgICAgZGF0YTogc3RhdGUuZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXJ2ZXJTdGF0ZSxcbiAgICAgICAgLi4uY29tcG9zZWRJbml0aWFsUHJvcHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgdGhpcy5hcG9sbG8gPSBpbml0QXBvbGxvKHRoaXMucHJvcHMuc2VydmVyU3RhdGUpXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e3RoaXMuYXBvbGxvfT5cbiAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvd2l0aERhdGEuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdyYXBocWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgVXBkYXRlSXRlbSBmcm9tICcuL1VwZGF0ZUl0ZW0nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFRha2VNeU1vbmV5IGZyb20gJy4vVGFrZU15TW9uZXknO1xuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XG5pbXBvcnQgbWFrZUltYWdlIGZyb20gJy4uL2xpYi9pbWFnZSc7XG5cbmltcG9ydCB7IEFMTF9JVEVNU19RVUVSWSwgREVMRVRFX0lURU1fTVVUQVRJT04gfSBmcm9tICcuLi9xdWVyaWVzJztcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNTBweDtcbmA7XG5cblxuXG5jb25zdCBJdGVtcyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGNhbGMoMjUlIC0gMjBweCkpO1xuICBncmlkLWdhcDogMjBweDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBwYWRkaW5nOiAyMHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jbGFzcyBJdGVtTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gMVxuICAgIGlmICh0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkgJiYgdGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5LmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICB9XG5cbiAgICAvLyAyXG4gICAgaWYgKHRoaXMucHJvcHMuYWxsTGlua3NRdWVyeSAmJiB0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkuZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYWxsTGlua3NRdWVyeS5lcnJvcilcbiAgICAgIHJldHVybiA8ZGl2PkVycm9yPC9kaXY+XG4gICAgfVxuXG4gICAgLy8gM1xuICAgIGNvbnN0IGl0ZW1zVG9SZW5kZXIgPSB0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkuYWxsSXRlbXNcblxuICAgIHJldHVybiAoXG4gICAgICA8SXRlbXM+XG4gICAgICAgIDxUaXRsZT5JdGVtcyBGb3IgU2FsZTwvVGl0bGU+XG4gICAgICAgIHtpdGVtc1RvUmVuZGVyLm1hcCgoaXRlbSxpKSA9PiAoXG4gICAgICAgICAgPEl0ZW0gY2xhc3NOYW1lPVwiaXRlbVwiIGtleT17aX0+XG4gICAgICAgICAgICB7IGl0ZW0uaW1hZ2UgPyAgPGltZyBzcmM9e21ha2VJbWFnZShpdGVtLmltYWdlKX0gLz4gOiBudWxsIH1cbiAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17e1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9hZG1pbi91cGRhdGUnLFxuICAgICAgICAgICAgICBxdWVyeTogeyBpZDogaXRlbS5pZCB9XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGE+RWRpdCB7aXRlbS5pZH08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxUYWtlTXlNb25leVxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLnByaWNlfVxuICAgICAgICAgICAgICBuYW1lPXtpdGVtLnRpdGxlfSAvLyB0aGUgcG9wLWluIGhlYWRlciB0aXRsZVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn0gLy8gdGhlIHBvcC1pbiBoZWFkZXIgc3VidGl0bGVcbiAgICAgICAgICAgICAgaW1hZ2U9e21ha2VJbWFnZShpdGVtLmltYWdlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5CdXkgZm9yIHtmb3JtYXRNb25leShpdGVtLnByaWNlKX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvVGFrZU15TW9uZXk+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucmVtb3ZlSXRlbU11dGF0aW9uKHsgdmFyaWFibGVzOiB7IGlkOiBpdGVtLmlkIH19KX0+JnRpbWVzOyBEZWxldGUgaXRlbTwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9JdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvSXRlbXM+XG4gICAgKVxuICB9XG5cbn1cblxuLy8gMVxuXG4vLyBXZSBleHBvcnQgdGhlIGdyYXBoUUwgSE9DIC0gdGhpcyB3aWxsIGZldGNoIHRoZSBkYXRhIGFuZCBpbmplY3QgaXQgaW50byB0aGUgSXRlbUxpc3QgY29tcGVvbnQgdmlhIHByb3BzXG5cbi8vIENyZWF0ZSBzb21lIEVuaGFuY2Vyc1xuY29uc3QgaXRlbXNFbmFobmNlciA9IGdyYXBocWwoQUxMX0lURU1TX1FVRVJZLCB7IG5hbWU6ICdhbGxMaW5rc1F1ZXJ5JyB9KTtcbmNvbnN0IGRlbGV0ZUl0ZW1FbmhhbmNlciA9IGdyYXBocWwoREVMRVRFX0lURU1fTVVUQVRJT04sIHtcbiAgbmFtZTogJ3JlbW92ZUl0ZW1NdXRhdGlvbicsXG4gIG9wdGlvbnM6IHtcbiAgICB1cGRhdGU6IChwcm94eSwgeyBkYXRhOiB7IGRlbGV0ZUl0ZW0gfSB9KSA9PiB7XG5cbiAgICAgIC8vIGdyYWIgdGhlIGRhdGEgZnJvbSBvdXIgY2FjaGVcbiAgICAgIGNvbnN0IGRhdGEgPSBwcm94eS5yZWFkUXVlcnkoeyBxdWVyeTogQUxMX0lURU1TX1FVRVJZIH0pO1xuXG4gICAgICAvLyBmaWx0ZXIgb3V0IHRoZSBkZWx0ZWQgaXRlbVxuICAgICAgZGF0YS5hbGxJdGVtcyA9IGRhdGEuYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gZGVsZXRlSXRlbS5pZCk7XG5cbiAgICAgIC8vIGFuZCB0aGVuIFwic2V0IHN0YXRlXCIgKHVwZGF0ZSBjYWNoZSksIHNvIGl0IHdpbGwgdXBkYXRlIHdoZXJlZXZlciB3ZSBoYXZlIHVzZWQgdGhpcyBkYXRhIG9uIHRoZSBwYWdlXG4gICAgICBwcm94eS53cml0ZVF1ZXJ5KHsgcXVlcnk6IEFMTF9JVEVNU19RVUVSWSwgZGF0YSB9KTtcblxuICAgIH0sXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKGl0ZW1zRW5haG5jZXIsIGRlbGV0ZUl0ZW1FbmhhbmNlcikoSXRlbUxpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0l0ZW1zLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgQUxMX0lURU1TX1FVRVJZLCBDUkVBVEVfTElOS19NVVRBVElPTiB9IGZyb20gJy4uL3F1ZXJpZXMnO1xuXG5jbGFzcyBDcmVhdGVMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGltYWdlOiAnJyxcbiAgICBwcmljZTogMCxcbiAgICBmdWxsUHJpY2U6IDAsXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc29sZS5sb2cobmV4dFByb3BzKTtcbiAgfVxuXG4gIHVwbG9hZEZpbGUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVzID0gZS5jdXJyZW50VGFyZ2V0LmZpbGVzO1xuXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBkYXRhLmFwcGVuZCgnZGF0YScsIGZpbGVzWzBdKTtcblxuICAgIC8vIHVzZSB0aGUgZmlsZSBlbmRwb2ludFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5ncmFwaC5jb29sL2ZpbGUvdjEvY2o1eHo4c3pzMjg5MzAxNDVnY3Q4MmJkaicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZGF0YVxuICAgIH0pO1xuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogZmlsZS5pZCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgPyAnTE9BRElORy4uLicgOiAnUmVhZHkhJyB9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9jcmVhdGVMaW5rfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEltYWdlXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMudXBsb2FkRmlsZX0gdHlwZT0nZmlsZScvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5UaXRsZVxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogZS50YXJnZXQudmFsdWUgfSl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdBIGRlc2NyaXB0aW9uIGZvciB0aGUgbGluaycvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8bGFiZWw+UHJpY2U8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wcmljZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGhlIGRlc2MgZm9yIHRoaXMgaXRlbSdcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2NyZWF0ZUxpbmsgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBwdWxsIHRoZSB2YWx1ZXMgZnJvbSBzdGF0ZVxuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIHRpdGxlLCBpbWFnZSwgcHJpY2UsIGZ1bGxQcmljZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBjcmVhdGUgYSBtdXRhdGlvblxuICAgIC8vIFRPRE86IGhhbmRsZSBhbnkgZXJyb3JzXG4gICAgLy8gdHVybiBsb2FkaW5nIG9uXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5wcm9wcy5jcmVhdGVMaW5rTXV0YXRpb24oe1xuICAgICAgLy8gcGFzcyBpbiB0aG9zZSB2YXJpYWJsZXMgZnJvbSBzdGF0ZVxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgcHJpY2U6IHBhcnNlSW50KHByaWNlKSxcbiAgICAgICAgZnVsbFByaWNlLFxuICAgICAgICBpbWFnZUlkOiBpbWFnZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfVxufVxuLy8gV2hlbiB3ZSBzdWJtaXQgdGhpcyBtdXRhdGlvbiwgd2UgbmVlZCB0byB1cGRhdGUgb3VyIHN0b3JlIC0gd2UgaGF2ZSBhIGZldyB3YXlzIHRvIGRvIHRoYXQ6XG4vLyBPbmUgLSB3ZSBjYW4gZ28gbnVjdWxhciBhbmQgcnVuIHJlZmV0Y2hRdWVyaWVzKCkgd2hpY2ggd2lsbCBqdXN0IGdvIGdldCBldmVyeXRoaW5nIC0gdGhpcyBpcyBlYXN5LCBidXQgYXQgdGhlIGNvc3Qgb2YgZWZmaWNpZW5jeS5cblxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKENSRUFURV9MSU5LX01VVEFUSU9OLCB7IG5hbWU6ICdjcmVhdGVMaW5rTXV0YXRpb24nLCBvcHRpb25zOiB7XG4gICAgLy8gRWFzeSwgYnV0IHNsb3dcbiAgICAvLyByZWZldGNoUXVlcmllczogWydBbGxMaW5rc1F1ZXJ5J11cbiAgICAvLyBUaGlzIGlzIG11Y2ggQmV0dGVyIC8gZWZmaWNpZW50XG4gICAgLy8gTm90aWNlIGhvdyB0aGUgdmFyaWFibGUgaXMgY2FsbGVkIGNyZWF0ZUl0ZW0gLSB0aGF0IGlzIGJlY2F1c2UgY3JlYXRlSXRlbSBpcyB0aGUgbmFtZSBvZiB0aGUgcXVlcnkhXG4gICAgdXBkYXRlOiAocHJveHksIHsgZGF0YTogeyBjcmVhdGVJdGVtIH0gfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coe2NyZWF0ZUl0ZW0sIEFMTF9JVEVNU19RVUVSWX0pO1xuICAgICAgY29uc3QgZGF0YSA9IHByb3h5LnJlYWRRdWVyeSh7IHF1ZXJ5OiBBTExfSVRFTVNfUVVFUlkgfSk7XG4gICAgICAvLyBkYXRhIGlzIG91ciBzdG9yZSwgYWxsSXRlbXMgaXMgb3VyIHN1Yi1cInN0YXRlXCIsIGl0J3MganVzdCBhbiBhcnJheS4gV2UgY2FuIGp1c3QgYWRkIGl0IHRvXG4gICAgICBkYXRhLmFsbEl0ZW1zLnVuc2hpZnQoY3JlYXRlSXRlbSk7XG4gICAgICAvLyBhbmQgdGhlbiBcInNldCBzdGF0ZVwiLCBzbyBpdCB3aWxsIHVwZGF0ZSBvbiB0aGUgcGFnZS4gVGhpcyB3aWxsIHVwZGF0ZSB0aGUgY2FjaGUgZm9yIHVzIVxuICAgICAgcHJveHkud3JpdGVRdWVyeSh7IHF1ZXJ5OiBBTExfSVRFTVNfUVVFUlksIGRhdGEgfSk7XG4gICAgfSxcbiAgfSB9KShDcmVhdGVMaW5rKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DcmVhdGVJdGVtLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgQ1JFQVRFX1VTRVJfTVVUQVRJT04gfSBmcm9tICcuLi9xdWVyaWVzJztcblxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IGlkVG9rZW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aDBJZFRva2VuJykgfHwgJycgOiAnJztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBpZFRva2VuLFxuICAgICAgZXJyb3I6IHVuZGVmaW5lZFxuICAgIH1cblxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nID8gJ0xPQURJTkcuLi4nIDogJ1JlYWR5IScgfVxuXG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvciA/IDxwPnt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2V9PC9wPiA6ICcnIH1cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5fY3JlYXRlVXNlcn0+XG4gICAgICAgICAgPHA+RW1haWxcbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nZW1haWwnLz5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cD5OYW1lXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSduYW1lJy8+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+aWRUb2tlblxuICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkIHZhbHVlPXt0aGlzLnN0YXRlLmlkVG9rZW59IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlkVG9rZW46IGUudGFyZ2V0LnZhbHVlIH0pfSB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nbmFtZScvPlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfY3JlYXRlVXNlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHB1bGwgdGhlIHZhbHVlcyBmcm9tIHN0YXRlXG4gICAgY29uc3QgeyBlbWFpbCwgbmFtZSwgaWRUb2tlbiB9ID0gdGhpcy5zdGF0ZVxuICAgIC8vIGNyZWF0ZSBhIG11dGF0aW9uXG4gICAgLy8gVE9ETzogaGFuZGxlIGFueSBlcnJvcnNcbiAgICAvLyB0dXJuIGxvYWRpbmcgb25cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyhuYW1lLCBlbWFpbCwgaWRUb2tlbik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucHJvcHMuY3JlYXRlVXNlck11dGF0aW9uKHtcbiAgICAgICAgLy8gcGFzcyBpbiB0aG9zZSB2YXJpYWJsZXMgZnJvbSBzdGF0ZVxuICAgICAgICB2YXJpYWJsZXM6IHsgbmFtZSwgZW1haWwsIGlkVG9rZW4gfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yIH0pO1xuICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH1cbn1cbi8vIFdoZW4gd2Ugc3VibWl0IHRoaXMgbXV0YXRpb24sIHdlIG5lZWQgdG8gdXBkYXRlIG91ciBzdG9yZSAtIHdlIGhhdmUgYSBmZXcgd2F5cyB0byBkbyB0aGF0OlxuLy8gT25lIC0gd2UgY2FuIGdvIG51Y3VsYXIgYW5kIHJ1biByZWZldGNoUXVlcmllcygpIHdoaWNoIHdpbGwganVzdCBnbyBnZXQgZXZlcnl0aGluZyAtIHRoaXMgaXMgZWFzeSwgYnV0IGF0IHRoZSBjb3N0IG9mIGVmZmljaWVuY3kuXG5cblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChDUkVBVEVfVVNFUl9NVVRBVElPTiwgeyBuYW1lOiAnY3JlYXRlVXNlck11dGF0aW9uJywgb3B0aW9uczoge1xuICAgIC8vIEVhc3ksIGJ1dCBzbG93XG4gICAgLy8gcmVmZXRjaFF1ZXJpZXM6IFsnQWxsTGlua3NRdWVyeSddXG4gICAgLy8gVGhpcyBpcyBtdWNoIEJldHRlciAvIGVmZmljaWVudFxuICAgIC8vIE5vdGljZSBob3cgdGhlIHZhcmlhYmxlIGlzIGNhbGxlZCBjcmVhdGVJdGVtIC0gdGhhdCBpcyBiZWNhdXNlIGNyZWF0ZUl0ZW0gaXMgdGhlIG5hbWUgb2YgdGhlIHF1ZXJ5IVxuICB9IH0pKFNpZ251cClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2lnbnVwLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBdXRoMExvY2sgZnJvbSAnYXV0aDAtbG9jaydcblxuY2xhc3MgTG9naW5BdXRoMCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBjb25zdCByZWRpcmVjdFVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbnVwYDtcbiAgICBjb25zb2xlLmxvZyhyZWRpcmVjdFVybCk7XG4gICAgdGhpcy5fbG9jayA9IG5ldyBBdXRoMExvY2soJ2w4NTFldjJxOFg0OHdmNTZlR0xqSVdGYk13d2J2V1BFJywgJ3dlc2Jvcy5hdXRoMC5jb20nLCB7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVVzZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgICAgaWRUb2tlbjogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aDBJZFRva2VuXCIpLFxuICAgICAgZW1haWxBZGRyZXNzOiAnd2VzYm9zQGdtYWlsLmNvbScsXG4gICAgICBuYW1lOiAnSGFyZGNvZGVkIFdlcydcbiAgICB9O1xuICAgIC8vIFRPRE8gLSBtYWtlIGEgY3JlYXRlVXNlciBmdW5jdGlvblxuICAgIHRoaXMucHJvcHNcbiAgICAgIC5jcmVhdGVVc2VyKHsgdmFyaWFibGVzIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKFwiL1wiKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdNT1VOVCcpO1xuICAgIHRoaXMuX2xvY2sub24oJ2F1dGhlbnRpY2F0ZWQnLCAoYXV0aFJlc3VsdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0hJSUlJSUlJSScpXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgwSWRUb2tlbicsIGF1dGhSZXN1bHQuaWRUb2tlbilcbiAgICAgIGNvbnNvbGUubG9nKCdEb25lIScsIGF1dGhSZXN1bHQpO1xuICAgIH0pXG4gIH1cblxuICBfc2hvd0xvZ2luID0gKCkgPT4ge1xuICAgIHRoaXMuX2xvY2suc2hvdygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fc2hvd0xvZ2lufT5Mb2cgaW4gd2l0aCBBdXRoMCA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkF1dGgwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2dpbkF1dGgwLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBNZXRhIGZyb20gJy4vTWV0YSdcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xuaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgYmFja2dyb3VuZDogI2VmYzYwMDtcbiAgcGFkZGluZzogMTAwcHg7XG5gO1xuXG5jb25zdCBQYWdlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8U3R5bGVkUGFnZSBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgPE1ldGEgLz5cbiAgICA8SGVhZGVyIC8+XG4gICAgPE5hdj48L05hdj5cbiAgICA8ZGl2PlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4gIDwvU3R5bGVkUGFnZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoUGFnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BhZ2UuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPHVsPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+SG9tZTwvYT48L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9zaWdudXAvXCI+PGE+U2lnbnVwPC9hPjwvTGluaz5cbiAgICA8TGluayBocmVmPVwiL29yZGVycy9cIj48YT5PcmRlcnM8L2E+PC9MaW5rPlxuICA8L3VsPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcbmltcG9ydCBJdGVtcyBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1zJztcbmltcG9ydCBDcmVhdGVJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlSXRlbSc7XG5pbXBvcnQgU2lnbnVwIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnbnVwJztcbmltcG9ydCBMb2dpbkF1dGgwIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5BdXRoMCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IE9yZGVyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL09yZGVyTGlzdCc7XG5cbmNsYXNzIE9yZGVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxoMj5NeSBPcmRlcnM8L2gyPlxuICAgICAgICA8T3JkZXJMaXN0Lz5cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvb3JkZXJzLmpzP2VudHJ5IiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmxldCBhcG9sbG9DbGllbnQgPSBudWxsXG5cbi8vIFBvbHlmaWxsIGZldGNoKCkgb24gdGhlIHNlcnZlciAodXNlZCBieSBhcG9sbG8tY2xpZW50KVxuaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2hcbn1cblxuZnVuY3Rpb24gY3JlYXRlIChpbml0aWFsU3RhdGUpIHtcblxuICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gY3JlYXRlTmV0d29ya0ludGVyZmFjZSh7XG4gICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9zaW1wbGUvdjEvY2o1eHo4c3pzMjg5MzAxNDVnY3Q4MmJkaicsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgb3B0czogeyAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHVzZSB0aGUgYXV0aDBJZFRva2VuIGluIGxvY2FsU3RvcmFnZSBmb3IgYXV0aG9yaXplZCByZXF1ZXN0c1xuICBuZXR3b3JrSW50ZXJmYWNlLnVzZShbXG4gICAge1xuICAgICAgYXBwbHlNaWRkbGV3YXJlKHJlcSwgbmV4dCkge1xuICAgICAgICBpZiAoIXJlcS5vcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICByZXEub3B0aW9ucy5oZWFkZXJzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgdGhlIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHNcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aDBJZFRva2VuXCIpKSB7XG4gICAgICAgICAgcmVxLm9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aDBJZFRva2VuXCIpfWA7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgXSk7XG5cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBzc3JNb2RlOiAhcHJvY2Vzcy5icm93c2VyLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXG4gICAgbmV0d29ya0ludGVyZmFjZVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXBvbGxvIChpbml0aWFsU3RhdGUpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShpbml0aWFsU3RhdGUpXG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0QXBvbGxvLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgU0lOR0xFX0xJTktfUVVFUlksIFVQREFURV9MSU5LX01VVEFUSU9OIH0gZnJvbSAnLi4vcXVlcmllcyc7XG5cbmNsYXNzIFVwZGF0ZUxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIC4uLnRoaXMucHJvcHMuZmluZEl0ZW0uSXRlbSxcbiAgfVxuXG4gIHNhdmVUb1N0YXRlID0gKGUpID0+IHtcbiAgICBsZXQgeyBuYW1lLCB2YWx1ZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICA8aDI+RWRpdCB7dGhpcy5wcm9wcy5pZH08L2gyPlxuICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/ICdMT0FESU5HLi4uJyA6ICdSZWFkeSEnIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2NyZWF0ZUxpbmt9PlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG5hbWU9XCJ0aXRsZVwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfSB0eXBlPSd0ZXh0Jy8+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9PjwvdGV4dGFyZWE+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+UHJpY2U8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9IHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlfSAvPlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdWxsUHJpY2VcIj5GdWxsIFByaWNlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmdWxsUHJpY2VcIiBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX0gdmFsdWU9e3RoaXMuc3RhdGUuZnVsbFByaWNlfSAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZS4uLjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfY3JlYXRlTGluayA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHB1bGwgdGhlIHZhbHVlcyBmcm9tIHN0YXRlXG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgdGl0bGUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNyZWF0ZSBhIG11dGF0aW9uXG4gICAgLy8gVE9ETzogaGFuZGxlIGFueSBlcnJvcnNcbiAgICAvLyB0dXJuIGxvYWRpbmcgb25cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnByb3BzLnVwZGF0ZUl0ZW0oe1xuICAgICAgLy8gcGFzcyBpbiB0aG9zZSB2YXJpYWJsZXMgZnJvbSBzdGF0ZVxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGVcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH1cblxufVxuXG5jb25zdCBDb21wb25lbnRXaXRoTXV0YXRpb25zID0gY29tcG9zZShcbiAgLy8gRmlyc3QsIHF1ZXJ5IGZvciBnZXR0aW5nIHRoZSBsaW5rXG4gIGdyYXBocWwoU0lOR0xFX0xJTktfUVVFUlksIHtcbiAgICBuYW1lOiAnZmluZEl0ZW0nLFxuICAgIG9wdGlvbnM6ICh7IGlkIH0pID0+ICh7XG4gICAgICB2YXJpYWJsZXM6IHsgaWQgfVxuICAgIH0pXG4gIH0pLFxuICAvLyBTZWNvbmQsIHRoZSBtdXRhdGlvbiBmb3IgdXBkYXRpbmcgdGhlIGxpbmtcbiAgZ3JhcGhxbChVUERBVEVfTElOS19NVVRBVElPTiwgeyBuYW1lOiAndXBkYXRlSXRlbScgfSlcbikoVXBkYXRlTGluayk7XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50V2l0aE11dGF0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVXBkYXRlSXRlbS5qcyIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmV4cG9ydCBjb25zdCBpdGVtRGV0YWlscyA9IGdxbGBcbiAgZnJhZ21lbnQgaXRlbURldGFpbHMgb24gSXRlbSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHByaWNlXG4gICAgICBmdWxsUHJpY2VcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBpbWFnZSB7XG4gICAgICAgIGlkXG4gICAgICAgIHVybFxuICAgICAgICBzZWNyZXRcbiAgICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3F1ZXJpZXMvZnJhZ21lbnRzLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0cmlwZUNoZWNrb3V0IGZyb20gJ3JlYWN0LXN0cmlwZS1jaGVja291dCc7XG5pbXBvcnQgeyBDUkVBVEVfT1JERVJfTVVUQVRJT04sIENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4uL3F1ZXJpZXMnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cblxuY2xhc3MgVGFrZU15TW9uZXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvblRva2VuID0gYXN5bmMgKHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVzLmlkO1xuICAgIGNvbnN0IHVzZXJJZCA9IHRoaXMucHJvcHMuY3VycmVudFVzZXJRdWVyeS51c2VyLmlkO1xuICAgIGNvbnN0IGl0ZW1JZCA9IHRoaXMucHJvcHMuaWQ7XG4gICAgY29uc29sZS5sb2coYEdvaW5nIHRvIG1ha2UgYSBwdXJjaGFzZSB3aXRoICR7dG9rZW59YCk7XG4gICAgY29uc29sZS5sb2coYFRIZSBwZXJzb24gdGhhdCBib3VnaHQgdGhpcyB3YXMgJHt1c2VySWR9YClcbiAgICBjb25zb2xlLmxvZyhgVGhlIGl0ZW0gaWQgaXMgJHtpdGVtSWR9YClcbiAgICBjb25zdCBjaGFyZ2UgPSBhd2FpdCB0aGlzLnByb3BzLmNyZWF0ZU9yZGVyKHsgdmFyaWFibGVzOiB7IHRva2VuLCB1c2VySWQsIGl0ZW1JZCB9fSk7XG4gICAgYWxlcnQoYEJhY2sgZnJvbSB0aGUgY2hhcmdlISAke2NoYXJnZS5pZH1gKTtcbiAgICBjb25zb2xlLmxvZyhjaGFyZ2UpO1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLmN1cnJlbnRVc2VyUXVlcnkudXNlciB8fCB7fTtcbiAgICBjb25zdCBlbWFpbCA9IHVzZXIuZW1haWwgfHwgJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTdHJpcGVDaGVja291dFxuICAgICAgICAgIGFtb3VudD17dGhpcy5wcm9wcy5hbW91bnR9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHRva2VuPXt0aGlzLm9uVG9rZW59XG4gICAgICAgICAgc3RyaXBlS2V5PVwicGtfbGNsVHRUaEZwOENuTzNRdEVaU2Q4SEE5bUZVcHNcIlxuICAgICAgICAgIGN1cnJlbmN5PVwiVVNEXCJcbiAgICAgICAgICBlbWFpbD17ZW1haWx9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9TdHJpcGVDaGVja291dD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCB1c2VyRW5oYW5jZXIgPSBncmFwaHFsKENVUlJFTlRfVVNFUl9RVUVSWSwgeyBuYW1lOiAnY3VycmVudFVzZXJRdWVyeScgfSk7XG5jb25zdCBjcmVhdGVPcmRlckVuaGFuY2VyID0gZ3JhcGhxbChDUkVBVEVfT1JERVJfTVVUQVRJT04sIHsgbmFtZTogJ2NyZWF0ZU9yZGVyJyB9KTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UodXNlckVuaGFuY2VyLCBjcmVhdGVPcmRlckVuaGFuY2VyKShUYWtlTXlNb25leSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Rha2VNeU1vbmV5LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYW1vdW50KSB7XG4gIHJldHVybiAnJCcgKyAgKGFtb3VudCAvIDEwMCkudG9Mb2NhbGVTdHJpbmcoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9mb3JtYXRNb25leS5qcyIsIi8vIFRPRE86IFB1dCB0aGUgcHJvamVjdCBJRCBpbiBhIGNvbmZpZyBmaWxlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW1hZ2UsIHdpZHRoID0gMzAwLCBoZWlnaHQgPSAzMDApIHtcbiAgaWYoIWltYWdlIHx8ICFpbWFnZS5zZWNyZXQpIHJldHVybiAnJztcbiAgcmV0dXJuIGBodHRwczovL2ltYWdlcy5ncmFwaC5jb29sL3YxL2NqNXh6OHN6czI4OTMwMTQ1Z2N0ODJiZGovJHtpbWFnZS5zZWNyZXR9LyR7d2lkdGh9eCR7aGVpZ2h0fWA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW1hZ2UuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdyYXBocWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuLi9xdWVyaWVzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBUaGlzIGZldGNoZXMgdGhlIG5ldyBkYXRhLCBidXQgZG9lc24ndCBwb3B1bGF0ZSB0aGUgdXNlciB2aWEgcHJvcHNcbiAgICAvLyB0aGlzLnByb3BzLmN1cnJlbnRVc2VyUXVlcnkucmVmZXRjaCgpO1xuICAgIC8vIFRoaXMgZmV0Y2hlcyB0aGUgbmV3IGRhdGEsIGFuZCBwb3B1bGF0ZXMgdGhlIHVzZXIgdmlhIHByb3BzXG4gICAgc2V0VGltZW91dCh0aGlzLnByb3BzLmN1cnJlbnRVc2VyUXVlcnkucmVmZXRjaCwgMSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW50VXNlclF1ZXJ5LnVzZXIpO1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLmN1cnJlbnRVc2VyUXVlcnkudXNlciB8fCB7fTtcbiAgICBjb25zdCB7IGVtYWlsID0gJycgfSA9IHVzZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+e2VtYWlsfSBJJ20gdGhlIGhlYWRlciE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgdXNlckVuaGFuY2VyID0gZ3JhcGhxbChDVVJSRU5UX1VTRVJfUVVFUlksIHsgbmFtZTogJ2N1cnJlbnRVc2VyUXVlcnknIH0pO1xuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh1c2VyRW5oYW5jZXIpKEhlYWRlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxOYXYvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJodHRwczovL3dlc2Jvcy5jb20vd3AtY29udGVudC90aGVtZXMvd2IyMDE0L2kvY3Jvd24teWVsbG93LXNtYWxsLnBuZ1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cbiAgICAgIDx0aXRsZT5TaWNrIEZpdHM8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL01ldGEuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcbmltcG9ydCBJdGVtcyBmcm9tICcuLi9jb21wb25lbnRzL0l0ZW1zJztcbmltcG9ydCBDcmVhdGVJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlSXRlbSc7XG5pbXBvcnQgU2lnbnVwIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnbnVwJztcbmltcG9ydCBMb2dpbkF1dGgwIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5BdXRoMCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IHsgVVNFUl9PUkRFUlNfUVVFUlkgfSBmcm9tICcuLi9xdWVyaWVzJztcbmltcG9ydCB7IGdyYXBocWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgaGFzIGZyb20gJ2xvZGFzaC5oYXMnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xuaW1wb3J0IG1ha2VJbWFnZSBmcm9tICcuLi9saWIvaW1hZ2UnO1xuXG5jbGFzcyBPcmRlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnTW91bnRpbmchJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuXG4gICAgaWYodGhpcy5wcm9wcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLmVycm9yKSB7XG4gICAgICByZXR1cm4gPHA+RXJyb3IuLi48L3A+XG4gICAgfVxuXG4gICAgaWYoIWhhcyh0aGlzLnByb3BzLCAndXNlck9yZGVyc1F1ZXJ5LnVzZXIub3JkZXJzJykpIHtcbiAgICAgIHJldHVybiA8cD5Eb24ndCBoYXZlIGl0IHlldCE8L3A+XG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXJzID0gdGhpcy5wcm9wcy51c2VyT3JkZXJzUXVlcnkudXNlci5vcmRlcnM7XG5cbiAgICBjb25zb2xlLmxvZyhvcmRlcnMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+WW91IGhhdmUge29yZGVycy5sZW5ndGh9IE9yZGVyczwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7b3JkZXJzLm1hcChvcmRlciA9PiA8bGkga2V5PXtvcmRlci5pZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17bWFrZUltYWdlKG9yZGVyLml0ZW0uaW1hZ2UpfSBhbHQ9XCJcIi8+XG4gICAgICAgICAgICA8aDM+e29yZGVyLml0ZW0udGl0bGV9ICh7Zm9ybWF0TW9uZXkob3JkZXIuYW1vdW50KX0pIDwvaDM+XG4gICAgICAgICAgICA8cD57b3JkZXIuaXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG9yZGVyc0VuaGFuY2VyID0gZ3JhcGhxbChVU0VSX09SREVSU19RVUVSWSwgeyBuYW1lOiAndXNlck9yZGVyc1F1ZXJ5JyB9KTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uob3JkZXJzRW5oYW5jZXIpKE9yZGVyTGlzdClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvT3JkZXJMaXN0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBYUE7QUFDQTtBQWFBO0FBQ0E7QUFvQkE7QUFDQTtBQVVBO0FBQ0E7QUFRQTtBQUNBO0FBU0E7QUFDQTtBQWNBO0FBQ0E7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFNQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQVhBO0FBQ0E7QUFVQTtBQVhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQUNBO0FBREE7QUFaQTtBQUNBO0FBREE7QUFpQkE7QUFqQkE7QUFBQTtBQWtCQTtBQUNBO0FBbkJBO0FBb0JBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQXRDQTtBQUNBOzs7QUEwQ0E7QUFBQTtBQURBO0FBREE7QUFDQTtBQTFDQTs7QUFBQTtBQWlEQTtBQUNBO0FBbERBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFzREE7QUF0REE7QUFDQTtBQXFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQXpEQTtBQUNBOztBQURBO0FBNERBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTtBQTlEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQURBO0FBREE7QUFJQTtBQUpBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUxBO0FBT0E7QUFQQTtBQU9BOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7O0FBaERBO0FBQ0E7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQWZBO0FBRkE7QUFDQTtBQWdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBT0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUZBO0FBUEE7QUFBQTtBQVdBO0FBQ0E7QUFEQTtBQVhBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7O0FBeUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFRQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFKQTtBQUZBO0FBQ0E7QUFGQTtBQVJBO0FBQ0E7QUFpQkE7QUFDQTtBQW5CQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUE3Q0E7QUFDQTs7OztBQW1CQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUlBOzs7OztBQXREQTtBQTZFQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFYQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUF2Q0E7QUE4REE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUF4QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQVJBO0FBQUE7QUFVQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBRkE7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFlQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7O0FBeUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUpBO0FBS0E7QUFBQTtBQUdBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUE1QkE7QUFDQTtBQXNDQTtBQUNBO0FBdENBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBREE7QUFJQTs7Ozs7QUFxQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFPQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFMQTtBQURBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQWRBO0FBQ0E7O0FBZUE7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBVEE7QUFVQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBRkE7QUFWQTtBQUNBO0FBZUE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUF6QkE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQXZDQTtBQUNBO0FBNkRBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7Ozs7O0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQVZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQWFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7Ozs7O0FBbkJBO0FBQ0E7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBaEJBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBakNBO0FBQ0E7QUFtQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        