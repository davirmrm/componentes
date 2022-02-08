"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownDateAndHour = exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'DropdownDateAndHour',
  component: _.DropdownDateAndHour,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var dropdownDateAndHour = function dropdownDateAndHour() {
  var _useState = (0, _react.useState)({
    dateFrom: '',
    timeFrom: '',
    dateTo: '',
    timeTo: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownDateAndHour, {
    dateFrom: fields.dateFrom,
    timeFrom: fields.timeFrom,
    dateTo: fields.dateTo,
    timeTo: fields.timeTo,
    onChange: function onChange(e, from) {
      setFields((0, _extends3["default"])({}, fields, (0, _defineProperty2["default"])({}, from, e.target.value)));
    }
  }));
};

exports.dropdownDateAndHour = dropdownDateAndHour;