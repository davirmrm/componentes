"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _style = _interopRequireDefault(require("./style.scss"));

var LabelWithIconRenderer = function LabelWithIconRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: props === null || props === void 0 ? void 0 : props.testid,
    className: "labelWithIconRenderer"
  }, "At\xE9 ", props.value, " dias", /*#__PURE__*/_react["default"].createElement(_.Icon, {
    onClick: function onClick() {
      document.dispatchEvent(new CustomEvent('clickOnRowToRemove', {
        detail: props.data
      }));
    },
    icon: "Trash"
  }));
};

process.env.NODE_ENV !== "production" ? LabelWithIconRenderer.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = LabelWithIconRenderer;
exports["default"] = _default;