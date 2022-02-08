"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoItem = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'InfoItem',
  component: _.InfoItem,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var _ref = /*#__PURE__*/_react["default"].createElement(_.InfoItem, null);

var infoItem = function infoItem() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, _ref);
};

exports.infoItem = infoItem;