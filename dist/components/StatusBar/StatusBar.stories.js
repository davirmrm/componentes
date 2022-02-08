"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusBar = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _dist = require("../../../dist");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'StatusBar',
  component: _dist.StatusBar,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var statusBar = function statusBar() {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      timer = _useState2[0],
      setTimer = _useState2[1];

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      setTimer(new Date('2020', '12', '01', '18', '27', '0', '00'));
    }, 4000);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], null, /*#__PURE__*/_react["default"].createElement(_dist.StatusBar, {
    isOnline: (0, _addonKnobs["boolean"])('Esta online', true),
    time: timer
  }));
};

exports.statusBar = statusBar;