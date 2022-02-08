"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _maps = require("../../utils/maps");

var StatusRendererModerateIf = function StatusRendererModerateIf(props) {
  var _status$props$value, _status$props$value2;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "statusRenderer ".concat((_status$props$value = _maps.moderateIf[props.value]) === null || _status$props$value === void 0 ? void 0 : _status$props$value.state)
  }, (_status$props$value2 = _maps.moderateIf[props.value]) === null || _status$props$value2 === void 0 ? void 0 : _status$props$value2.label);
};

process.env.NODE_ENV !== "production" ? StatusRendererModerateIf.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = StatusRendererModerateIf;
exports["default"] = _default;