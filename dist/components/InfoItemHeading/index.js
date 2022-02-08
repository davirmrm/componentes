"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var InfoItemHeading = function InfoItemHeading(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Valor bruto' : _ref$label,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 'RS 1.000,00' : _ref$value,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "infoItemHeading",
    style: style,
    onClick: function onClick() {
      return _onClick();
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, label), value);
};

process.env.NODE_ENV !== "production" ? InfoItemHeading.propTypes = {
  style: _propTypes["default"].object,
  label: _propTypes["default"].string,
  value: _propTypes["default"].number
} : void 0;
var _default = InfoItemHeading;
exports["default"] = _default;