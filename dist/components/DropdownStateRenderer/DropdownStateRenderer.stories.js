"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownStateRenderer = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'DropdownStateRenderer',
  component: _.DropdownStateRenderer,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var dropdownStateRenderer = function dropdownStateRenderer() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownStateRenderer, {
    data: {
      dropdownStateData: [{
        label: 'Em análise de aprovação',
        state: 'warning'
      }, {
        label: 'Atrasado',
        state: 'danger'
      }, {
        label: 'Concluído',
        state: 'success'
      }, {
        label: 'Inativo',
        state: 'inative'
      }]
    },
    value: {
      label: 'pendente',
      state: 'warning'
    }
  }));
};

exports.dropdownStateRenderer = dropdownStateRenderer;