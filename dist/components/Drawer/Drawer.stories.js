"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawer = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _dist = require("../../../dist");

var _default = {
  title: 'Drawer',
  component: _dist.Drawer,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var drawer = function drawer() {
  return /*#__PURE__*/_react["default"].createElement(_dist.Drawer, {
    onClick: (0, _addonActions.action)('clicked'),
    show: (0, _addonKnobs.select)('Mostrar drawer', [false, true], false),
    shadow: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '300px',
      height: '100vh',
      backgroundColor: 'var(--background-secondary)'
    }
  }, "Drawer"));
};

exports.drawer = drawer;