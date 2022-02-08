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

var _dist = require("../../../dist");

var StatusAuction = function StatusAuction(props) {
  return props.data && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    testid: props === null || props === void 0 ? void 0 : props.testid,
    className: "statusAuction ".concat(props.value ? 'success' : 'danger')
  }));
};

process.env.NODE_ENV !== "production" ? StatusAuction.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = StatusAuction;
exports["default"] = _default;