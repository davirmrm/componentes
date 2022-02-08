"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownWithCheckboxSearchable = exports.dropdownWithCheckbox = exports.dropdownSecondaryWithDateAndHour = exports.dropdownWithDateAndHour = exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'Dropdown',
  component: _.Dropdown,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var initialData = [{
  label: 'Estabelecimento comercial',
  check: false
}, {
  label: 'Instituição financeira',
  check: false
}];
var initialFields = {
  dateFrom: '',
  timeFrom: '',
  dateTo: '',
  timeTo: ''
};

var dropdownWithDateAndHour = function dropdownWithDateAndHour() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = (0, _react.useState)(initialFields),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      fields = _useState4[0],
      setFields = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
    title: "Data e hora da solicita\xE7\xE3o",
    label: "8",
    toggle: toggle,
    onClick: function onClick() {
      setToggle(!toggle);
    }
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownDateAndHour, {
    dateFrom: fields.dateFrom,
    timeFrom: fields.timeFrom,
    dateTo: fields.dateTo,
    timeTo: fields.timeTo,
    onChange: function onChange(e, from) {
      setFields((0, _extends4["default"])({}, fields, (0, _defineProperty2["default"])({}, from, e.target.value)));
    },
    onClickCancel: function onClickCancel() {
      setToggle(!toggle);
      setFields(initialFields);
    },
    onClickConfirm: function onClickConfirm() {
      setToggle(!toggle);
    }
  })));
};

exports.dropdownWithDateAndHour = dropdownWithDateAndHour;

var dropdownSecondaryWithDateAndHour = function dropdownSecondaryWithDateAndHour() {
  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      toggle = _useState6[0],
      setToggle = _useState6[1];

  var _useState7 = (0, _react.useState)(initialFields),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      fields = _useState8[0],
      setFields = _useState8[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
    title: "Data e hora da solicita\xE7\xE3o",
    label: "8",
    toggle: toggle,
    onClick: function onClick() {
      setToggle(!toggle);
    },
    state: "secondary"
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownDateAndHour, {
    state: "secondary",
    dateFrom: fields.dateFrom,
    timeFrom: fields.timeFrom,
    dateTo: fields.dateTo,
    timeTo: fields.timeTo,
    onChange: function onChange(e, from) {
      setFields((0, _extends4["default"])({}, fields, (0, _defineProperty2["default"])({}, from, e.target.value)));
    },
    onClickCancel: function onClickCancel() {
      setToggle(!toggle);
      setFields(initialFields);
    },
    onClickConfirm: function onClickConfirm() {
      setToggle(!toggle);
    }
  })));
};

exports.dropdownSecondaryWithDateAndHour = dropdownSecondaryWithDateAndHour;

var dropdownWithCheckbox = function dropdownWithCheckbox() {
  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      toggle = _useState10[0],
      setToggle = _useState10[1];

  var _useState11 = (0, _react.useState)([{
    label: 'Estabelecimento comercial'
  }]),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      selectedData = _useState12[0],
      setSelectedData = _useState12[1];

  var _useState13 = (0, _react.useState)(initialData),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      data = _useState14[0],
      setData = _useState14[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
    title: "Nome",
    label: "8",
    toggle: toggle,
    onClick: function onClick() {
      setToggle(!toggle);
    }
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownCheckboxList, {
    data: data,
    onChange: function onChange(list) {
      return setSelectedData((0, _toConsumableArray2["default"])(list));
    },
    selectedData: selectedData,
    onClickCancel: function onClickCancel() {
      setToggle(!toggle);
      setData(initialData);
    },
    onClickConfirm: function onClickConfirm() {
      setToggle(!toggle);
    }
  })));
};

exports.dropdownWithCheckbox = dropdownWithCheckbox;

var dropdownWithCheckboxSearchable = function dropdownWithCheckboxSearchable() {
  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      toggle = _useState16[0],
      setToggle = _useState16[1];

  var _useState17 = (0, _react.useState)([{
    label: 'Estabelecimento comercial'
  }]),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      selectedData = _useState18[0],
      setSelectedData = _useState18[1];

  var _useState19 = (0, _react.useState)(initialData),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      data = _useState20[0],
      setData = _useState20[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
    title: "Nome",
    label: "8",
    toggle: toggle,
    onClick: function onClick() {
      setToggle(!toggle);
    }
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownCheckboxList, {
    data: data,
    haveSearch: true,
    onChange: function onChange(list) {
      return setSelectedData((0, _toConsumableArray2["default"])(list));
    },
    onClickCancel: function onClickCancel() {
      setToggle(!toggle);
      setData(initialData);
    },
    onClickConfirm: function onClickConfirm() {
      setToggle(!toggle);
    },
    selectedData: selectedData
  })));
};

exports.dropdownWithCheckboxSearchable = dropdownWithCheckboxSearchable;