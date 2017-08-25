"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

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