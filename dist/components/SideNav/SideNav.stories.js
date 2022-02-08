"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sideNav = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _logo = _interopRequireDefault(require("../../assets/image/logo.svg"));

var _ = require("../");

var _default = {
  title: 'SideNav',
  component: _.SideNav,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var _ref = /*#__PURE__*/_react["default"].createElement(_.SideNav, {
  logo: _logo["default"],
  useNavLink: false
});

var sideNav = function sideNav() {
  return _ref;
};

exports.sideNav = sideNav;