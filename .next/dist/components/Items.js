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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _UpdateItem = require('./UpdateItem');

var _UpdateItem2 = _interopRequireDefault(_UpdateItem);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TakeMyMoney = require('./TakeMyMoney');

var _TakeMyMoney2 = _interopRequireDefault(_TakeMyMoney);

var _formatMoney = require('../lib/formatMoney');

var _formatMoney2 = _interopRequireDefault(_formatMoney);

var _queries = require('../queries');

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