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

var _ref2 = /*#__PURE__*/_react["default"].createElement("span", null, "Acessar ", /*#__PURE__*/_react["default"].createElement(_.Icon, {
  icon: "Arrow Right"
}));

var CardLogo = function CardLogo(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? 'Home' : _ref$icon,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "cardLogo ".concat(className, " ").concat(window.innerHeight < 670 ? 'mini' : ''),
    style: style,
    onClick: function onClick() {
      return _onClick();
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    size: "3",
    icon: icon
  }), /*#__PURE__*/_react["default"].createElement("h1", null, title), label, _ref2);
};

process.env.NODE_ENV !== "production" ? CardLogo.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = CardLogo;
exports["default"] = _default;