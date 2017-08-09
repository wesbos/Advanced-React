
          window.__NEXT_REGISTER_PAGE('/buy', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

var _withData = __webpack_require__(600);

var _withData2 = _interopRequireDefault(_withData);

var _reactStripeCheckout = __webpack_require__(669);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wesbos/Sites/advanced-react/examples/next/pages/buy.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wesbos/Sites/advanced-react/examples/next/pages/buy.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/buy")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 600:
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

var _initApollo = __webpack_require__(643);

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

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(540);

var _isomorphicFetch = __webpack_require__(644);

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

/***/ })

},[591]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9idXkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9idXkuanM/NDY2M2I3NSIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/NDY2M2I3NSIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdEFwb2xsby5qcz80NjYzYjc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xuaW1wb3J0IFN0cmlwZUNoZWNrb3V0IGZyb20gJ3JlYWN0LXN0cmlwZS1jaGVja291dCc7XG5cbmNsYXNzIFRha2VNb25leSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG9uVG9rZW4gPSBhc3luYyAodG9rZW4pID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgLy8gbm93IHRoYXQgd2UgaGF2ZSB0aGUgdG9rZW4sIGNyZWF0ZSBhbiBcIm9yZGVyXCJcblxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvc2F2ZS1zdHJpcGUtdG9rZW4nLCB7XG4gICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcbiAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRva2VuKSxcbiAgICAvLyB9KVxuICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG5cbiAgLy8gLi4uXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAvLyAuLi5cbiAgICAgIDxTdHJpcGVDaGVja291dFxuICAgICAgICB0b2tlbj17dGhpcy5vblRva2VufVxuICAgICAgICBzdHJpcGVLZXk9XCJwa19sY2xUdFRoRnA4Q25PM1F0RVpTZDhIQTltRlVwc1wiXG4gICAgICAgIGFtb3VudD17MTAwMDAwMH0gLy8gY2VudHNcbiAgICAgICAgY3VycmVuY3k9XCJVU0RcIlxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQnV5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5CdXk8L3A+XG4gICAgICAgIDxUYWtlTW9uZXk+PC9UYWtlTW9uZXk+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoQnV5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2J1eS5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgaW5pdEFwb2xsbyBmcm9tICcuL2luaXRBcG9sbG8nXG5cbi8vIEdldHMgdGhlIGRpc3BsYXkgbmFtZSBvZiBhIEpTWCBjb21wb25lbnQgZm9yIGRldiB0b29sc1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUgKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gIHJldHVybiBjbGFzcyBXaXRoRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gYFdpdGhEYXRhKCR7Z2V0Q29tcG9uZW50RGlzcGxheU5hbWUoQ29tcG9zZWRDb21wb25lbnQpfSlgXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHNlcnZlclN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGxldCBzZXJ2ZXJTdGF0ZSA9IHt9XG5cbiAgICAgIC8vIEV2YWx1YXRlIHRoZSBjb21wb3NlZCBjb21wb25lbnQncyBnZXRJbml0aWFsUHJvcHMoKVxuICAgICAgbGV0IGNvbXBvc2VkSW5pdGlhbFByb3BzID0ge31cbiAgICAgIGlmIChDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgY29tcG9zZWRJbml0aWFsUHJvcHMgPSBhd2FpdCBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgfVxuXG4gICAgICAvLyBSdW4gYWxsIEdyYXBoUUwgcXVlcmllcyBpbiB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgIC8vIGFuZCBleHRyYWN0IHRoZSByZXN1bHRpbmcgZGF0YVxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgYXBvbGxvID0gaW5pdEFwb2xsbygpXG4gICAgICAgIC8vIFByb3ZpZGUgdGhlIGB1cmxgIHByb3AgZGF0YSBpbiBjYXNlIGEgR3JhcGhRTCBxdWVyeSB1c2VzIGl0XG4gICAgICAgIGNvbnN0IHVybCA9IHtxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXG4gICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cbiAgICAgICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHVybD17dXJsfSB7Li4uY29tcG9zZWRJbml0aWFsUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IEFwb2xsbyBDbGllbnQgR3JhcGhRTCBlcnJvcnMgZnJvbSBjcmFzaGluZyBTU1IuXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAvLyBodHRwOi8vZGV2LmFwb2xsb2RhdGEuY29tL3JlYWN0L2FwaS1xdWVyaWVzLmh0bWwjZ3JhcGhxbC1xdWVyeS1kYXRhLWVycm9yXG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0RGF0YUZyb21UcmVlIGRvZXMgbm90IGNhbGwgY29tcG9uZW50V2lsbFVubW91bnRcbiAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XG4gICAgICAgIEhlYWQucmV3aW5kKClcblxuICAgICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgQXBvbGxvIHN0b3JlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gYXBvbGxvLmdldEluaXRpYWxTdGF0ZSgpXG5cbiAgICAgICAgc2VydmVyU3RhdGUgPSB7XG4gICAgICAgICAgYXBvbGxvOiB7XG4gICAgICAgICAgICAvLyBPbmx5IGluY2x1ZGUgdGhlIEFwb2xsbyBkYXRhIHN0YXRlXG4gICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlcnZlclN0YXRlLFxuICAgICAgICAuLi5jb21wb3NlZEluaXRpYWxQcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLmFwb2xsbyA9IGluaXRBcG9sbG8odGhpcy5wcm9wcy5zZXJ2ZXJTdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17dGhpcy5hcG9sbG99PlxuICAgICAgICAgIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi93aXRoRGF0YS5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5sZXQgYXBvbGxvQ2xpZW50ID0gbnVsbFxuXG4vLyBQb2x5ZmlsbCBmZXRjaCgpIG9uIHRoZSBzZXJ2ZXIgKHVzZWQgYnkgYXBvbGxvLWNsaWVudClcbmlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSAoaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlciwgLy8gRGlzYWJsZXMgZm9yY2VGZXRjaCBvbiB0aGUgc2VydmVyIChzbyBxdWVyaWVzIGFyZSBvbmx5IHJ1biBvbmNlKVxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9zaW1wbGUvdjEvY2o1eHo4c3pzMjg5MzAxNDVnY3Q4MmJkaicsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICBvcHRzOiB7IC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXBvbGxvIChpbml0aWFsU3RhdGUpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShpbml0aWFsU3RhdGUpXG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0QXBvbGxvLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFZQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBOztBQURBO0FBT0E7QUFQQTs7Ozs7OztBQWxCQTtBQUNBO0FBMkJBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQU1BO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBWEE7QUFDQTtBQVVBO0FBWEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBQ0E7QUFEQTtBQVpBO0FBQ0E7QUFEQTtBQWlCQTtBQWpCQTtBQUFBO0FBa0JBO0FBQ0E7QUFuQkE7QUFvQkE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUF3QkE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFnQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBdENBO0FBQ0E7OztBQTBDQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBMUNBOztBQUFBO0FBaURBO0FBQ0E7QUFsREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXNEQTtBQXREQTtBQUNBO0FBcURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBekRBO0FBQ0E7O0FBREE7QUE0REE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBOURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTs7QUFHQTtBQUFBOztBQUVBO0FBRUE7QUFJQTtBQUxBO0FBREE7QUFIQTtBQVdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        