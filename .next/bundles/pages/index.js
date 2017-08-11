
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UPDATE_LINK_MUTATION = exports.DELETE_ITEM_MUTATION = exports.SINGLE_LINK_QUERY = exports.ALL_ITEMS_QUERY = exports.CREATE_ORDER_MUTATION = exports.CREATE_LINK_MUTATION = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(562);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _reactApollo = __webpack_require__(540);

var _fragments = __webpack_require__(647);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID) {\n    createItem(\n      description: $description,\n      title: $title,\n      imageId: $imageId\n    ) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  mutation CreateLinkMutation($description: String!, $title: String!, $imageId: ID) {\n    createItem(\n      description: $description,\n      title: $title,\n      imageId: $imageId\n    ) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  mutation CreateOrderMutation($token: String!) {\n    createOrder(token: $token) {\n      id,\n      token,\n      charge,\n      amount,\n    }\n  }\n'], ['\n  mutation CreateOrderMutation($token: String!) {\n    createOrder(token: $token) {\n      id,\n      token,\n      charge,\n      amount,\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  # Import the Fragment\n  ', '\n  query AllLinksQuery {\n    allItems(orderBy: createdAt_DESC) {\n      # Use that fragment by it\'s name (even though it the same as the variable)\n      ...itemDetails\n    }\n  }\n'], ['\n  # Import the Fragment\n  ', '\n  query AllLinksQuery {\n    allItems(orderBy: createdAt_DESC) {\n      # Use that fragment by it\'s name (even though it the same as the variable)\n      ...itemDetails\n    }\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  query FindItem($id: ID!) {\n    Item(id: $id) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  query FindItem($id: ID!) {\n    Item(id: $id) {\n      ...itemDetails\n    }\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  mutation DelteItem($id: ID!) {\n    deleteItem(id: $id) {\n      id,\n      title,\n      description\n    }\n  }\n'], ['\n  mutation DelteItem($id: ID!) {\n    deleteItem(id: $id) {\n      id,\n      title,\n      description\n    }\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {\n    updateItem(\n      id: $id,\n      description: $description,\n      title: $title,\n      price: $price,\n      fullPrice: $fullPrice\n    ) {\n      ...itemDetails\n    }\n  }\n'], ['\n  ', '\n  mutation UpdateItem($id: ID!, $title: String!, $description: String!, $price: Int!, $fullPrice: Int!) {\n    updateItem(\n      id: $id,\n      description: $description,\n      title: $title,\n      price: $price,\n      fullPrice: $fullPrice\n    ) {\n      ...itemDetails\n    }\n  }\n']);

var CREATE_LINK_MUTATION = exports.CREATE_LINK_MUTATION = (0, _reactApollo.gql)(_templateObject, _fragments.itemDetails);

var CREATE_ORDER_MUTATION = exports.CREATE_ORDER_MUTATION = (0, _reactApollo.gql)(_templateObject2);

var ALL_ITEMS_QUERY = exports.ALL_ITEMS_QUERY = (0, _reactApollo.gql)(_templateObject3, _fragments.itemDetails);

var SINGLE_LINK_QUERY = exports.SINGLE_LINK_QUERY = (0, _reactApollo.gql)(_templateObject4, _fragments.itemDetails);

var DELETE_ITEM_MUTATION = exports.DELETE_ITEM_MUTATION = (0, _reactApollo.gql)(_templateObject5);

var UPDATE_LINK_MUTATION = exports.UPDATE_LINK_MUTATION = (0, _reactApollo.gql)(_templateObject6, _fragments.itemDetails);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/queries/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/queries/index.js"); } } })();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(592);


/***/ }),

/***/ 592:
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

var _withData = __webpack_require__(593);

var _withData2 = _interopRequireDefault(_withData);

var _Items = __webpack_require__(638);

var _Items2 = _interopRequireDefault(_Items);

var _CreateItem = __webpack_require__(669);

var _CreateItem2 = _interopRequireDefault(_CreateItem);

var _Count = __webpack_require__(670);

var _Count2 = _interopRequireDefault(_Count);

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
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_Count2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement(_CreateItem2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement(_Items2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _withData2.default)(Home);

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

/***/ 593:
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

var _reactApollo = __webpack_require__(540);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _initApollo = __webpack_require__(636);

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

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(540);

var _isomorphicFetch = __webpack_require__(637);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create(initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: 'https://api.graph.cool/simple/v1/cj5xz8szs28930145gct82bdj', // Server URL (must be absolute)
      opts: { // Additional fetch() options like `credentials` or `headers`
        credentials: 'same-origin'
      }
    })
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

/***/ 638:
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

var _taggedTemplateLiteral2 = __webpack_require__(562);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(540);

var _UpdateItem = __webpack_require__(645);

var _UpdateItem2 = _interopRequireDefault(_UpdateItem);

var _link = __webpack_require__(648);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(660);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TakeMyMoney = __webpack_require__(666);

var _TakeMyMoney2 = _interopRequireDefault(_TakeMyMoney);

var _formatMoney = __webpack_require__(668);

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _queries = __webpack_require__(549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wesbos/Sites/advanced-react/examples/next/components/Items.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 50px;\n'], ['\n  font-size: 50px;\n']);

var Title = _styledComponents2.default.h1(_templateObject);

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
            lineNumber: 21
          }
        }, 'Loading');
      }

      // 2
      if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
        console.log(this.props.allLinksQuery.error);
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, 'Error');
      }

      // 3
      var itemsToRender = this.props.allLinksQuery.allItems;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Items For Sale'), itemsToRender.map(function (item, i) {
        return _react2.default.createElement('div', { className: 'item', key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }), item.image ? _react2.default.createElement('img', { src: 'https://images.graph.cool/v1/cj5xz8szs28930145gct82bdj/' + item.image.secret + '/300x300', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }) : null, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, item.title), _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, item.description), _react2.default.createElement(_link2.default, { href: {
            pathname: '/admin/update',
            query: { id: item.id }
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, 'Edit ', item.id)), _react2.default.createElement(_TakeMyMoney2.default, {
          amount: item.price,
          name: item.title // the pop-in header title
          , description: item.description // the pop-in header subtitle
          , image: 'https://images.graph.cool/v1/cj5xz8szs28930145gct82bdj/' + item.image.secret + '/300x300',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement('button', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, 'Buy for ', (0, _formatMoney2.default)(item.price))), _react2.default.createElement(_UpdateItem2.default, { id: item.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }), _react2.default.createElement('button', { onClick: function onClick() {
            return _this2.props.removeItemMutation({ variables: { id: item.id } });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
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

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(75);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(76);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(646);

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

var _reactApollo = __webpack_require__(540);

var _queries = __webpack_require__(549);

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

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemDetails = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(562);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _reactApollo = __webpack_require__(540);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  fragment itemDetails on Item {\n      id\n      title\n      price\n      fullPrice\n      description\n      image {\n        id\n        url\n        secret\n      }\n  }\n'], ['\n  fragment itemDetails on Item {\n      id\n      title\n      price\n      fullPrice\n      description\n      image {\n        id\n        url\n        secret\n      }\n  }\n']);

var itemDetails = exports.itemDetails = (0, _reactApollo.gql)(_templateObject);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/queries/fragments.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/queries/fragments.js"); } } })();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactStripeCheckout = __webpack_require__(667);

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

var _queries = __webpack_require__(549);

var _reactApollo = __webpack_require__(540);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/components/TakeMyMoney.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/components/TakeMyMoney.js"); } } })();

/***/ }),

/***/ 668:
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

/***/ 669:
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

var _reactApollo = __webpack_require__(540);

var _queries = __webpack_require__(549);

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
        var _this$state, description, title, image, res;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                // pull the values from state
                _this$state = _this.state, description = _this$state.description, title = _this$state.title, image = _this$state.image;
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
          lineNumber: 36
        }
      }, this.state.loading ? 'LOADING...' : 'Ready!', _react2.default.createElement('form', { onSubmit: this._createLink, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Image', _react2.default.createElement('input', { onChange: this.uploadFile, type: 'file', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Title', _react2.default.createElement('input', { value: this.state.title, onChange: function onChange(e) {
          return _this3.setState({ title: e.target.value });
        }, type: 'text', placeholder: 'A description for the link', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
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
          lineNumber: 46
        }
      }), _react2.default.createElement('button', { type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
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

/***/ 670:
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

var _reactApollo = __webpack_require__(540);

var _queries = __webpack_require__(549);

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

},[591]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3F1ZXJpZXMvaW5kZXguanM/MzU0MjA4YSIsIndlYnBhY2s6Ly8vLi9wYWdlcz8zNTQyMDhhIiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz8zNTQyMDhhIiwid2VicGFjazovLy8uL2xpYi9pbml0QXBvbGxvLmpzPzM1NDIwOGEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtcy5qcz8zNTQyMDhhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXBkYXRlSXRlbS5qcz8zNTQyMDhhIiwid2VicGFjazovLy8uL3F1ZXJpZXMvZnJhZ21lbnRzLmpzPzM1NDIwOGEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWtlTXlNb25leS5qcz8zNTQyMDhhIiwid2VicGFjazovLy8uL2xpYi9mb3JtYXRNb25leS5qcz8zNTQyMDhhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlSXRlbS5qcz8zNTQyMDhhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnQuanM/MzU0MjA4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBpdGVtRGV0YWlscyB9IGZyb20gJy4vZnJhZ21lbnRzJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9MSU5LX01VVEFUSU9OID0gZ3FsYFxuICAke2l0ZW1EZXRhaWxzfVxuICBtdXRhdGlvbiBDcmVhdGVMaW5rTXV0YXRpb24oJGRlc2NyaXB0aW9uOiBTdHJpbmchLCAkdGl0bGU6IFN0cmluZyEsICRpbWFnZUlkOiBJRCkge1xuICAgIGNyZWF0ZUl0ZW0oXG4gICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLFxuICAgICAgdGl0bGU6ICR0aXRsZSxcbiAgICAgIGltYWdlSWQ6ICRpbWFnZUlkXG4gICAgKSB7XG4gICAgICAuLi5pdGVtRGV0YWlsc1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ1JFQVRFX09SREVSX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBDcmVhdGVPcmRlck11dGF0aW9uKCR0b2tlbjogU3RyaW5nISkge1xuICAgIGNyZWF0ZU9yZGVyKHRva2VuOiAkdG9rZW4pIHtcbiAgICAgIGlkLFxuICAgICAgdG9rZW4sXG4gICAgICBjaGFyZ2UsXG4gICAgICBhbW91bnQsXG4gICAgfVxuICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBBTExfSVRFTVNfUVVFUlkgPSBncWxgXG4gICMgSW1wb3J0IHRoZSBGcmFnbWVudFxuICAke2l0ZW1EZXRhaWxzfVxuICBxdWVyeSBBbGxMaW5rc1F1ZXJ5IHtcbiAgICBhbGxJdGVtcyhvcmRlckJ5OiBjcmVhdGVkQXRfREVTQykge1xuICAgICAgIyBVc2UgdGhhdCBmcmFnbWVudCBieSBpdCdzIG5hbWUgKGV2ZW4gdGhvdWdoIGl0IHRoZSBzYW1lIGFzIHRoZSB2YXJpYWJsZSlcbiAgICAgIC4uLml0ZW1EZXRhaWxzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfTElOS19RVUVSWSA9IGdxbGBcbiAgJHtpdGVtRGV0YWlsc31cbiAgcXVlcnkgRmluZEl0ZW0oJGlkOiBJRCEpIHtcbiAgICBJdGVtKGlkOiAkaWQpIHtcbiAgICAgIC4uLml0ZW1EZXRhaWxzXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0lURU1fTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIERlbHRlSXRlbSgkaWQ6IElEISkge1xuICAgIGRlbGV0ZUl0ZW0oaWQ6ICRpZCkge1xuICAgICAgaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBVUERBVEVfTElOS19NVVRBVElPTiA9IGdxbGBcbiAgJHtpdGVtRGV0YWlsc31cbiAgbXV0YXRpb24gVXBkYXRlSXRlbSgkaWQ6IElEISwgJHRpdGxlOiBTdHJpbmchLCAkZGVzY3JpcHRpb246IFN0cmluZyEsICRwcmljZTogSW50ISwgJGZ1bGxQcmljZTogSW50ISkge1xuICAgIHVwZGF0ZUl0ZW0oXG4gICAgICBpZDogJGlkLFxuICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbixcbiAgICAgIHRpdGxlOiAkdGl0bGUsXG4gICAgICBwcmljZTogJHByaWNlLFxuICAgICAgZnVsbFByaWNlOiAkZnVsbFByaWNlXG4gICAgKSB7XG4gICAgICAuLi5pdGVtRGV0YWlsc1xuICAgIH1cbiAgfVxuYFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcXVlcmllcy9pbmRleC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xuaW1wb3J0IEl0ZW1zIGZyb20gJy4uL2NvbXBvbmVudHMvSXRlbXMnO1xuaW1wb3J0IENyZWF0ZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVJdGVtJztcbmltcG9ydCBDb3VudCBmcm9tICcuLi9jb21wb25lbnRzL0NvdW50JztcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvdW50Lz5cbiAgICAgICAgPENyZWF0ZUl0ZW0gLz5cbiAgICAgICAgPEl0ZW1zPjwvSXRlbXM+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoSG9tZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgaW5pdEFwb2xsbyBmcm9tICcuL2luaXRBcG9sbG8nXG5cbi8vIEdldHMgdGhlIGRpc3BsYXkgbmFtZSBvZiBhIEpTWCBjb21wb25lbnQgZm9yIGRldiB0b29sc1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUgKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gIHJldHVybiBjbGFzcyBXaXRoRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gYFdpdGhEYXRhKCR7Z2V0Q29tcG9uZW50RGlzcGxheU5hbWUoQ29tcG9zZWRDb21wb25lbnQpfSlgXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHNlcnZlclN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGxldCBzZXJ2ZXJTdGF0ZSA9IHt9XG5cbiAgICAgIC8vIEV2YWx1YXRlIHRoZSBjb21wb3NlZCBjb21wb25lbnQncyBnZXRJbml0aWFsUHJvcHMoKVxuICAgICAgbGV0IGNvbXBvc2VkSW5pdGlhbFByb3BzID0ge31cbiAgICAgIGlmIChDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgY29tcG9zZWRJbml0aWFsUHJvcHMgPSBhd2FpdCBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgfVxuXG4gICAgICAvLyBSdW4gYWxsIEdyYXBoUUwgcXVlcmllcyBpbiB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgIC8vIGFuZCBleHRyYWN0IHRoZSByZXN1bHRpbmcgZGF0YVxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgYXBvbGxvID0gaW5pdEFwb2xsbygpXG4gICAgICAgIC8vIFByb3ZpZGUgdGhlIGB1cmxgIHByb3AgZGF0YSBpbiBjYXNlIGEgR3JhcGhRTCBxdWVyeSB1c2VzIGl0XG4gICAgICAgIGNvbnN0IHVybCA9IHtxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXG4gICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cbiAgICAgICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHVybD17dXJsfSB7Li4uY29tcG9zZWRJbml0aWFsUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IEFwb2xsbyBDbGllbnQgR3JhcGhRTCBlcnJvcnMgZnJvbSBjcmFzaGluZyBTU1IuXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAvLyBodHRwOi8vZGV2LmFwb2xsb2RhdGEuY29tL3JlYWN0L2FwaS1xdWVyaWVzLmh0bWwjZ3JhcGhxbC1xdWVyeS1kYXRhLWVycm9yXG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0RGF0YUZyb21UcmVlIGRvZXMgbm90IGNhbGwgY29tcG9uZW50V2lsbFVubW91bnRcbiAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XG4gICAgICAgIEhlYWQucmV3aW5kKClcblxuICAgICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgQXBvbGxvIHN0b3JlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gYXBvbGxvLmdldEluaXRpYWxTdGF0ZSgpXG5cbiAgICAgICAgc2VydmVyU3RhdGUgPSB7XG4gICAgICAgICAgYXBvbGxvOiB7XG4gICAgICAgICAgICAvLyBPbmx5IGluY2x1ZGUgdGhlIEFwb2xsbyBkYXRhIHN0YXRlXG4gICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlcnZlclN0YXRlLFxuICAgICAgICAuLi5jb21wb3NlZEluaXRpYWxQcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLmFwb2xsbyA9IGluaXRBcG9sbG8odGhpcy5wcm9wcy5zZXJ2ZXJTdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17dGhpcy5hcG9sbG99PlxuICAgICAgICAgIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi93aXRoRGF0YS5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5sZXQgYXBvbGxvQ2xpZW50ID0gbnVsbFxuXG4vLyBQb2x5ZmlsbCBmZXRjaCgpIG9uIHRoZSBzZXJ2ZXIgKHVzZWQgYnkgYXBvbGxvLWNsaWVudClcbmlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSAoaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlciwgLy8gRGlzYWJsZXMgZm9yY2VGZXRjaCBvbiB0aGUgc2VydmVyIChzbyBxdWVyaWVzIGFyZSBvbmx5IHJ1biBvbmNlKVxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9zaW1wbGUvdjEvY2o1eHo4c3pzMjg5MzAxNDVnY3Q4MmJkaicsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICBvcHRzOiB7IC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXBvbGxvIChpbml0aWFsU3RhdGUpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShpbml0aWFsU3RhdGUpXG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0QXBvbGxvLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBVcGRhdGVJdGVtIGZyb20gJy4vVXBkYXRlSXRlbSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgVGFrZU15TW9uZXkgZnJvbSAnLi9UYWtlTXlNb25leSc7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcblxuaW1wb3J0IHsgQUxMX0lURU1TX1FVRVJZLCBERUxFVEVfSVRFTV9NVVRBVElPTiB9IGZyb20gJy4uL3F1ZXJpZXMnO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA1MHB4O1xuYDtcblxuY2xhc3MgSXRlbUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIC8vIDFcbiAgICBpZiAodGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5ICYmIHRoaXMucHJvcHMuYWxsTGlua3NRdWVyeS5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgfVxuXG4gICAgLy8gMlxuICAgIGlmICh0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkgJiYgdGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5LmVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkuZXJyb3IpXG4gICAgICByZXR1cm4gPGRpdj5FcnJvcjwvZGl2PlxuICAgIH1cblxuICAgIC8vIDNcbiAgICBjb25zdCBpdGVtc1RvUmVuZGVyID0gdGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5LmFsbEl0ZW1zXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRpdGxlPkl0ZW1zIEZvciBTYWxlPC9UaXRsZT5cbiAgICAgICAge2l0ZW1zVG9SZW5kZXIubWFwKChpdGVtLGkpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBrZXk9e2l9PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIHsgaXRlbS5pbWFnZSA/ICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2VzLmdyYXBoLmNvb2wvdjEvY2o1eHo4c3pzMjg5MzAxNDVnY3Q4MmJkai8ke2l0ZW0uaW1hZ2Uuc2VjcmV0fS8zMDB4MzAwYH0gLz4gOiBudWxsIH1cbiAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17e1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9hZG1pbi91cGRhdGUnLFxuICAgICAgICAgICAgICBxdWVyeTogeyBpZDogaXRlbS5pZCB9XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGE+RWRpdCB7aXRlbS5pZH08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxUYWtlTXlNb25leVxuICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgIG5hbWU9e2l0ZW0udGl0bGV9IC8vIHRoZSBwb3AtaW4gaGVhZGVyIHRpdGxlXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufSAvLyB0aGUgcG9wLWluIGhlYWRlciBzdWJ0aXRsZVxuICAgICAgICAgICAgICBpbWFnZT17YGh0dHBzOi8vaW1hZ2VzLmdyYXBoLmNvb2wvdjEvY2o1eHo4c3pzMjg5MzAxNDVnY3Q4MmJkai8ke2l0ZW0uaW1hZ2Uuc2VjcmV0fS8zMDB4MzAwYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5CdXkgZm9yIHtmb3JtYXRNb25leShpdGVtLnByaWNlKX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvVGFrZU15TW9uZXk+XG5cbiAgICAgICAgICAgIDxVcGRhdGVJdGVtIGlkPXtpdGVtLmlkfSAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucmVtb3ZlSXRlbU11dGF0aW9uKHsgdmFyaWFibGVzOiB7IGlkOiBpdGVtLmlkIH19KX0+JnRpbWVzOyBEZWxldGUgaXRlbTwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuLy8gMVxuXG4vLyBXZSBleHBvcnQgdGhlIGdyYXBoUUwgSE9DIC0gdGhpcyB3aWxsIGZldGNoIHRoZSBkYXRhIGFuZCBpbmplY3QgaXQgaW50byB0aGUgSXRlbUxpc3QgY29tcGVvbnQgdmlhIHByb3BzXG5cbi8vIENyZWF0ZSBzb21lIEVuaGFuY2Vyc1xuY29uc3QgaXRlbXNFbmFobmNlciA9IGdyYXBocWwoQUxMX0lURU1TX1FVRVJZLCB7IG5hbWU6ICdhbGxMaW5rc1F1ZXJ5JyB9KTtcbmNvbnN0IGRlbGV0ZUl0ZW1FbmhhbmNlciA9IGdyYXBocWwoREVMRVRFX0lURU1fTVVUQVRJT04sIHtcbiAgbmFtZTogJ3JlbW92ZUl0ZW1NdXRhdGlvbicsXG4gIG9wdGlvbnM6IHtcbiAgICB1cGRhdGU6IChwcm94eSwgeyBkYXRhOiB7IGRlbGV0ZUl0ZW0gfSB9KSA9PiB7XG5cbiAgICAgIC8vIGdyYWIgdGhlIGRhdGEgZnJvbSBvdXIgY2FjaGVcbiAgICAgIGNvbnN0IGRhdGEgPSBwcm94eS5yZWFkUXVlcnkoeyBxdWVyeTogQUxMX0lURU1TX1FVRVJZIH0pO1xuXG4gICAgICAvLyBmaWx0ZXIgb3V0IHRoZSBkZWx0ZWQgaXRlbVxuICAgICAgZGF0YS5hbGxJdGVtcyA9IGRhdGEuYWxsSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gZGVsZXRlSXRlbS5pZCk7XG5cbiAgICAgIC8vIGFuZCB0aGVuIFwic2V0IHN0YXRlXCIgKHVwZGF0ZSBjYWNoZSksIHNvIGl0IHdpbGwgdXBkYXRlIHdoZXJlZXZlciB3ZSBoYXZlIHVzZWQgdGhpcyBkYXRhIG9uIHRoZSBwYWdlXG4gICAgICBwcm94eS53cml0ZVF1ZXJ5KHsgcXVlcnk6IEFMTF9JVEVNU19RVUVSWSwgZGF0YSB9KTtcblxuICAgIH0sXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKGl0ZW1zRW5haG5jZXIsIGRlbGV0ZUl0ZW1FbmhhbmNlcikoSXRlbUxpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0l0ZW1zLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgU0lOR0xFX0xJTktfUVVFUlksIFVQREFURV9MSU5LX01VVEFUSU9OIH0gZnJvbSAnLi4vcXVlcmllcyc7XG5cbmNsYXNzIFVwZGF0ZUxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIC4uLnRoaXMucHJvcHMuZmluZEl0ZW0uSXRlbSxcbiAgfVxuXG4gIHNhdmVUb1N0YXRlID0gKGUpID0+IHtcbiAgICBsZXQgeyBuYW1lLCB2YWx1ZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICA8aDI+RWRpdCB7dGhpcy5wcm9wcy5pZH08L2gyPlxuICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/ICdMT0FESU5HLi4uJyA6ICdSZWFkeSEnIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2NyZWF0ZUxpbmt9PlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG5hbWU9XCJ0aXRsZVwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfSB0eXBlPSd0ZXh0Jy8+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9PjwvdGV4dGFyZWE+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+UHJpY2U8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9IHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlfSAvPlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdWxsUHJpY2VcIj5GdWxsIFByaWNlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmdWxsUHJpY2VcIiBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX0gdmFsdWU9e3RoaXMuc3RhdGUuZnVsbFByaWNlfSAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZS4uLjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfY3JlYXRlTGluayA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHB1bGwgdGhlIHZhbHVlcyBmcm9tIHN0YXRlXG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgdGl0bGUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNyZWF0ZSBhIG11dGF0aW9uXG4gICAgLy8gVE9ETzogaGFuZGxlIGFueSBlcnJvcnNcbiAgICAvLyB0dXJuIGxvYWRpbmcgb25cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnByb3BzLnVwZGF0ZUl0ZW0oe1xuICAgICAgLy8gcGFzcyBpbiB0aG9zZSB2YXJpYWJsZXMgZnJvbSBzdGF0ZVxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGVcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH1cblxufVxuXG5jb25zdCBDb21wb25lbnRXaXRoTXV0YXRpb25zID0gY29tcG9zZShcbiAgLy8gRmlyc3QsIHF1ZXJ5IGZvciBnZXR0aW5nIHRoZSBsaW5rXG4gIGdyYXBocWwoU0lOR0xFX0xJTktfUVVFUlksIHtcbiAgICBuYW1lOiAnZmluZEl0ZW0nLFxuICAgIG9wdGlvbnM6ICh7IGlkIH0pID0+ICh7XG4gICAgICB2YXJpYWJsZXM6IHsgaWQgfVxuICAgIH0pXG4gIH0pLFxuICAvLyBTZWNvbmQsIHRoZSBtdXRhdGlvbiBmb3IgdXBkYXRpbmcgdGhlIGxpbmtcbiAgZ3JhcGhxbChVUERBVEVfTElOS19NVVRBVElPTiwgeyBuYW1lOiAndXBkYXRlSXRlbScgfSlcbikoVXBkYXRlTGluayk7XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50V2l0aE11dGF0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVXBkYXRlSXRlbS5qcyIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmV4cG9ydCBjb25zdCBpdGVtRGV0YWlscyA9IGdxbGBcbiAgZnJhZ21lbnQgaXRlbURldGFpbHMgb24gSXRlbSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHByaWNlXG4gICAgICBmdWxsUHJpY2VcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBpbWFnZSB7XG4gICAgICAgIGlkXG4gICAgICAgIHVybFxuICAgICAgICBzZWNyZXRcbiAgICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3F1ZXJpZXMvZnJhZ21lbnRzLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0cmlwZUNoZWNrb3V0IGZyb20gJ3JlYWN0LXN0cmlwZS1jaGVja291dCc7XG5pbXBvcnQgeyBDUkVBVEVfT1JERVJfTVVUQVRJT04gfSBmcm9tICcuLi9xdWVyaWVzJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5cbmNsYXNzIFRha2VNeU1vbmV5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgb25Ub2tlbiA9IGFzeW5jIChyZXMpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHJlcy5pZDtcbiAgICBjb25zb2xlLmxvZyhgR29pbmcgdG8gbWFrZSBhIHB1cmNoYXNlIHdpdGggJHt0b2tlbn1gKTtcbiAgICBjb25zdCBjaGFyZ2UgPSBhd2FpdCB0aGlzLnByb3BzLmNyZWF0ZU9yZGVyKHsgdmFyaWFibGVzOiB7IHRva2VuIH19KTtcbiAgICBhbGVydChgQmFjayBmcm9tIHRoZSBjaGFyZ2UhICR7Y2hhcmdlLmlkfWApO1xuICAgIGNvbnNvbGUubG9nKGNoYXJnZSk7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIC4uLlxuICAgICAgPFN0cmlwZUNoZWNrb3V0XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICB0b2tlbj17dGhpcy5vblRva2VufVxuICAgICAgICBzdHJpcGVLZXk9XCJwa19sY2xUdFRoRnA4Q25PM1F0RVpTZDhIQTltRlVwc1wiXG4gICAgICAgIGN1cnJlbmN5PVwiVVNEXCJcbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1N0cmlwZUNoZWNrb3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKENSRUFURV9PUkRFUl9NVVRBVElPTiwgeyBuYW1lOiAnY3JlYXRlT3JkZXInIH0pKFRha2VNeU1vbmV5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvVGFrZU15TW9uZXkuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhbW91bnQpIHtcbiAgcmV0dXJuICckJyArICAoYW1vdW50IC8gMTAwKS50b0xvY2FsZVN0cmluZygpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2Zvcm1hdE1vbmV5LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgQUxMX0lURU1TX1FVRVJZLCBDUkVBVEVfTElOS19NVVRBVElPTiB9IGZyb20gJy4uL3F1ZXJpZXMnO1xuXG5jbGFzcyBDcmVhdGVMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGltYWdlOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMpO1xuICB9XG5cbiAgdXBsb2FkRmlsZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgZmlsZXMgPSBlLmN1cnJlbnRUYXJnZXQuZmlsZXM7XG5cbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGRhdGEuYXBwZW5kKCdkYXRhJywgZmlsZXNbMF0pO1xuXG4gICAgLy8gdXNlIHRoZSBmaWxlIGVuZHBvaW50XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdyYXBoLmNvb2wvZmlsZS92MS9jajV4ejhzenMyODkzMDE0NWdjdDgyYmRqJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSk7XG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBmaWxlLmlkIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/ICdMT0FESU5HLi4uJyA6ICdSZWFkeSEnIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2NyZWF0ZUxpbmt9PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSW1hZ2VcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy51cGxvYWRGaWxlfSB0eXBlPSdmaWxlJy8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlRpdGxlXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KX0gdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0EgZGVzY3JpcHRpb24gZm9yIHRoZSBsaW5rJy8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RoZSBkZXNjIGZvciB0aGlzIGl0ZW0nXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9jcmVhdGVMaW5rID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcHVsbCB0aGUgdmFsdWVzIGZyb20gc3RhdGVcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCB0aXRsZSwgaW1hZ2UgfSA9IHRoaXMuc3RhdGVcbiAgICAvLyBjcmVhdGUgYSBtdXRhdGlvblxuICAgIC8vIFRPRE86IGhhbmRsZSBhbnkgZXJyb3JzXG4gICAgLy8gdHVybiBsb2FkaW5nIG9uXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5wcm9wcy5jcmVhdGVMaW5rTXV0YXRpb24oe1xuICAgICAgLy8gcGFzcyBpbiB0aG9zZSB2YXJpYWJsZXMgZnJvbSBzdGF0ZVxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgaW1hZ2VJZDogaW1hZ2VcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH1cbn1cbi8vIFdoZW4gd2Ugc3VibWl0IHRoaXMgbXV0YXRpb24sIHdlIG5lZWQgdG8gdXBkYXRlIG91ciBzdG9yZSAtIHdlIGhhdmUgYSBmZXcgd2F5cyB0byBkbyB0aGF0OlxuLy8gT25lIC0gd2UgY2FuIGdvIG51Y3VsYXIgYW5kIHJ1biByZWZldGNoUXVlcmllcygpIHdoaWNoIHdpbGwganVzdCBnbyBnZXQgZXZlcnl0aGluZyAtIHRoaXMgaXMgZWFzeSwgYnV0IGF0IHRoZSBjb3N0IG9mIGVmZmljaWVuY3kuXG5cblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChDUkVBVEVfTElOS19NVVRBVElPTiwgeyBuYW1lOiAnY3JlYXRlTGlua011dGF0aW9uJywgb3B0aW9uczoge1xuICAgIC8vIEVhc3ksIGJ1dCBzbG93XG4gICAgLy8gcmVmZXRjaFF1ZXJpZXM6IFsnQWxsTGlua3NRdWVyeSddXG4gICAgLy8gVGhpcyBpcyBtdWNoIEJldHRlciAvIGVmZmljaWVudFxuICAgIC8vIE5vdGljZSBob3cgdGhlIHZhcmlhYmxlIGlzIGNhbGxlZCBjcmVhdGVJdGVtIC0gdGhhdCBpcyBiZWNhdXNlIGNyZWF0ZUl0ZW0gaXMgdGhlIG5hbWUgb2YgdGhlIHF1ZXJ5IVxuICAgIHVwZGF0ZTogKHByb3h5LCB7IGRhdGE6IHsgY3JlYXRlSXRlbSB9IH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHtjcmVhdGVJdGVtLCBBTExfSVRFTVNfUVVFUll9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBwcm94eS5yZWFkUXVlcnkoeyBxdWVyeTogQUxMX0lURU1TX1FVRVJZIH0pO1xuICAgICAgLy8gZGF0YSBpcyBvdXIgc3RvcmUsIGFsbEl0ZW1zIGlzIG91ciBzdWItXCJzdGF0ZVwiLCBpdCdzIGp1c3QgYW4gYXJyYXkuIFdlIGNhbiBqdXN0IGFkZCBpdCB0b1xuICAgICAgZGF0YS5hbGxJdGVtcy51bnNoaWZ0KGNyZWF0ZUl0ZW0pO1xuICAgICAgLy8gYW5kIHRoZW4gXCJzZXQgc3RhdGVcIiwgc28gaXQgd2lsbCB1cGRhdGUgb24gdGhlIHBhZ2UuIFRoaXMgd2lsbCB1cGRhdGUgdGhlIGNhY2hlIGZvciB1cyFcbiAgICAgIHByb3h5LndyaXRlUXVlcnkoeyBxdWVyeTogQUxMX0lURU1TX1FVRVJZLCBkYXRhIH0pO1xuICAgIH0sXG4gIH0gfSkoQ3JlYXRlTGluaylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ3JlYXRlSXRlbS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdyYXBocWwsIGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuaW1wb3J0IHsgQUxMX0lURU1TX1FVRVJZIH0gZnJvbSAnLi4vcXVlcmllcyc7XG5cbmNsYXNzIENvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICAvLyAxXG4gICAgaWYgKHRoaXMucHJvcHMuYWxsTGlua3NRdWVyeSAmJiB0aGlzLnByb3BzLmFsbExpbmtzUXVlcnkubG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxuICAgIH1cblxuICAgIC8vIDJcbiAgICBpZiAodGhpcy5wcm9wcy5hbGxMaW5rc1F1ZXJ5ICYmIHRoaXMucHJvcHMuYWxsTGlua3NRdWVyeS5lcnJvcikge1xuICAgICAgcmV0dXJuIDxkaXY+RXJyb3I8L2Rpdj5cbiAgICB9XG5cbiAgICAvLyAzXG4gICAgY29uc3QgaXRlbXNUb1JlbmRlciA9IHRoaXMucHJvcHMuYWxsTGlua3NRdWVyeS5hbGxJdGVtc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5UaGVyZSBhcmUge2l0ZW1zVG9SZW5kZXIubGVuZ3RofSBpdGVtcyBmb3Igc2FsZTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG4vLyAxXG5cbi8vIFdlIGV4cG9ydCB0aGUgZ3JhcGhRTCBIT0MgLSB0aGlzIHdpbGwgZmV0Y2ggdGhlIGRhdGEgYW5kIGluamVjdCBpdCBpbnRvIHRoZSBDb3VudCBjb21wZW9udCB2aWEgcHJvcHNcblxuZXhwb3J0IHsgQUxMX0lURU1TX1FVRVJZIH1cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoQUxMX0lURU1TX1FVRVJZLCB7IG5hbWU6ICdhbGxMaW5rc1F1ZXJ5JyB9KSAoQ291bnQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvdW50LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBWUE7QUFDQTtBQVdBO0FBQ0E7QUFVQTtBQUNBO0FBUUE7QUFDQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFNQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQVhBO0FBQ0E7QUFVQTtBQVhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQUNBO0FBREE7QUFaQTtBQUNBO0FBREE7QUFpQkE7QUFqQkE7QUFBQTtBQWtCQTtBQUNBO0FBbkJBO0FBb0JBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQXRDQTtBQUNBOzs7QUEwQ0E7QUFBQTtBQURBO0FBREE7QUFDQTtBQTFDQTs7QUFBQTtBQWlEQTtBQUNBO0FBbERBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFzREE7QUF0REE7QUFDQTtBQXFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQXpEQTtBQUNBOztBQURBO0FBNERBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTtBQTlEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7O0FBR0E7QUFBQTs7QUFFQTtBQUVBO0FBSUE7QUFMQTtBQURBO0FBSEE7QUFXQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBREE7QUFEQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUdBOztBQUpBO0FBTUE7QUFOQTtBQU1BOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7QUFuREE7QUFDQTtBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBZkE7QUFGQTtBQUNBO0FBZ0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBVEE7QUFVQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBRkE7QUFWQTtBQUNBO0FBZUE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUF6QkE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQXZDQTtBQUNBO0FBNkRBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7Ozs7O0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQUE7O0FBSkE7QUFNQTtBQU5BO0FBRUE7Ozs7OztBQVVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQU9BO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFGQTtBQVBBO0FBQUE7QUFXQTtBQUNBO0FBREE7QUFYQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7OztBQXdDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBUUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUZBO0FBQ0E7QUFGQTtBQVJBO0FBQ0E7QUFlQTtBQUNBO0FBakJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQTVDQTtBQUNBOzs7O0FBbUJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBbkRBO0FBd0VBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQVhBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFuQkE7QUFDQTtBQXlCQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        