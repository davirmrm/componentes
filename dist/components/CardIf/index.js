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

var _ref2 = /*#__PURE__*/_react["default"].createElement(_.Icon, {
  icon: "Login",
  size: "2"
});

var CardIf = function CardIf(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$suLabel = _ref.suLabel,
      suLabel = _ref$suLabel === void 0 ? '' : _ref$suLabel,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    style: style,
    className: "cardIf",
    onClick: function onClick(e) {
      _onClick(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, label), /*#__PURE__*/_react["default"].createElement("h5", null, suLabel)), _ref2);
};

process.env.NODE_ENV !== "production" ? CardIf.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = CardIf;
exports["default"] = _default;