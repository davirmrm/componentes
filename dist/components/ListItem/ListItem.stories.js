"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItem = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'ListItem',
  component: _.ListItem,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var arr = [{
  label: 'Banco Santander',
  value: 'agência 0000 - conta corrente 0000000-0',
  id: '1'
}, {
  label: 'Banco Santander',
  value: 'agência 0000 - conta corrente 0000000-0',
  id: '2'
}, {
  label: 'Banco Santander',
  value: 'agência 0000 - conta corrente 0000000-0',
  id: '3'
}];

var listItem = function listItem() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.ListItem, {
    data: arr,
    style: {
      width: '50%'
    },
    icon: "Eye",
    clickable: true,
    isHeading: (0, _addonKnobs["boolean"])('É do tipo heading', true)
  }));
};

exports.listItem = listItem;