"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DropdownState = function DropdownState(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'primary' : _ref$state;
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "DropdownStateContainer ".concat(state)
  }, data.map(function (e, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      onMouseDown: function onMouseDown() {
        return onChange(index);
      },
      id: "dropdownState#".concat(index)
    }, e.label);
  }));
};

process.env.NODE_ENV !== "production" ? DropdownState.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = DropdownState;
exports["default"] = _default;