'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (amount) {
  return '$' + (amount / 100).toLocaleString();
};