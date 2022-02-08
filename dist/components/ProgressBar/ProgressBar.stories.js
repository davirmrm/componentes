"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressBar = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _dist = require("../../../dist");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'ProgressBar',
  component: _dist.ProgressBar,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var progressBar = function progressBar() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], null, /*#__PURE__*/_react["default"].createElement(_dist.ProgressBar, {
    style: {
      width: '70%'
    },
    percent: (0, _addonKnobs.text)('Porcentagem', 50),
    totalValue: "100.000,00"
  }));
};

exports.progressBar = progressBar;