"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoNumber = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'InfoNumber',
  component: _.InfoNumber,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var infoNumber = function infoNumber() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], null, /*#__PURE__*/_react["default"].createElement(_.InfoNumber, {
    status: (0, _addonKnobs.select)('Estado', ['warning', 'danger', 'success'], 'warning'),
    label: (0, _addonKnobs.text)('Texto', 'pendentes'),
    number: Number.parseInt((0, _addonKnobs.text)('Número', '10'))
  }));
};

exports.infoNumber = infoNumber;