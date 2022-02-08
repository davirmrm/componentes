"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabButtonNavigator = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'TabButtonNavigator',
  component: _.TabButtonNavigator,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var tabButtonNavigator = function tabButtonNavigator() {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.TabButtonNavigator, {
    data: [{
      label: 'Op 1'
    }, {
      label: 'Op 2'
    }, {
      label: 'Op 3'
    }],
    onClick: function onClick(s) {
      setSelected(s);
    },
    selected: selected
  }));
};

exports.tabButtonNavigator = tabButtonNavigator;