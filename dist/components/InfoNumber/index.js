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

var InfoNumber = function InfoNumber(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? '' : _ref$status,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$number = _ref.number,
      number = _ref$number === void 0 ? {} : _ref$number;
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "infoNumber",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: status
  }, number), label);
};

process.env.NODE_ENV !== "production" ? InfoNumber.propTypes = {
  style: _propTypes["default"].object,
  status: _propTypes["default"].string,
  label: _propTypes["default"].string,
  number: _propTypes["default"].number
} : void 0;
var _default = InfoNumber;
exports["default"] = _default;