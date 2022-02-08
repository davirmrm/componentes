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

var _Loader = _interopRequireDefault(require("../Loader"));

var _ref2 = /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
  width: 38,
  height: 38
});

var Button = function Button(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'default' : _ref$state,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? null : _ref$label,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? false : _ref$rounded;
  return /*#__PURE__*/_react["default"].createElement("button", {
    testid: testid,
    className: "".concat(state, " size-").concat(size, " ").concat(rounded ? 'rounded ' : '').concat(disabled ? 'disabled ' : '', "button "),
    style: style,
    onClick: !disabled && !loading ? onClick : null
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      opacity: loading ? 0 : 1
    }
  }, icon && /*#__PURE__*/_react["default"].createElement(_.Icon, {
    className: state,
    icon: icon,
    size: "1",
    style: label ? {
      marginRight: '.5rem'
    } : {}
  }), label), loading && _ref2);
};

process.env.NODE_ENV !== "production" ? Button.propTypes = {
  style: _propTypes["default"].object,
  state: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool
} : void 0;
var _default = Button;
exports["default"] = _default;