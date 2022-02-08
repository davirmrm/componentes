"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _dist = require("../../../dist");

var _CenterView = _interopRequireDefault(require("../CenterView"));

/* eslint-disable import/no-extraneous-dependencies */
var _default = {
  title: 'Button',
  component: _dist.Button,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var button = function button() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], null, /*#__PURE__*/_react["default"].createElement(_dist.Button, {
    onClick: (0, _addonActions.action)('clicked'),
    state: (0, _addonKnobs.select)('Qual tipo de botão', ['default', 'dark', 'light', 'neutral', 'danger', 'dangerFilled', 'success', 'warning'], 'default'),
    label: (0, _addonKnobs.text)('Texto do botão', 'Botão'),
    icon: (0, _addonKnobs.text)('Digite o nome do ícone', ''),
    disabled: (0, _addonKnobs.select)('Botão está desabilitado', [false, true], false),
    rounded: (0, _addonKnobs.select)('Botão é redondo', [false, true], false)
  }));
};

exports.button = button;