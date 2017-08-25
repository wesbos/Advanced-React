
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(878);


/***/ }),

/***/ 878:
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

var _Items = __webpack_require__(635);

var _Items2 = _interopRequireDefault(_Items);

var _CreateItem = __webpack_require__(642);

var _CreateItem2 = _interopRequireDefault(_CreateItem);

var _Count = __webpack_require__(879);

var _Count2 = _interopRequireDefault(_Count);

var _LoginAuth = __webpack_require__(644);

var _LoginAuth2 = _interopRequireDefault(_LoginAuth);

var _Header = __webpack_require__(872);

var _Header2 = _interopRequireDefault(_Header);

var _Page = __webpack_require__(677);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/pages/index.js?entry';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_LoginAuth2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(_Count2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(_CreateItem2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(_Items2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/pages/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_ITEMS_QUERY = undefined;

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/Count.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/Count.js"); } } })();

/***/ })

},[877]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3F1ZXJpZXMvaW5kZXguanM/YmVhNjVlMyIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/YmVhNjVlMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1zLmpzP2JlYTY1ZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVJdGVtLmpzP2JlYTY1ZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkF1dGgwLmpzP2JlYTY1ZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlLmpzP2JlYTY1ZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuanM/YmVhNjVlMyIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdEFwb2xsby5qcz9iZWE2NWUzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXBkYXRlSXRlbS5qcz9iZWE2NWUzIiwid2VicGFjazovLy8uL3F1ZXJpZXMvZnJhZ21lbnRzLmpzP2JlYTY1ZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWtlTXlNb25leS5qcz9iZWE2NWUzIiwid2VicGFjazovLy8uL2xpYi9mb3JtYXRNb25leS5qcz9iZWE2NWUzIiwid2VicGFjazovLy8uL2xpYi9pbWFnZS5qcz9iZWE2NWUzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2JlYTY1ZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZXRhLmpzP2JlYTY1ZTMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/YmVhNjVlMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50LmpzP2JlYTY1ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgaXRlbURldGFpbHMgfSBmcm9tICcuL2ZyYWdtZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfTElOS19NVVRBVElPTiA9IGdxbGBcbiAgJHtpdGVtRGV0YWlsc31cbiAgbXV0YXRpb24gQ3JlYXRlTGlua011dGF0aW9uKCRkZXNjcmlwdGlvbjogU3RyaW5nISwgJHRpdGxlOiBTdHJpbmchLCAkaW1hZ2VJZDogSUQsICRwcmljZTogSW50ISkge1xuICAgIGNyZWF0ZUl0ZW0oXG4gICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLFxuICAgICAgdGl0bGU6ICR0aXRsZSxcbiAgICAgIGltYWdlSWQ6ICRpbWFnZUlkXG4gICAgICBwcmljZTogJHByaWNlXG4gICAgKSB7XG4gICAgICAuLi5pdGVtRGV0YWlsc1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1VTRVJfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIENyZWF0ZVVzZXJNdXRhdGlvbigkZW1haWw6IFN0cmluZyEsICRuYW1lOiBTdHJpbmchLCAkaWRUb2tlbjogU3RyaW5nISkge1xuICAgIGNyZWF0ZVVzZXIoXG4gICAgICBlbWFpbDogJGVtYWlsLFxuICAgICAgbmFtZTogJG5hbWUsXG4gICAgICBhdXRoUHJvdmlkZXI6IHsgYXV0aDA6IHsgaWRUb2tlbjogJGlkVG9rZW4gfSB9XG4gICAgKSB7XG4gICAgICBpZCxcbiAgICAgIGVtYWlsLFxuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ1JFQVRFX09SREVSX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBDcmVhdGVPcmRlck11dGF0aW9uKCR0b2tlbjogU3RyaW5nISwgJHVzZXJJZDogSUQhLCAkaXRlbUlkOiBJRCEpIHtcbiAgICBjcmVhdGVPcmRlcih0b2tlbjogJHRva2VuLCB1c2VySWQ6ICR1c2VySWQsIGl0ZW1JZDogJGl0ZW1JZCkge1xuICAgICAgaWRcbiAgICAgIHRva2VuXG4gICAgICBjaGFyZ2VcbiAgICAgIGFtb3VudFxuICAgICAgaXRlbSB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB9XG4gICAgICB1c2VyIHtcbiAgICAgICAgaWRcbiAgICAgICAgZW1haWxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEFMTF9JVEVNU19RVUVSWSA9IGdxbGBcbiAgIyBJbXBvcnQgdGhlIEZyYWdtZW50XG4gICR7aXRlbURldGFpbHN9XG4gIHF1ZXJ5IEFsbExpbmtzUXVlcnkge1xuICAgIGFsbEl0ZW1zKG9yZGVyQnk6IGNyZWF0ZWRBdF9ERVNDKSB7XG4gICAgICAjIFVzZSB0aGF0IGZyYWdtZW50IGJ5IGl0J3MgbmFtZSAoZXZlbiB0aG91Z2ggaXQgdGhlIHNhbWUgYXMgdGhlIHZhcmlhYmxlKVxuICAgICAgLi4uaXRlbURldGFpbHNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNJTkdMRV9MSU5LX1FVRVJZID0gZ3FsYFxuICAke2l0ZW1EZXRhaWxzfVxuICBxdWVyeSBGaW5kSXRlbSgkaWQ6IElEISkge1xuICAgIEl0ZW0oaWQ6ICRpZCkge1xuICAgICAgLi4uaXRlbURldGFpbHNcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfSVRFTV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gRGVsdGVJdGVtKCRpZDogSUQhKSB7XG4gICAgZGVsZXRlSXRlbShpZDogJGlkKSB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFVQREFURV9MSU5LX01VVEFUSU9OID0gZ3FsYFxuICAke2l0ZW1EZXRhaWxzfVxuICBtdXRhdGlvbiBVcGRhdGVJdGVtKCRpZDogSUQhLCAkdGl0bGU6IFN0cmluZyEsICRkZXNjcmlwdGlvbjogU3RyaW5nISwgJHByaWNlOiBJbnQhLCAkZnVsbFByaWNlOiBJbnQhKSB7XG4gICAgdXBkYXRlSXRlbShcbiAgICAgIGlkOiAkaWQsXG4gICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLFxuICAgICAgdGl0bGU6ICR0aXRsZSxcbiAgICAgIHByaWNlOiAkcHJpY2UsXG4gICAgICBmdWxsUHJpY2U6ICRmdWxsUHJpY2VcbiAgICApIHtcbiAgICAgIC4uLml0ZW1EZXRhaWxzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHVzZXJRdWVyeSB7XG4gICAgdXNlciB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZW1haWxcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBVU0VSX09SREVSU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHVzZXIgeyAjIGdyYWIgdGhlIGN1cnJlbnQgdXNlclxuICAgICAgaWRcbiAgICAgIG9yZGVycyB7ICMgYW5kIGEgYWxsIHRoZWlyIG9yZGVyc1xuICAgICAgICBpZFxuICAgICAgICBhbW91bnRcbiAgICAgICAgY2hhcmdlXG4gICAgICAgIGl0ZW0geyAjIHBvcHVsYXRlIHRoZSBkZXRhaWxzIGFib3V0IHRoZSBpdGVtIHRoZXkgYm91Z2h0IHdpdGggdGhlIGltYWdlLCBkZXNjcmlwdGlvbiBhbmQgdGl0bGVcbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHNlY3JldFxuICAgICAgICAgIH1cbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9xdWVyaWVzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBpbml0QXBvbGxvIGZyb20gJy4vaW5pdEFwb2xsbydcblxuLy8gR2V0cyB0aGUgZGlzcGxheSBuYW1lIG9mIGEgSlNYIGNvbXBvbmVudCBmb3IgZGV2IHRvb2xzXG5mdW5jdGlvbiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSAoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2VkQ29tcG9uZW50ID0+IHtcbiAgcmV0dXJuIGNsYXNzIFdpdGhEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgV2l0aERhdGEoJHtnZXRDb21wb25lbnREaXNwbGF5TmFtZShDb21wb3NlZENvbXBvbmVudCl9KWBcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc2VydmVyU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuICAgICAgbGV0IHNlcnZlclN0YXRlID0ge31cblxuICAgICAgLy8gRXZhbHVhdGUgdGhlIGNvbXBvc2VkIGNvbXBvbmVudCdzIGdldEluaXRpYWxQcm9wcygpXG4gICAgICBsZXQgY29tcG9zZWRJbml0aWFsUHJvcHMgPSB7fVxuICAgICAgaWYgKENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBjb21wb3NlZEluaXRpYWxQcm9wcyA9IGF3YWl0IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgICB9XG5cbiAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzIGluIHRoZSBjb21wb25lbnQgdHJlZVxuICAgICAgLy8gYW5kIGV4dHJhY3QgdGhlIHJlc3VsdGluZyBkYXRhXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb25zdCBhcG9sbG8gPSBpbml0QXBvbGxvKClcbiAgICAgICAgLy8gUHJvdmlkZSB0aGUgYHVybGAgcHJvcCBkYXRhIGluIGNhc2UgYSBHcmFwaFFMIHF1ZXJ5IHVzZXMgaXRcbiAgICAgICAgY29uc3QgdXJsID0ge3F1ZXJ5OiBjdHgucXVlcnksIHBhdGhuYW1lOiBjdHgucGF0aG5hbWV9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXNcbiAgICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoXG4gICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxuICAgICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgdXJsPXt1cmx9IHsuLi5jb21wb3NlZEluaXRpYWxQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIFByZXZlbnQgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBmcm9tIGNyYXNoaW5nIFNTUi5cbiAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxuICAgICAgICAgIC8vIGh0dHA6Ly9kZXYuYXBvbGxvZGF0YS5jb20vcmVhY3QvYXBpLXF1ZXJpZXMuaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcbiAgICAgICAgSGVhZC5yZXdpbmQoKVxuXG4gICAgICAgIC8vIEV4dHJhY3QgcXVlcnkgZGF0YSBmcm9tIHRoZSBBcG9sbG8gc3RvcmVcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhcG9sbG8uZ2V0SW5pdGlhbFN0YXRlKClcblxuICAgICAgICBzZXJ2ZXJTdGF0ZSA9IHtcbiAgICAgICAgICBhcG9sbG86IHtcbiAgICAgICAgICAgIC8vIE9ubHkgaW5jbHVkZSB0aGUgQXBvbGxvIGRhdGEgc3RhdGVcbiAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VydmVyU3RhdGUsXG4gICAgICAgIC4uLmNvbXBvc2VkSW5pdGlhbFByb3BzXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuYXBvbGxvID0gaW5pdEFwb2xsbyh0aGlzLnByb3BzLnNlcnZlclN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXt0aGlzLmFwb2xsb30+XG4gICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3dpdGhEYXRhLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBncmFwaHFsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IFVwZGF0ZUl0ZW0gZnJvbSAnLi9VcGRhdGVJdGVtJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBUYWtlTXlNb25leSBmcm9tICcuL1Rha2VNeU1vbmV5JztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xuaW1wb3J0IG1ha2VJbWFnZSBmcm9tICcuLi9saWIvaW1hZ2UnO1xuXG5pbXBvcnQgeyBBTExfSVRFTVNfUVVFUlksIERFTEVURV9JVEVNX01VVEFUSU9OIH0gZnJvbSAnLi4vcXVlcmllcyc7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDUwcHg7XG5gO1xuXG5cblxuY29uc3QgSXRlbXMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBjYWxjKDI1JSAtIDIwcHgpKTtcbiAgZ3JpZC1nYXA6IDIwcHg7XG5gO1xuXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgcGFkZGluZzogMjBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY2xhc3MgSXRlbUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIC8vIDFcbiAgICBpZiAodGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5ICYmIHRoaXMucHJvcHMuYWxsTGlua3NRdWVyeS5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgfVxuXG4gICAgLy8gMlxuICAgIGlmICh0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkgJiYgdGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5LmVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkuZXJyb3IpXG4gICAgICByZXR1cm4gPGRpdj5FcnJvcjwvZGl2PlxuICAgIH1cblxuICAgIC8vIDNcbiAgICBjb25zdCBpdGVtc1RvUmVuZGVyID0gdGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5LmFsbEl0ZW1zXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEl0ZW1zPlxuICAgICAgICA8VGl0bGU+SXRlbXMgRm9yIFNhbGU8L1RpdGxlPlxuICAgICAgICB7aXRlbXNUb1JlbmRlci5tYXAoKGl0ZW0saSkgPT4gKFxuICAgICAgICAgIDxJdGVtIGNsYXNzTmFtZT1cIml0ZW1cIiBrZXk9e2l9PlxuICAgICAgICAgICAgeyBpdGVtLmltYWdlID8gIDxpbWcgc3JjPXttYWtlSW1hZ2UoaXRlbS5pbWFnZSl9IC8+IDogbnVsbCB9XG4gICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvYWRtaW4vdXBkYXRlJyxcbiAgICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IGl0ZW0uaWQgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxhPkVkaXQge2l0ZW0uaWR9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8VGFrZU15TW9uZXlcbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIGFtb3VudD17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgbmFtZT17aXRlbS50aXRsZX0gLy8gdGhlIHBvcC1pbiBoZWFkZXIgdGl0bGVcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259IC8vIHRoZSBwb3AtaW4gaGVhZGVyIHN1YnRpdGxlXG4gICAgICAgICAgICAgIGltYWdlPXttYWtlSW1hZ2UoaXRlbS5pbWFnZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24+QnV5IGZvciB7Zm9ybWF0TW9uZXkoaXRlbS5wcmljZSl9PC9idXR0b24+XG4gICAgICAgICAgICA8L1Rha2VNeU1vbmV5PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlbW92ZUl0ZW1NdXRhdGlvbih7IHZhcmlhYmxlczogeyBpZDogaXRlbS5pZCB9fSl9PiZ0aW1lczsgRGVsZXRlIGl0ZW08L2J1dHRvbj5cblxuICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L0l0ZW1zPlxuICAgIClcbiAgfVxuXG59XG5cbi8vIDFcblxuLy8gV2UgZXhwb3J0IHRoZSBncmFwaFFMIEhPQyAtIHRoaXMgd2lsbCBmZXRjaCB0aGUgZGF0YSBhbmQgaW5qZWN0IGl0IGludG8gdGhlIEl0ZW1MaXN0IGNvbXBlb250IHZpYSBwcm9wc1xuXG4vLyBDcmVhdGUgc29tZSBFbmhhbmNlcnNcbmNvbnN0IGl0ZW1zRW5haG5jZXIgPSBncmFwaHFsKEFMTF9JVEVNU19RVUVSWSwgeyBuYW1lOiAnYWxsTGlua3NRdWVyeScgfSk7XG5jb25zdCBkZWxldGVJdGVtRW5oYW5jZXIgPSBncmFwaHFsKERFTEVURV9JVEVNX01VVEFUSU9OLCB7XG4gIG5hbWU6ICdyZW1vdmVJdGVtTXV0YXRpb24nLFxuICBvcHRpb25zOiB7XG4gICAgdXBkYXRlOiAocHJveHksIHsgZGF0YTogeyBkZWxldGVJdGVtIH0gfSkgPT4ge1xuXG4gICAgICAvLyBncmFiIHRoZSBkYXRhIGZyb20gb3VyIGNhY2hlXG4gICAgICBjb25zdCBkYXRhID0gcHJveHkucmVhZFF1ZXJ5KHsgcXVlcnk6IEFMTF9JVEVNU19RVUVSWSB9KTtcblxuICAgICAgLy8gZmlsdGVyIG91dCB0aGUgZGVsdGVkIGl0ZW1cbiAgICAgIGRhdGEuYWxsSXRlbXMgPSBkYXRhLmFsbEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGRlbGV0ZUl0ZW0uaWQpO1xuXG4gICAgICAvLyBhbmQgdGhlbiBcInNldCBzdGF0ZVwiICh1cGRhdGUgY2FjaGUpLCBzbyBpdCB3aWxsIHVwZGF0ZSB3aGVyZWV2ZXIgd2UgaGF2ZSB1c2VkIHRoaXMgZGF0YSBvbiB0aGUgcGFnZVxuICAgICAgcHJveHkud3JpdGVRdWVyeSh7IHF1ZXJ5OiBBTExfSVRFTVNfUVVFUlksIGRhdGEgfSk7XG5cbiAgICB9LFxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShpdGVtc0VuYWhuY2VyLCBkZWxldGVJdGVtRW5oYW5jZXIpKEl0ZW1MaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9JdGVtcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdyYXBocWwsIGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEFMTF9JVEVNU19RVUVSWSwgQ1JFQVRFX0xJTktfTVVUQVRJT04gfSBmcm9tICcuLi9xdWVyaWVzJztcblxuY2xhc3MgQ3JlYXRlTGluayBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBpbWFnZTogJycsXG4gICAgcHJpY2U6IDAsXG4gICAgZnVsbFByaWNlOiAwLFxuICAgIGxvYWRpbmc6IGZhbHNlXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnNvbGUubG9nKG5leHRQcm9wcyk7XG4gIH1cblxuICB1cGxvYWRGaWxlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IGUuY3VycmVudFRhcmdldC5maWxlcztcblxuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZGF0YS5hcHBlbmQoJ2RhdGEnLCBmaWxlc1swXSk7XG5cbiAgICAvLyB1c2UgdGhlIGZpbGUgZW5kcG9pbnRcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9maWxlL3YxL2NqNXh6OHN6czI4OTMwMTQ1Z2N0ODJiZGonLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGRhdGFcbiAgICB9KTtcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IGZpbGUuaWQgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nID8gJ0xPQURJTkcuLi4nIDogJ1JlYWR5IScgfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5fY3JlYXRlTGlua30+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJbWFnZVxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLnVwbG9hZEZpbGV9IHR5cGU9J2ZpbGUnLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+VGl0bGVcbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pfSB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nQSBkZXNjcmlwdGlvbiBmb3IgdGhlIGxpbmsnLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGxhYmVsPlByaWNlPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2V9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX0gLz48L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RoZSBkZXNjIGZvciB0aGlzIGl0ZW0nXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9jcmVhdGVMaW5rID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcHVsbCB0aGUgdmFsdWVzIGZyb20gc3RhdGVcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCB0aXRsZSwgaW1hZ2UsIHByaWNlLCBmdWxsUHJpY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gY3JlYXRlIGEgbXV0YXRpb25cbiAgICAvLyBUT0RPOiBoYW5kbGUgYW55IGVycm9yc1xuICAgIC8vIHR1cm4gbG9hZGluZyBvblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucHJvcHMuY3JlYXRlTGlua011dGF0aW9uKHtcbiAgICAgIC8vIHBhc3MgaW4gdGhvc2UgdmFyaWFibGVzIGZyb20gc3RhdGVcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHByaWNlOiBwYXJzZUludChwcmljZSksXG4gICAgICAgIGZ1bGxQcmljZSxcbiAgICAgICAgaW1hZ2VJZDogaW1hZ2VcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH1cbn1cbi8vIFdoZW4gd2Ugc3VibWl0IHRoaXMgbXV0YXRpb24sIHdlIG5lZWQgdG8gdXBkYXRlIG91ciBzdG9yZSAtIHdlIGhhdmUgYSBmZXcgd2F5cyB0byBkbyB0aGF0OlxuLy8gT25lIC0gd2UgY2FuIGdvIG51Y3VsYXIgYW5kIHJ1biByZWZldGNoUXVlcmllcygpIHdoaWNoIHdpbGwganVzdCBnbyBnZXQgZXZlcnl0aGluZyAtIHRoaXMgaXMgZWFzeSwgYnV0IGF0IHRoZSBjb3N0IG9mIGVmZmljaWVuY3kuXG5cblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChDUkVBVEVfTElOS19NVVRBVElPTiwgeyBuYW1lOiAnY3JlYXRlTGlua011dGF0aW9uJywgb3B0aW9uczoge1xuICAgIC8vIEVhc3ksIGJ1dCBzbG93XG4gICAgLy8gcmVmZXRjaFF1ZXJpZXM6IFsnQWxsTGlua3NRdWVyeSddXG4gICAgLy8gVGhpcyBpcyBtdWNoIEJldHRlciAvIGVmZmljaWVudFxuICAgIC8vIE5vdGljZSBob3cgdGhlIHZhcmlhYmxlIGlzIGNhbGxlZCBjcmVhdGVJdGVtIC0gdGhhdCBpcyBiZWNhdXNlIGNyZWF0ZUl0ZW0gaXMgdGhlIG5hbWUgb2YgdGhlIHF1ZXJ5IVxuICAgIHVwZGF0ZTogKHByb3h5LCB7IGRhdGE6IHsgY3JlYXRlSXRlbSB9IH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHtjcmVhdGVJdGVtLCBBTExfSVRFTVNfUVVFUll9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBwcm94eS5yZWFkUXVlcnkoeyBxdWVyeTogQUxMX0lURU1TX1FVRVJZIH0pO1xuICAgICAgLy8gZGF0YSBpcyBvdXIgc3RvcmUsIGFsbEl0ZW1zIGlzIG91ciBzdWItXCJzdGF0ZVwiLCBpdCdzIGp1c3QgYW4gYXJyYXkuIFdlIGNhbiBqdXN0IGFkZCBpdCB0b1xuICAgICAgZGF0YS5hbGxJdGVtcy51bnNoaWZ0KGNyZWF0ZUl0ZW0pO1xuICAgICAgLy8gYW5kIHRoZW4gXCJzZXQgc3RhdGVcIiwgc28gaXQgd2lsbCB1cGRhdGUgb24gdGhlIHBhZ2UuIFRoaXMgd2lsbCB1cGRhdGUgdGhlIGNhY2hlIGZvciB1cyFcbiAgICAgIHByb3h5LndyaXRlUXVlcnkoeyBxdWVyeTogQUxMX0lURU1TX1FVRVJZLCBkYXRhIH0pO1xuICAgIH0sXG4gIH0gfSkoQ3JlYXRlTGluaylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ3JlYXRlSXRlbS5qcyIsImltcG9ydCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aDBMb2NrIGZyb20gJ2F1dGgwLWxvY2snXG5cbmNsYXNzIExvZ2luQXV0aDAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgY29uc3QgcmVkaXJlY3RVcmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3NpZ251cGA7XG4gICAgY29uc29sZS5sb2cocmVkaXJlY3RVcmwpO1xuICAgIHRoaXMuX2xvY2sgPSBuZXcgQXV0aDBMb2NrKCdsODUxZXYycThYNDh3ZjU2ZUdMaklXRmJNd3didldQRScsICd3ZXNib3MuYXV0aDAuY29tJywge1xuICAgICAgYXV0aDoge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVVc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICAgIGlkVG9rZW46IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGgwSWRUb2tlblwiKSxcbiAgICAgIGVtYWlsQWRkcmVzczogJ3dlc2Jvc0BnbWFpbC5jb20nLFxuICAgICAgbmFtZTogJ0hhcmRjb2RlZCBXZXMnXG4gICAgfTtcbiAgICAvLyBUT0RPIC0gbWFrZSBhIGNyZWF0ZVVzZXIgZnVuY3Rpb25cbiAgICB0aGlzLnByb3BzXG4gICAgICAuY3JlYXRlVXNlcih7IHZhcmlhYmxlcyB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShcIi9cIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShcIi9cIik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnTU9VTlQnKTtcbiAgICB0aGlzLl9sb2NrLm9uKCdhdXRoZW50aWNhdGVkJywgKGF1dGhSZXN1bHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdISUlJSUlJSUknKVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoMElkVG9rZW4nLCBhdXRoUmVzdWx0LmlkVG9rZW4pXG4gICAgICBjb25zb2xlLmxvZygnRG9uZSEnLCBhdXRoUmVzdWx0KTtcbiAgICB9KVxuICB9XG5cbiAgX3Nob3dMb2dpbiA9ICgpID0+IHtcbiAgICB0aGlzLl9sb2NrLnNob3coKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX3Nob3dMb2dpbn0+TG9nIGluIHdpdGggQXV0aDAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5BdXRoMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9naW5BdXRoMC5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgTWV0YSBmcm9tICcuL01ldGEnXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZFBhZ2UgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGJhY2tncm91bmQ6ICNlZmM2MDA7XG4gIHBhZGRpbmc6IDEwMHB4O1xuYDtcblxuY29uc3QgUGFnZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFN0eWxlZFBhZ2UgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgIDxNZXRhIC8+XG4gICAgPEhlYWRlciAvPlxuICAgIDxOYXY+PC9OYXY+XG4gICAgPGRpdj5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICA8L1N0eWxlZFBhZ2U+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKFBhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QYWdlLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDx1bD5cbiAgICA8TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwL1wiPjxhPlNpZ251cDwvYT48L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9vcmRlcnMvXCI+PGE+T3JkZXJzPC9hPjwvTGluaz5cbiAgPC91bD5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2LmpzIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmxldCBhcG9sbG9DbGllbnQgPSBudWxsXG5cbi8vIFBvbHlmaWxsIGZldGNoKCkgb24gdGhlIHNlcnZlciAodXNlZCBieSBhcG9sbG8tY2xpZW50KVxuaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2hcbn1cblxuZnVuY3Rpb24gY3JlYXRlIChpbml0aWFsU3RhdGUpIHtcblxuICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gY3JlYXRlTmV0d29ya0ludGVyZmFjZSh7XG4gICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9zaW1wbGUvdjEvY2o1eHo4c3pzMjg5MzAxNDVnY3Q4MmJkaicsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgb3B0czogeyAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHVzZSB0aGUgYXV0aDBJZFRva2VuIGluIGxvY2FsU3RvcmFnZSBmb3IgYXV0aG9yaXplZCByZXF1ZXN0c1xuICBuZXR3b3JrSW50ZXJmYWNlLnVzZShbXG4gICAge1xuICAgICAgYXBwbHlNaWRkbGV3YXJlKHJlcSwgbmV4dCkge1xuICAgICAgICBpZiAoIXJlcS5vcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICByZXEub3B0aW9ucy5oZWFkZXJzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgdGhlIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHNcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aDBJZFRva2VuXCIpKSB7XG4gICAgICAgICAgcmVxLm9wdGlvbnMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aDBJZFRva2VuXCIpfWA7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgXSk7XG5cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBzc3JNb2RlOiAhcHJvY2Vzcy5icm93c2VyLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXG4gICAgbmV0d29ya0ludGVyZmFjZVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXBvbGxvIChpbml0aWFsU3RhdGUpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShpbml0aWFsU3RhdGUpXG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0QXBvbGxvLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgU0lOR0xFX0xJTktfUVVFUlksIFVQREFURV9MSU5LX01VVEFUSU9OIH0gZnJvbSAnLi4vcXVlcmllcyc7XG5cbmNsYXNzIFVwZGF0ZUxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIC4uLnRoaXMucHJvcHMuZmluZEl0ZW0uSXRlbSxcbiAgfVxuXG4gIHNhdmVUb1N0YXRlID0gKGUpID0+IHtcbiAgICBsZXQgeyBuYW1lLCB2YWx1ZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICA8aDI+RWRpdCB7dGhpcy5wcm9wcy5pZH08L2gyPlxuICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/ICdMT0FESU5HLi4uJyA6ICdSZWFkeSEnIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2NyZWF0ZUxpbmt9PlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG5hbWU9XCJ0aXRsZVwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfSB0eXBlPSd0ZXh0Jy8+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9PjwvdGV4dGFyZWE+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+UHJpY2U8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9IHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlfSAvPlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdWxsUHJpY2VcIj5GdWxsIFByaWNlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmdWxsUHJpY2VcIiBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX0gdmFsdWU9e3RoaXMuc3RhdGUuZnVsbFByaWNlfSAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZS4uLjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfY3JlYXRlTGluayA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHB1bGwgdGhlIHZhbHVlcyBmcm9tIHN0YXRlXG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgdGl0bGUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNyZWF0ZSBhIG11dGF0aW9uXG4gICAgLy8gVE9ETzogaGFuZGxlIGFueSBlcnJvcnNcbiAgICAvLyB0dXJuIGxvYWRpbmcgb25cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnByb3BzLnVwZGF0ZUl0ZW0oe1xuICAgICAgLy8gcGFzcyBpbiB0aG9zZSB2YXJpYWJsZXMgZnJvbSBzdGF0ZVxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGVcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH1cblxufVxuXG5jb25zdCBDb21wb25lbnRXaXRoTXV0YXRpb25zID0gY29tcG9zZShcbiAgLy8gRmlyc3QsIHF1ZXJ5IGZvciBnZXR0aW5nIHRoZSBsaW5rXG4gIGdyYXBocWwoU0lOR0xFX0xJTktfUVVFUlksIHtcbiAgICBuYW1lOiAnZmluZEl0ZW0nLFxuICAgIG9wdGlvbnM6ICh7IGlkIH0pID0+ICh7XG4gICAgICB2YXJpYWJsZXM6IHsgaWQgfVxuICAgIH0pXG4gIH0pLFxuICAvLyBTZWNvbmQsIHRoZSBtdXRhdGlvbiBmb3IgdXBkYXRpbmcgdGhlIGxpbmtcbiAgZ3JhcGhxbChVUERBVEVfTElOS19NVVRBVElPTiwgeyBuYW1lOiAndXBkYXRlSXRlbScgfSlcbikoVXBkYXRlTGluayk7XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50V2l0aE11dGF0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVXBkYXRlSXRlbS5qcyIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmV4cG9ydCBjb25zdCBpdGVtRGV0YWlscyA9IGdxbGBcbiAgZnJhZ21lbnQgaXRlbURldGFpbHMgb24gSXRlbSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHByaWNlXG4gICAgICBmdWxsUHJpY2VcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBpbWFnZSB7XG4gICAgICAgIGlkXG4gICAgICAgIHVybFxuICAgICAgICBzZWNyZXRcbiAgICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3F1ZXJpZXMvZnJhZ21lbnRzLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0cmlwZUNoZWNrb3V0IGZyb20gJ3JlYWN0LXN0cmlwZS1jaGVja291dCc7XG5pbXBvcnQgeyBDUkVBVEVfT1JERVJfTVVUQVRJT04sIENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4uL3F1ZXJpZXMnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cblxuY2xhc3MgVGFrZU15TW9uZXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvblRva2VuID0gYXN5bmMgKHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVzLmlkO1xuICAgIGNvbnN0IHVzZXJJZCA9IHRoaXMucHJvcHMuY3VycmVudFVzZXJRdWVyeS51c2VyLmlkO1xuICAgIGNvbnN0IGl0ZW1JZCA9IHRoaXMucHJvcHMuaWQ7XG4gICAgY29uc29sZS5sb2coYEdvaW5nIHRvIG1ha2UgYSBwdXJjaGFzZSB3aXRoICR7dG9rZW59YCk7XG4gICAgY29uc29sZS5sb2coYFRIZSBwZXJzb24gdGhhdCBib3VnaHQgdGhpcyB3YXMgJHt1c2VySWR9YClcbiAgICBjb25zb2xlLmxvZyhgVGhlIGl0ZW0gaWQgaXMgJHtpdGVtSWR9YClcbiAgICBjb25zdCBjaGFyZ2UgPSBhd2FpdCB0aGlzLnByb3BzLmNyZWF0ZU9yZGVyKHsgdmFyaWFibGVzOiB7IHRva2VuLCB1c2VySWQsIGl0ZW1JZCB9fSk7XG4gICAgYWxlcnQoYEJhY2sgZnJvbSB0aGUgY2hhcmdlISAke2NoYXJnZS5pZH1gKTtcbiAgICBjb25zb2xlLmxvZyhjaGFyZ2UpO1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLmN1cnJlbnRVc2VyUXVlcnkudXNlciB8fCB7fTtcbiAgICBjb25zdCBlbWFpbCA9IHVzZXIuZW1haWwgfHwgJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTdHJpcGVDaGVja291dFxuICAgICAgICAgIGFtb3VudD17dGhpcy5wcm9wcy5hbW91bnR9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHRva2VuPXt0aGlzLm9uVG9rZW59XG4gICAgICAgICAgc3RyaXBlS2V5PVwicGtfbGNsVHRUaEZwOENuTzNRdEVaU2Q4SEE5bUZVcHNcIlxuICAgICAgICAgIGN1cnJlbmN5PVwiVVNEXCJcbiAgICAgICAgICBlbWFpbD17ZW1haWx9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9TdHJpcGVDaGVja291dD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCB1c2VyRW5oYW5jZXIgPSBncmFwaHFsKENVUlJFTlRfVVNFUl9RVUVSWSwgeyBuYW1lOiAnY3VycmVudFVzZXJRdWVyeScgfSk7XG5jb25zdCBjcmVhdGVPcmRlckVuaGFuY2VyID0gZ3JhcGhxbChDUkVBVEVfT1JERVJfTVVUQVRJT04sIHsgbmFtZTogJ2NyZWF0ZU9yZGVyJyB9KTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UodXNlckVuaGFuY2VyLCBjcmVhdGVPcmRlckVuaGFuY2VyKShUYWtlTXlNb25leSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Rha2VNeU1vbmV5LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYW1vdW50KSB7XG4gIHJldHVybiAnJCcgKyAgKGFtb3VudCAvIDEwMCkudG9Mb2NhbGVTdHJpbmcoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9mb3JtYXRNb25leS5qcyIsIi8vIFRPRE86IFB1dCB0aGUgcHJvamVjdCBJRCBpbiBhIGNvbmZpZyBmaWxlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW1hZ2UsIHdpZHRoID0gMzAwLCBoZWlnaHQgPSAzMDApIHtcbiAgaWYoIWltYWdlIHx8ICFpbWFnZS5zZWNyZXQpIHJldHVybiAnJztcbiAgcmV0dXJuIGBodHRwczovL2ltYWdlcy5ncmFwaC5jb29sL3YxL2NqNXh6OHN6czI4OTMwMTQ1Z2N0ODJiZGovJHtpbWFnZS5zZWNyZXR9LyR7d2lkdGh9eCR7aGVpZ2h0fWA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW1hZ2UuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdyYXBocWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuLi9xdWVyaWVzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBUaGlzIGZldGNoZXMgdGhlIG5ldyBkYXRhLCBidXQgZG9lc24ndCBwb3B1bGF0ZSB0aGUgdXNlciB2aWEgcHJvcHNcbiAgICAvLyB0aGlzLnByb3BzLmN1cnJlbnRVc2VyUXVlcnkucmVmZXRjaCgpO1xuICAgIC8vIFRoaXMgZmV0Y2hlcyB0aGUgbmV3IGRhdGEsIGFuZCBwb3B1bGF0ZXMgdGhlIHVzZXIgdmlhIHByb3BzXG4gICAgc2V0VGltZW91dCh0aGlzLnByb3BzLmN1cnJlbnRVc2VyUXVlcnkucmVmZXRjaCwgMSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW50VXNlclF1ZXJ5LnVzZXIpO1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLmN1cnJlbnRVc2VyUXVlcnkudXNlciB8fCB7fTtcbiAgICBjb25zdCB7IGVtYWlsID0gJycgfSA9IHVzZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+e2VtYWlsfSBJJ20gdGhlIGhlYWRlciE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgdXNlckVuaGFuY2VyID0gZ3JhcGhxbChDVVJSRU5UX1VTRVJfUVVFUlksIHsgbmFtZTogJ2N1cnJlbnRVc2VyUXVlcnknIH0pO1xuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh1c2VyRW5oYW5jZXIpKEhlYWRlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxOYXYvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJodHRwczovL3dlc2Jvcy5jb20vd3AtY29udGVudC90aGVtZXMvd2IyMDE0L2kvY3Jvd24teWVsbG93LXNtYWxsLnBuZ1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cbiAgICAgIDx0aXRsZT5TaWNrIEZpdHM8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL01ldGEuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSXRlbXMgZnJvbSAnLi4vY29tcG9uZW50cy9JdGVtcyc7XG5pbXBvcnQgQ3JlYXRlSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZUl0ZW0nO1xuaW1wb3J0IENvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnQnO1xuaW1wb3J0IExvZ2luQXV0aDAgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkF1dGgwJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxMb2dpbkF1dGgwIC8+XG4gICAgICAgIDxDb3VudC8+XG4gICAgICAgIDxDcmVhdGVJdGVtIC8+XG4gICAgICAgIDxJdGVtcz48L0l0ZW1zPlxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBncmFwaHFsLCBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmltcG9ydCB7IEFMTF9JVEVNU19RVUVSWSB9IGZyb20gJy4uL3F1ZXJpZXMnO1xuXG5jbGFzcyBDb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gMVxuICAgIGlmICh0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkgJiYgdGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5LmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbiAgICB9XG5cbiAgICAvLyAyXG4gICAgaWYgKHRoaXMucHJvcHMuYWxsTGlua3NRdWVyeSAmJiB0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkuZXJyb3IpIHtcbiAgICAgIHJldHVybiA8ZGl2PkVycm9yPC9kaXY+XG4gICAgfVxuXG4gICAgLy8gM1xuICAgIGNvbnN0IGl0ZW1zVG9SZW5kZXIgPSB0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkuYWxsSXRlbXNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VGhlcmUgYXJlIHtpdGVtc1RvUmVuZGVyLmxlbmd0aH0gaXRlbXMgZm9yIHNhbGU8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuLy8gMVxuXG4vLyBXZSBleHBvcnQgdGhlIGdyYXBoUUwgSE9DIC0gdGhpcyB3aWxsIGZldGNoIHRoZSBkYXRhIGFuZCBpbmplY3QgaXQgaW50byB0aGUgQ291bnQgY29tcGVvbnQgdmlhIHByb3BzXG5cbmV4cG9ydCB7IEFMTF9JVEVNU19RVUVSWSB9XG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKEFMTF9JVEVNU19RVUVSWSwgeyBuYW1lOiAnYWxsTGlua3NRdWVyeScgfSkgKENvdW50KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db3VudC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBREE7QUFDQTtBQWFBO0FBQ0E7QUFhQTtBQUNBO0FBb0JBO0FBQ0E7QUFVQTtBQUNBO0FBUUE7QUFDQTtBQVNBO0FBQ0E7QUFjQTtBQUNBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBTUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFYQTtBQUNBO0FBVUE7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQURBO0FBWkE7QUFDQTtBQURBO0FBaUJBO0FBakJBO0FBQUE7QUFrQkE7QUFDQTtBQW5CQTtBQW9CQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUExQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUF0Q0E7QUFDQTs7O0FBMENBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUExQ0E7O0FBQUE7QUFpREE7QUFDQTtBQWxEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBc0RBO0FBdERBO0FBQ0E7QUFxREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUF6REE7QUFDQTs7QUFEQTtBQTREQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7QUE5REE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQU9BOzs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFEQTtBQURBO0FBSUE7QUFKQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFMQTtBQU9BO0FBUEE7QUFPQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7OztBQWhEQTtBQUNBO0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBOztBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFmQTtBQUZBO0FBQ0E7QUFnQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQU9BO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFGQTtBQVBBO0FBQUE7QUFXQTtBQUNBO0FBREE7QUFYQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQXlDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBUUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFGQTtBQUNBO0FBRkE7QUFSQTtBQUNBO0FBaUJBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBN0NBO0FBQ0E7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUF0REE7QUE2RUE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBWEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSkE7QUFLQTtBQUFBO0FBR0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQTVCQTtBQUNBO0FBc0NBO0FBQ0E7QUF0Q0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFEQTtBQUlBOzs7OztBQXFCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQU9BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBTEE7QUFEQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFkQTtBQUNBOztBQWVBO0FBQUE7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQVRBO0FBVUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUZBO0FBVkE7QUFDQTtBQWVBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBekJBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUF2Q0E7QUFDQTtBQTZEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBOzs7OztBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFhQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQVBBO0FBU0E7QUFUQTtBQUNBOzs7OztBQW5CQTtBQUNBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7OztBQWhCQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFuQkE7QUFDQTtBQXlCQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        