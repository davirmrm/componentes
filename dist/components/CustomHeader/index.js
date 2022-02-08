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

var CustomHeader = function CustomHeader(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: props === null || props === void 0 ? void 0 : props.testid,
    className: "customHeader"
  }, props.displayName, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    onClick: function onClick() {
      document.dispatchEvent(new CustomEvent('clickOnColumnToRemove', {
        detail: props.column
      }));
    },
    icon: "Trash"
  }));
};

process.env.NODE_ENV !== "production" ? CustomHeader.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = CustomHeader;
exports["default"] = _default;