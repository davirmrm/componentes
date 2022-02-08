"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownStateSecondary = exports.dropdownState = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'DropdownState',
  component: _.DropdownState,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var dropdownState = function dropdownState() {
  var _useState = (0, _react.useState)([{
    label: 'Em análise de aprovação',
    state: 'warning'
  }, {
    label: 'Atrasado',
    state: 'danger'
  }, {
    label: 'Concluído',
    state: 'success'
  }]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)({
    label: 'Em análise de aprovação',
    state: 'warning'
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      toggle = _useState6[0],
      setToggle = _useState6[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
    state: "status",
    selected: selected,
    toggle: toggle,
    onClick: function onClick() {
      setToggle(!toggle);
    },
    closeOnClick: true
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownState, {
    data: data,
    onChange: function onChange(index) {
      setSelected(data[index]);
    }
  })));
};

exports.dropdownState = dropdownState;

var dropdownStateSecondary = function dropdownStateSecondary() {
  var _useState7 = (0, _react.useState)([{
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
  }]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = (0, _react.useState)({
    label: 'Em análise de aprovação',
    state: 'warning'
  }),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      selected = _useState10[0],
      setSelected = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      toggle = _useState12[0],
      setToggle = _useState12[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
    state: "statusForeground",
    selected: selected,
    toggle: toggle,
    onClick: function onClick() {
      setToggle(!toggle);
    },
    closeOnClick: true
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownState, {
    data: data,
    onChange: function onChange(index) {
      setSelected(data[index]);
    },
    state: "secondary"
  })));
};

exports.dropdownStateSecondary = dropdownStateSecondary;