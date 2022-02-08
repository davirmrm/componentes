"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownCheckboxListWithSearch = exports.dropdownCheckboxList = exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _dist = require("../../../dist");

var _default = {
  title: 'DropdownCheckboxList',
  component: _dist.DropdownCheckboxList,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var dropdownCheckboxList = function dropdownCheckboxList() {
  var _useState = (0, _react.useState)([{
    label: 'Estabelecimento comercial'
  }]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedData = _useState2[0],
      setSelectedData = _useState2[1];

  var _useState3 = (0, _react.useState)([{
    label: 'Estabelecimento comercial',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_dist.DropdownCheckboxList, {
    data: data,
    onChange: function onChange(list) {
      return setSelectedData((0, _toConsumableArray2["default"])(list));
    },
    selectedData: selectedData
  }));
};

exports.dropdownCheckboxList = dropdownCheckboxList;

var dropdownCheckboxListWithSearch = function dropdownCheckboxListWithSearch() {
  var _useState5 = (0, _react.useState)([{
    label: 'Estabelecimento comercial',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }, {
    label: 'Instituição financeira',
    check: false
  }]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = (0, _react.useState)([{
    label: 'Estabelecimento comercial'
  }]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      selectedData = _useState8[0],
      setSelectedData = _useState8[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_dist.DropdownCheckboxList, {
    haveSearch: true,
    data: data,
    selectedData: selectedData,
    onChange: function onChange(list) {
      return setSelectedData((0, _toConsumableArray2["default"])(list));
    }
  }));
};

exports.dropdownCheckboxListWithSearch = dropdownCheckboxListWithSearch;