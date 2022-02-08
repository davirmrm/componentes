"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var DropdownDateAndHour = function DropdownDateAndHour(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'primary' : _ref$state,
      _ref$dateFrom = _ref.dateFrom,
      dateFrom = _ref$dateFrom === void 0 ? '' : _ref$dateFrom,
      _ref$timeFrom = _ref.timeFrom,
      timeFrom = _ref$timeFrom === void 0 ? '' : _ref$timeFrom,
      _ref$dateTo = _ref.dateTo,
      dateTo = _ref$dateTo === void 0 ? '' : _ref$dateTo,
      _ref$timeTo = _ref.timeTo,
      timeTo = _ref$timeTo === void 0 ? '' : _ref$timeTo,
      _ref$onClickConfirm = _ref.onClickConfirm,
      onClickConfirm = _ref$onClickConfirm === void 0 ? function () {} : _ref$onClickConfirm,
      _ref$onClickCancel = _ref.onClickCancel,
      onClickCancel = _ref$onClickCancel === void 0 ? function () {} : _ref$onClickCancel,
      _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;

  var canConfirm = function canConfirm() {
    if ("".concat(dateFrom).concat(timeFrom).concat(dateTo).concat(timeTo) === '') {
      return true;
    }

    if (dateFrom.length > 9 || dateTo.length > 9 || timeFrom.length > 4 || timeTo.length > 4) {
      return true;
    }

    return false;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "dropdownDateAndHourContainer ".concat(state)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "line"
  }, /*#__PURE__*/_react["default"].createElement(_.Input, {
    value: dateFrom,
    onChange: function onChange(e) {
      _onChange(e, 'dateFrom');
    },
    mask: "date",
    label: "de",
    placeholder: "00/00/0000"
  }), /*#__PURE__*/_react["default"].createElement(_.Input, {
    value: timeFrom,
    onChange: function onChange(e) {
      _onChange(e, 'timeFrom');
    },
    mask: "time",
    placeholder: "00:00"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "line"
  }, /*#__PURE__*/_react["default"].createElement(_.Input, {
    value: dateTo,
    onChange: function onChange(e) {
      _onChange(e, 'dateTo');
    },
    mask: "date",
    label: "at\xE9",
    placeholder: "00/00/0000"
  }), /*#__PURE__*/_react["default"].createElement(_.Input, {
    value: timeTo,
    onChange: function onChange(e) {
      _onChange(e, 'timeTo');
    },
    mask: "time",
    placeholder: "00:00"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return onClickCancel();
    },
    label: "cancelar",
    size: "small",
    state: "".concat(state === 'primary' ? 'transparent' : 'white')
  }), /*#__PURE__*/_react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return onClickConfirm();
    },
    label: "aplicar",
    size: "small",
    disabled: !canConfirm()
  })));
};

process.env.NODE_ENV !== "production" ? DropdownDateAndHour.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = DropdownDateAndHour;
exports["default"] = _default;