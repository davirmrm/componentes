"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var ValidationCard = function ValidationCard(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'success' : _ref$state,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "validationCard",
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    className: state,
    size: "2",
    icon: state === 'success' ? 'Check Circle' : state === 'warning' ? 'Alert Circle' : ''
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, title), /*#__PURE__*/_react["default"].createElement("h4", null, label)));
};

process.env.NODE_ENV !== "production" ? ValidationCard.propTypes = {
  style: _propTypes["default"].object,
  state: _propTypes["default"].string,
  title: _propTypes["default"].string,
  label: _propTypes["default"].string
} : void 0;
var _default = ValidationCard;
exports["default"] = _default;