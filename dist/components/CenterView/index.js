"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CenterView;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

function CenterView(_ref) {
  var children = _ref.children,
      bg = _ref.bg;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: (0, _extends2["default"])({}, _style["default"].main, bg)
  }, children);
}

CenterView.defaultProps = {
  children: null
};
process.env.NODE_ENV !== "production" ? CenterView.propTypes = {
  children: _propTypes["default"].node
} : void 0;