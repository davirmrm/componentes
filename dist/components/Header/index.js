"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style.scss"));

var _dist = require("../../../dist");

/* eslint-disable import/no-cycle */

/* eslint-disable no-unused-vars */
var Header = function Header(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$time = _ref.time,
      time = _ref$time === void 0 ? null : _ref$time,
      _ref$isOnline = _ref.isOnline,
      isOnline = _ref$isOnline === void 0 ? true : _ref$isOnline,
      _ref$percent = _ref.percent,
      percent = _ref$percent === void 0 ? 50 : _ref$percent,
      _ref$totalValue = _ref.totalValue,
      totalValue = _ref$totalValue === void 0 ? '0,00' : _ref$totalValue,
      _ref$partialValue = _ref.partialValue,
      partialValue = _ref$partialValue === void 0 ? '0,00' : _ref$partialValue,
      _ref$ifname = _ref.ifname,
      ifname = _ref$ifname === void 0 ? '' : _ref$ifname,
      _ref$username = _ref.username,
      username = _ref$username === void 0 ? '' : _ref$username,
      _ref$editClick = _ref.editClick,
      _editClick = _ref$editClick === void 0 ? function () {} : _ref$editClick,
      _ref$showProgressBarA = _ref.showProgressBarAndSelect,
      showProgressBarAndSelect = _ref$showProgressBarA === void 0 ? true : _ref$showProgressBarA,
      _ref$ifList = _ref.ifList,
      ifList = _ref$ifList === void 0 ? [] : _ref$ifList,
      _ref$selectNewIf = _ref.selectNewIf,
      selectNewIf = _ref$selectNewIf === void 0 ? function () {} : _ref$selectNewIf,
      _ref$canViewOpLimit = _ref.canViewOpLimit,
      canViewOpLimit = _ref$canViewOpLimit === void 0 ? false : _ref$canViewOpLimit,
      _ref$canEditOpLimit = _ref.canEditOpLimit,
      canEditOpLimit = _ref$canEditOpLimit === void 0 ? false : _ref$canEditOpLimit,
      _ref$infoClickOnProgr = _ref.infoClickOnProgressBar,
      infoClickOnProgressBar = _ref$infoClickOnProgr === void 0 ? function () {} : _ref$infoClickOnProgr,
      _ref$timeout = _ref.timeout,
      _timeout = _ref$timeout === void 0 ? function () {} : _ref$timeout;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      ifLocalList = _useState4[0],
      setIfLocalList = _useState4[1];

  var _useState5 = (0, _react.useState)({
    label: '',
    state: ''
  }),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selected = _useState6[0],
      setSelected = _useState6[1];

  (0, _react.useEffect)(function () {
    if (ifname) {
      setSelected({
        label: ifname,
        state: ''
      });
    }
  }, [ifname]);
  (0, _react.useEffect)(function () {
    if (ifList === null || ifList === void 0 ? void 0 : ifList.length) {
      setIfLocalList(ifList.map(function (ifs) {
        return {
          label: ifs === null || ifs === void 0 ? void 0 : ifs.nome,
          state: '',
          id: ifs === null || ifs === void 0 ? void 0 : ifs.id
        };
      }));
    }
  }, [ifList]);
  return /*#__PURE__*/_react["default"].createElement("header", {
    testid: testid,
    style: style,
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement(_dist.StatusBar, {
    time: time,
    isOnline: isOnline,
    timeout: function timeout() {
      return _timeout();
    }
  }), showProgressBarAndSelect && canViewOpLimit && /*#__PURE__*/_react["default"].createElement(_dist.ProgressBar, {
    infoClick: infoClickOnProgressBar,
    totalValue: totalValue,
    partialValue: partialValue,
    percent: percent,
    editClick: function editClick() {
      return _editClick();
    },
    edit: canEditOpLimit
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rightInfo"
  }, showProgressBarAndSelect && /*#__PURE__*/_react["default"].createElement(_dist.Dropdown, {
    title: selected.label,
    label: "",
    toggle: toggle,
    onClick: function onClick() {
      setToggle(!toggle);
    },
    state: "secondary",
    closeOnClick: true,
    right: true
  }, /*#__PURE__*/_react["default"].createElement(_dist.DropdownState, {
    data: ifLocalList,
    onChange: function onChange(index) {
      console.log(index);
      selectNewIf(ifLocalList[index]);
      setSelected(ifLocalList[index]);
    },
    state: "secondary"
  })), /*#__PURE__*/_react["default"].createElement("span", null, username))));
};

process.env.NODE_ENV !== "production" ? Header.propTypes = {
  style: _propTypes["default"].object,
  isOnline: _propTypes["default"].bool,
  totalValue: _propTypes["default"].string,
  percent: _propTypes["default"].number,
  username: _propTypes["default"].string,
  ifname: _propTypes["default"].string
} : void 0;
var _default = Header;
exports["default"] = _default;