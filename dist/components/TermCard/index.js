"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _Icon = _interopRequireDefault(require("../Icon"));

var _style = _interopRequireDefault(require("./style.scss"));

/* eslint-disable import/no-cycle */
var TermCard = function TermCard(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$checkboxLabel = _ref.checkboxLabel,
      checkboxLabel = _ref$checkboxLabel === void 0 ? '' : _ref$checkboxLabel,
      _ref$term = _ref.term,
      term = _ref$term === void 0 ? '' : _ref$term,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      paragraphs = _useState2[0],
      setParagraphs = _useState2[1];

  (0, _react.useEffect)(function () {
    setParagraphs(term.split('\n'));
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "termCard",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "Check Circle",
    className: "".concat(checked ? 'checked' : ''),
    size: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("h2", null, title)), /*#__PURE__*/_react["default"].createElement("section", null, paragraphs.map(function (p, index) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      key: index
    }, p);
  })), /*#__PURE__*/_react["default"].createElement(_.Checkbox, {
    label: checkboxLabel,
    checked: checked,
    onClick: function onClick() {
      return _onClick();
    }
  }));
};

process.env.NODE_ENV !== "production" ? TermCard.propTypes = {
  style: _propTypes["default"].object,
  title: _propTypes["default"].string,
  checkboxLabel: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  term: _propTypes["default"].string,
  onClick: _propTypes["default"].func
} : void 0;
var _default = TermCard;
exports["default"] = _default;