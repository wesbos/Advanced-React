'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (image) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

  if (!image || !image.secret) return '';
  return 'https://images.graph.cool/v1/cj5xz8szs28930145gct82bdj/' + image.secret + '/' + width + 'x' + height;
};