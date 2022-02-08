"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconCellRenderer = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'IconCellRenderer',
  component: _.IconCellRenderer,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var iconCellRenderer = function iconCellRenderer() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.IconCellRenderer, {
    data: {
      icon: 'Trash'
    },
    value: 'Trash'
  }));
};

exports.iconCellRenderer = iconCellRenderer;