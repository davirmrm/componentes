"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'Input',
  component: _.Input,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var input = function input() {
  var _useState = (0, _react.useState)('13213213'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], null, /*#__PURE__*/_react["default"].createElement(_.Input, {
    style: {
      width: '50%'
    },
    label: (0, _addonKnobs.text)('Label', 'label'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'placeholder'),
    type: (0, _addonKnobs.select)('Tipo', ['text', 'number'], 'text'),
    iconLeft: (0, _addonKnobs.select)('Ícone à esquerda', ['Search', ''], 'Search'),
    iconRight: (0, _addonKnobs.select)('Ícone à direita', ['Chevron Down', ''], 'Chevron Down'),
    disabled: (0, _addonKnobs["boolean"])('Desabilitar input', false),
    onChange: function onChange(e) {
      setValue(e.target.value);
    },
    inconLeftClickHandle: function inconLeftClickHandle() {
      console.log('clicou');
    },
    mask: "brl",
    value: value,
    errors: 'teste'
  }));
};

exports.input = input;