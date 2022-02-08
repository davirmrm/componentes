"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownCheckboxRenderer = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'DropdownCheckboxRenderer',
  component: _.DropdownCheckboxRenderer,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var dropdownCheckboxRenderer = function dropdownCheckboxRenderer() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownCheckboxRenderer, {
    data: {
      dropdownCheckboxData: [{
        label: 'Estabelecimento comercial',
        check: false
      }, {
        label: 'Instituição financeira',
        check: false
      }]
    },
    value: 'DropdownTexto'
  }));
};

exports.dropdownCheckboxRenderer = dropdownCheckboxRenderer;