"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusRenderer = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _data = require("../DatePicker/data");

var _default = {
  title: 'StatusRenderer',
  component: _.StatusRenderer,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var statusRenderer = function statusRenderer() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.StatusRenderer, {
    value: 'pendente',
    data: 'other Data'
  }));
};

exports.statusRenderer = statusRenderer;