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

var _ref2 = /*#__PURE__*/_react["default"].createElement("p", null, "Limite operacional");

var ProgressBar = function ProgressBar(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$percent = _ref.percent,
      percent = _ref$percent === void 0 ? 50 : _ref$percent,
      _ref$totalValue = _ref.totalValue,
      totalValue = _ref$totalValue === void 0 ? '0,00' : _ref$totalValue,
      _ref$partialValue = _ref.partialValue,
      partialValue = _ref$partialValue === void 0 ? '0,00' : _ref$partialValue,
      _ref$editClick = _ref.editClick,
      editClick = _ref$editClick === void 0 ? function () {} : _ref$editClick,
      _ref$edit = _ref.edit,
      edit = _ref$edit === void 0 ? false : _ref$edit,
      _ref$infoClick = _ref.infoClick,
      infoClick = _ref$infoClick === void 0 ? function () {} : _ref$infoClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "progressBar",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressBar_content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressBar_title"
  }, _ref2, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    icon: "Info",
    size: "0.75",
    onClick: function onClick() {
      return infoClick();
    }
  })), /*#__PURE__*/_react["default"].createElement("p", null, "".concat(percent ? percent : 0, "% de R$ ").concat(totalValue)), edit && /*#__PURE__*/_react["default"].createElement(_.Icon, {
    icon: "Edit",
    onClick: function onClick() {
      return editClick();
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressBar_barBg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressBar_barContent ".concat(percent > 100 ? 'warning' : 'success'),
    style: {
      width: "".concat(percent ? percent : 0, "%")
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "R$ ".concat(partialValue)))));
};

process.env.NODE_ENV !== "production" ? ProgressBar.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = ProgressBar;
exports["default"] = _default;