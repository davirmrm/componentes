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

var BackButton = function BackButton(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Voltar' : _ref$label,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? 'Arrow Left' : _ref$icon;

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    style: style,
    className: "backButton",
    onClick: function onClick() {
      return _onClick();
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    icon: icon,
    size: "1"
  }), /*#__PURE__*/_react["default"].createElement("h6", null, label));
};

process.env.NODE_ENV !== "production" ? BackButton.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = BackButton;
exports["default"] = _default;