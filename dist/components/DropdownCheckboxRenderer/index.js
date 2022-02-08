"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var DropdownCheckboxRenderer = function DropdownCheckboxRenderer(props) {
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
      setData(props.data.dropdownCheckboxData);
    }
  }, [props.data]);
  return /*#__PURE__*/_react["default"].createElement("span", {
    testid: props === null || props === void 0 ? void 0 : props.testid,
    className: "dropdownCheckboxRenderer"
  }, props.data ? /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
    title: props.value,
    label: "",
    toggle: toggle,
    onClick: function onClick() {
      setToggle(!toggle);
    },
    state: "secondary"
  }, /*#__PURE__*/_react["default"].createElement(_.DropdownCheckboxList, {
    state: "secondary",
    data: data,
    onChange: function onChange(index) {
      var newData = (0, _toConsumableArray2["default"])(data);
      newData[index] = (0, _extends2["default"])({}, data[index], {
        check: !data[index].check
      });
      setData(newData);
    },
    onClickCancel: function onClickCancel() {
      setToggle(!toggle);
      setData(initialData);
    },
    onClickConfirm: function onClickConfirm() {
      setToggle(!toggle);
      document.dispatchEvent(new CustomEvent('dropdownCheckboxEvent', {
        detail: {
          line: props.data,
          data: data
        }
      }));
    }
  })) : '-');
};

process.env.NODE_ENV !== "production" ? DropdownCheckboxRenderer.propTypes = {
  style: _propTypes["default"].object,
  status: _propTypes["default"].string,
  label: _propTypes["default"].string
} : void 0;
var _default = DropdownCheckboxRenderer;
exports["default"] = _default;