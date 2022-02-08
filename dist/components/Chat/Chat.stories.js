"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondary = exports.chat = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'Chat',
  component: _.Chat,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var chat = function chat() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: '#171819'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Chat, {
    style: {
      width: '700px'
    }
  }));
};

exports.chat = chat;

var secondary = function secondary() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: '#171819'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Chat, {
    style: {
      width: '700px'
    },
    messages: [],
    clientSide: true
  }));
};

exports.secondary = secondary;