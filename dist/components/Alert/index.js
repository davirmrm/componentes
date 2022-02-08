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

var _ = require("../");

var Alert = function Alert(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'success' : _ref$state,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Texto' : _ref$label,
      _ref$buttonLabel = _ref.buttonLabel,
      buttonLabel = _ref$buttonLabel === void 0 ? 'ok' : _ref$buttonLabel,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$closeAlert = _ref.closeAlert,
      closeAlert = _ref$closeAlert === void 0 ? function () {} : _ref$closeAlert;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alert ".concat(show ? '' : 'hidden')
  }, /*#__PURE__*/_react["default"].createElement(_.Modal, {
    testid: testid,
    show: show,
    closeModal: function closeModal() {
      return closeAlert();
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    className: state,
    icon: state === 'success' ? 'Check Circle' : state === 'warning' ? 'Alert Circle' : 'Alert',
    size: "5"
  }), /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_.Button, {
    label: buttonLabel,
    state: "default",
    onClick: function onClick() {
      return closeAlert();
    }
  })));
};

process.env.NODE_ENV !== "production" ? Alert.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = Alert;
exports["default"] = _default;