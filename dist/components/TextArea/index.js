"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var Input = function Input(_ref, ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? null : _ref$label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Placeholder' : _ref$placeholder,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? undefined : _ref$value,
      _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? '1' : _ref$rows;

  var input = (0, _react.useRef)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "inputTextArea",
    style: style
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    onClick: function onClick() {
      ref.current.focus();
    }
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: disabled ? 'disabled' : ''
  }, /*#__PURE__*/_react["default"].createElement("textarea", {
    ref: ref,
    value: value,
    onChange: function onChange(e) {
      _onChange(e);
    },
    disabled: disabled,
    placeholder: placeholder,
    rows: rows
  })));
};

process.env.NODE_ENV !== "production" ? Input.propTypes = {
  style: _propTypes["default"].object,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  rows: _propTypes["default"].string
} : void 0;

var _default = /*#__PURE__*/(0, _react.forwardRef)(Input);

exports["default"] = _default;