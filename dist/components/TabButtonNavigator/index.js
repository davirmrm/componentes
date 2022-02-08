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

var TabButtonNavigator = function TabButtonNavigator(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      className = _ref.className,
      data = _ref.data,
      selected = _ref.selected,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "tabButtonNavigatorContainer ".concat(className),
    style: style
  }, data.map(function (btn, index) {
    return /*#__PURE__*/_react["default"].createElement(_.Button, {
      key: index,
      label: btn.label,
      onClick: function onClick() {
        return _onClick(btn);
      },
      state: "tab-button".concat((selected === null || selected === void 0 ? void 0 : selected.label) === btn.label ? '-selected' : '')
    });
  }));
};

process.env.NODE_ENV !== "production" ? TabButtonNavigator.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = TabButtonNavigator;
exports["default"] = _default;