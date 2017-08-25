'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Meta = require('./Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _styledComponents = require('styled-components');

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