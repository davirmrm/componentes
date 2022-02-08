"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var style = {};

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$action = _ref.action,
      action = _ref$action === void 0 ? function () {
    return null;
  } : _ref$action,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'btn' : _ref$type,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'normal' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(type, " ").concat(color, " ").concat(variant, " ").concat(size, " "),
    onClick: action,
    title: title ? title : children,
    disabled: disabled
  }, children);
};

exports.Button = Button;