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

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/require-default-props */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable import/no-cycle */
var _ref2 = /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
  icon: "Arrow Left",
  size: "1.25"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
  icon: "Arrow Right",
  size: "1.25"
});

var ArrowNavigator = function ArrowNavigator(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$handleClickLeft = _ref.handleClickLeft,
      handleClickLeft = _ref$handleClickLeft === void 0 ? function () {} : _ref$handleClickLeft,
      _ref$handleClickRight = _ref.handleClickRight,
      handleClickRight = _ref$handleClickRight === void 0 ? function () {} : _ref$handleClickRight;
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "arrowNavigator"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      handleClickLeft();
    }
  }, _ref2), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      handleClickRight();
    }
  }, _ref3));
};

process.env.NODE_ENV !== "production" ? ArrowNavigator.propTypes = {
  style: _propTypes["default"].object,
  handleClickLeft: _propTypes["default"].func,
  handleClickRight: _propTypes["default"].func
} : void 0;
var _default = ArrowNavigator;
exports["default"] = _default;