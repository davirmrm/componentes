"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _style = _interopRequireDefault(require("./style.scss"));

var _ref2 = /*#__PURE__*/_react["default"].createElement("div", {
  className: "box"
}, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
  icon: "Check",
  className: "check",
  size: "0.8"
}));

var Checkbox = function Checkbox(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'checkbox' : _ref$label,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      _ref$strong = _ref.strong,
      strong = _ref$strong === void 0 ? '' : _ref$strong,
      _ref$clickStrong = _ref.clickStrong,
      clickStrong = _ref$clickStrong === void 0 ? function () {} : _ref$clickStrong;

  var handleClick = function handleClick(e) {
    if (e.target.nodeName !== 'STRONG') {
      onClick(e);
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "checkbox ".concat(checked ? 'checked' : '', " ").concat(type),
    style: style,
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, _ref2, label, strong && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0", /*#__PURE__*/_react["default"].createElement("strong", {
    onClick: function onClick() {
      clickStrong();
    }
  }, strong)));
};

process.env.NODE_ENV !== "production" ? Checkbox.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = Checkbox;
exports["default"] = _default;