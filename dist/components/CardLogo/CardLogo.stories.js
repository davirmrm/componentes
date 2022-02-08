"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardLogo = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'CardLogo',
  component: _.CardLogo,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var _ref = /*#__PURE__*/_react["default"].createElement(_.CardLogo, {
  icon: "Metricas",
  title: "M\xE9tricas",
  label: "Visualize as m\xE9tricas detalhadas de cota\xE7\xF5es, opera\xE7\xF5es, taxas e chargebacks."
});

var cardLogo = function cardLogo() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: '#171819'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '200px',
      height: '210px'
    }
  }, _ref));
};

exports.cardLogo = cardLogo;