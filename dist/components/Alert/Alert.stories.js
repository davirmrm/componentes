"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'Alert',
  component: _.Alert,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var alert = function alert() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: '#171819'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    label: "clique aqui :)",
    onClick: function onClick() {
      return setShow(true);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Alert, {
    show: show,
    closeAlert: function closeAlert() {
      setShow(false);
    },
    state: "danger",
    label: "Erro ao fazer login",
    buttonLabel: "Entendi"
  }));
};

exports.alert = alert;