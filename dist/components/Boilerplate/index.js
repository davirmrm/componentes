"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Boilerplate = function Boilerplate(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Boilerplate");
};

Boilerplate.propTypes = {
  style: _propTypes["default"].object
};
var _default = Boilerplate;
exports["default"] = _default;