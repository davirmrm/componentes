"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timerCell = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'TimerCell',
  component: _.TimerCell,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var timerCell = function timerCell() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], null, /*#__PURE__*/_react["default"].createElement(_.TimerCell, {
    state: (0, _addonKnobs.select)('Estado do timer', ['success', 'warning', 'danger', 'neutral'], 'success'),
    label: (0, _addonKnobs.text)('Texto do timer', '0H00M')
  }));
};

exports.timerCell = timerCell;