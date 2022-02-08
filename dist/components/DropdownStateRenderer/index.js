"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var DropdownStateRenderer = function DropdownStateRenderer(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  (0, _react.useEffect)(function () {
    if (props.data) {
      setData(props.data.dropdownStateData);
    }
  }, [props.data]);
  return /*#__PURE__*/_react["default"].createElement("span", {
    testid: props === null || props === void 0 ? void 0 : props.testid,
    className: "dropdownStateRenderer"
  }, props.data ? /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
    state: "statusForeground",
    selected: props.value,
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
  })) : '-');
};

process.env.NODE_ENV !== "production" ? DropdownStateRenderer.propTypes = {
  style: _propTypes["default"].object,
  status: _propTypes["default"].string,
  label: _propTypes["default"].string
} : void 0;
var _default = DropdownStateRenderer;
exports["default"] = _default;