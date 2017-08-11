webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iZTRhYjYzMDRhZWZkNzg4YWRlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVJdGVtLmpzPzM1NDIwOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgQUxMX0lURU1TX1FVRVJZLCBDUkVBVEVfTElOS19NVVRBVElPTiB9IGZyb20gJy4uL3F1ZXJpZXMnO1xuXG5jbGFzcyBDcmVhdGVMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGltYWdlOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMpO1xuICB9XG5cbiAgdXBsb2FkRmlsZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgZmlsZXMgPSBlLmN1cnJlbnRUYXJnZXQuZmlsZXM7XG5cbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGRhdGEuYXBwZW5kKCdkYXRhJywgZmlsZXNbMF0pO1xuXG4gICAgLy8gdXNlIHRoZSBmaWxlIGVuZHBvaW50XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdyYXBoLmNvb2wvZmlsZS92MS9jajV4ejhzenMyODkzMDE0NWdjdDgyYmRqJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSk7XG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBmaWxlLmlkIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/ICdMT0FESU5HLi4uJyA6ICdSZWFkeSEnIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2NyZWF0ZUxpbmt9PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSW1hZ2VcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy51cGxvYWRGaWxlfSB0eXBlPSdmaWxlJy8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlRpdGxlXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KX0gdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0EgZGVzY3JpcHRpb24gZm9yIHRoZSBsaW5rJy8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RoZSBkZXNjIGZvciB0aGlzIGl0ZW0nXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9jcmVhdGVMaW5rID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcHVsbCB0aGUgdmFsdWVzIGZyb20gc3RhdGVcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCB0aXRsZSwgaW1hZ2UgfSA9IHRoaXMuc3RhdGVcbiAgICAvLyBjcmVhdGUgYSBtdXRhdGlvblxuICAgIC8vIFRPRE86IGhhbmRsZSBhbnkgZXJyb3JzXG4gICAgLy8gdHVybiBsb2FkaW5nIG9uXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5wcm9wcy5jcmVhdGVMaW5rTXV0YXRpb24oe1xuICAgICAgLy8gcGFzcyBpbiB0aG9zZSB2YXJpYWJsZXMgZnJvbSBzdGF0ZVxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgaW1hZ2VJZDogaW1hZ2VcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gIH1cbn1cbi8vIFdoZW4gd2Ugc3VibWl0IHRoaXMgbXV0YXRpb24sIHdlIG5lZWQgdG8gdXBkYXRlIG91ciBzdG9yZSAtIHdlIGhhdmUgYSBmZXcgd2F5cyB0byBkbyB0aGF0OlxuLy8gT25lIC0gd2UgY2FuIGdvIG51Y3VsYXIgYW5kIHJ1biByZWZldGNoUXVlcmllcygpIHdoaWNoIHdpbGwganVzdCBnbyBnZXQgZXZlcnl0aGluZyAtIHRoaXMgaXMgZWFzeSwgYnV0IGF0IHRoZSBjb3N0IG9mIGVmZmljaWVuY3kuXG5cblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChDUkVBVEVfTElOS19NVVRBVElPTiwgeyBuYW1lOiAnY3JlYXRlTGlua011dGF0aW9uJywgb3B0aW9uczoge1xuICAgIC8vIEVhc3ksIGJ1dCBzbG93XG4gICAgLy8gcmVmZXRjaFF1ZXJpZXM6IFsnQWxsTGlua3NRdWVyeSddXG4gICAgLy8gVGhpcyBpcyBtdWNoIEJldHRlciAvIGVmZmljaWVudFxuICAgIC8vIE5vdGljZSBob3cgdGhlIHZhcmlhYmxlIGlzIGNhbGxlZCBjcmVhdGVJdGVtIC0gdGhhdCBpcyBiZWNhdXNlIGNyZWF0ZUl0ZW0gaXMgdGhlIG5hbWUgb2YgdGhlIHF1ZXJ5IVxuICAgIHVwZGF0ZTogKHByb3h5LCB7IGRhdGE6IHsgY3JlYXRlSXRlbSB9IH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHtjcmVhdGVJdGVtLCBBTExfSVRFTVNfUVVFUll9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBwcm94eS5yZWFkUXVlcnkoeyBxdWVyeTogQUxMX0lURU1TX1FVRVJZIH0pO1xuICAgICAgLy8gZGF0YSBpcyBvdXIgc3RvcmUsIGFsbEl0ZW1zIGlzIG91ciBzdWItXCJzdGF0ZVwiLCBpdCdzIGp1c3QgYW4gYXJyYXkuIFdlIGNhbiBqdXN0IGFkZCBpdCB0b1xuICAgICAgZGF0YS5hbGxJdGVtcy51bnNoaWZ0KGNyZWF0ZUl0ZW0pO1xuICAgICAgLy8gYW5kIHRoZW4gXCJzZXQgc3RhdGVcIiwgc28gaXQgd2lsbCB1cGRhdGUgb24gdGhlIHBhZ2UuIFRoaXMgd2lsbCB1cGRhdGUgdGhlIGNhY2hlIGZvciB1cyFcbiAgICAgIHByb3h5LndyaXRlUXVlcnkoeyBxdWVyeTogQUxMX0lURU1TX1FVRVJZLCBkYXRhIH0pO1xuICAgIH0sXG4gIH0gfSkoQ3JlYXRlTGluaylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ3JlYXRlSXRlbS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBQUE7QUFPQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBRkE7QUFQQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBWEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7QUF3Q0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQVFBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFGQTtBQUNBO0FBRkE7QUFSQTtBQUNBO0FBZUE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUE1Q0E7QUFDQTs7OztBQW1CQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUlBOzs7OztBQW5EQTtBQXdFQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFYQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=