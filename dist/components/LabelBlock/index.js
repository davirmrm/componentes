"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var LabelBlock = function LabelBlock(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children,
      label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "labelBlock",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "label"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "block"
  }, children));
};

process.env.NODE_ENV !== "production" ? LabelBlock.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = LabelBlock;
exports["default"] = _default;