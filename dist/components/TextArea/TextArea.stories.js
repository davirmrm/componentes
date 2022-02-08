"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textArea = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'TextArea',
  component: _.TextArea,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var textArea = function textArea() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
    style: {
      width: '50%'
    },
    label: (0, _addonKnobs.text)('Label', 'label'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'placeholder'),
    disabled: (0, _addonKnobs["boolean"])('Desabilitar input', false),
    onChange: function onChange(e) {
      console.log(e.target.value);
    },
    rows: (0, _addonKnobs.number)('Número de linhas', '5')
  }));
};

exports.textArea = textArea;