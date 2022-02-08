"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardIf = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'CardIf',
  component: _.CardIf,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var _ref = /*#__PURE__*/_react["default"].createElement(_.CardIf, {
  label: "Padaria sensa\xE7\xE3o un. 1",
  suLabel: "300.902.680/0001-03"
});

var cardIf = function cardIf() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '330px'
    }
  }, _ref));
};

exports.cardIf = cardIf;