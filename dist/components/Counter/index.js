"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Counter = function Counter(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label;
  return /*#__PURE__*/_react["default"].createElement("span", {
    testid: testid,
    className: "counter",
    style: style
  }, label);
};

process.env.NODE_ENV !== "production" ? Counter.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = Counter;
exports["default"] = _default;