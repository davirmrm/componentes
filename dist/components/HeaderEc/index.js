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

var _real = require("../../utils/real");

/* eslint-disable import/no-cycle */

/* eslint-disable no-unused-vars */
var _ref2 = /*#__PURE__*/_react["default"].createElement("div", {
  className: "title"
}, "Dispon\xEDvel para antecipa\xE7\xE3o");

var HeaderEc = function HeaderEc(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$ecName = _ref.ecName,
      ecName = _ref$ecName === void 0 ? '' : _ref$ecName,
      _ref$username = _ref.username,
      username = _ref$username === void 0 ? '' : _ref$username,
      _ref$editClick = _ref.editClick,
      editClick = _ref$editClick === void 0 ? function () {} : _ref$editClick,
      _ref$showProgressBarA = _ref.showProgressBarAndSelect,
      showProgressBarAndSelect = _ref$showProgressBarA === void 0 ? true : _ref$showProgressBarA,
      _ref$ecList = _ref.ecList,
      ecList = _ref$ecList === void 0 ? [] : _ref$ecList,
      _ref$selectNewEc = _ref.selectNewEc,
      selectNewEc = _ref$selectNewEc === void 0 ? function () {} : _ref$selectNewEc,
      _ref$infoClickOnProgr = _ref.infoClickOnProgressBar,
      infoClickOnProgressBar = _ref$infoClickOnProgr === void 0 ? function () {} : _ref$infoClickOnProgr,
      _ref$buttonLabel = _ref.buttonLabel,
      buttonLabel = _ref$buttonLabel === void 0 ? '' : _ref$buttonLabel,
      _ref$buttonAction = _ref.buttonAction,
      buttonAction = _ref$buttonAction === void 0 ? function () {} : _ref$buttonAction,
      _ref$showButton = _ref.showButton,
      showButton = _ref$showButton === void 0 ? true : _ref$showButton;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      ecLocalList = _useState4[0],
      setEcLocalList = _useState4[1];

  var _useState5 = (0, _react.useState)({
    label: '',
    state: ''
  }),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selected = _useState6[0],
      setSelected = _useState6[1];

  (0, _react.useEffect)(function () {
    if (ecName) {
      setSelected({
        label: ecName,
        state: ''
      });
    }
  }, [ecName]);
  (0, _react.useEffect)(function () {
    if (ecList === null || ecList === void 0 ? void 0 : ecList.length) {
      setEcLocalList(ecList.map(function (ifs) {
        return {
          label: ifs === null || ifs === void 0 ? void 0 : ifs.nome,
          state: '',
          id: ifs === null || ifs === void 0 ? void 0 : ifs.id
        };
      }));
    }
  }, [ecList]);
  return /*#__PURE__*/_react["default"].createElement("header", {
    testid: testid,
    style: style,
    className: "headerEc"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "leftItems"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "leftInfo"
  }, _ref2, /*#__PURE__*/_react["default"].createElement("div", {
    className: "value"
  }, "R$ ".concat((0, _real.int2Brl)(value)))), !!showButton && /*#__PURE__*/_react["default"].createElement(_dist.Button, {
    label: buttonLabel,
    className: "button",
    state: "primary",
    rounded: true,
    onClick: function onClick() {
      return buttonAction();
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
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
    data: ecLocalList,
    onChange: function onChange(index) {
      selectNewEc(ecLocalList[index]);
      setSelected(ecLocalList[index]);
    },
    state: "default"
  })), /*#__PURE__*/_react["default"].createElement("span", null, username))));
};

process.env.NODE_ENV !== "production" ? HeaderEc.propTypes = {
  style: _propTypes["default"].object,
  isOnline: _propTypes["default"].bool,
  totalValue: _propTypes["default"].string,
  percent: _propTypes["default"].number,
  username: _propTypes["default"].string,
  ecName: _propTypes["default"].string
} : void 0;
var _default = HeaderEc;
exports["default"] = _default;