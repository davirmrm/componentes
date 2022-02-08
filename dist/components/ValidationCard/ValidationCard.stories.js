"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'ValidationCard',
  component: _.ValidationCard,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.ValidationCard, {
    state: (0, _addonKnobs.select)('Estado', ['success', 'warning'], 'success'),
    title: "Padaria sensa\xE7\xE3o un. 1",
    label: "300.902.680/0001-03"
  }));
};

exports.Default = Default;