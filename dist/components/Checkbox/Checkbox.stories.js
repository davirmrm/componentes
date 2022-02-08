"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'Checkbox',
  component: _.Checkbox,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var Default = function Default() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], null, /*#__PURE__*/_react["default"].createElement(_.Checkbox, {
    checked: checked,
    onClick: function onClick() {
      return setChecked(!checked);
    },
    strong: "CLIQUE AQUI"
  }));
};

exports.Default = Default;