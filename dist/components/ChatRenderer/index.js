"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ChatRenderer = function ChatRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "chatRenderer"
  }, /*#__PURE__*/_react["default"].createElement("span", null, props.value));
};

process.env.NODE_ENV !== "production" ? ChatRenderer.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = ChatRenderer;
exports["default"] = _default;