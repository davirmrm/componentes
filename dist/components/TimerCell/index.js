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

var TimerCell = function TimerCell(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'success' : _ref$state,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "timerCell timerCell-".concat(state),
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    icon: state === 'success' ? 'Check Circle' : state === 'neutral' ? 'Alert' : 'Clock',
    size: "1"
  }), /*#__PURE__*/_react["default"].createElement("span", null, label));
};

process.env.NODE_ENV !== "production" ? TimerCell.propTypes = {
  style: _propTypes["default"].object,
  state: _propTypes["default"].string,
  label: _propTypes["default"].string
} : void 0;
var _default = TimerCell;
exports["default"] = _default;