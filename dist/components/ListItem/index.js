"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _ref2 = /*#__PURE__*/_react["default"].createElement("div", {
  className: "separator"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("div", {
  className: "separator"
});

var ListItem = function ListItem(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$isHeading = _ref.isHeading,
      isHeading = _ref$isHeading === void 0 ? true : _ref$isHeading,
      _ref$clickable = _ref.clickable,
      clickable = _ref$clickable === void 0 ? false : _ref$clickable,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon;

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    style: style,
    className: "listItem ".concat(clickable ? 'click' : '')
  }, isHeading ? data.map(function (e, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "element"
    }, /*#__PURE__*/_react["default"].createElement(_.InfoItemHeading, (0, _extends2["default"])({
      onClick: function onClick() {
        if (clickable) {
          _onClick(e);
        }
      },
      key: e.id
    }, e)), icon !== null && /*#__PURE__*/_react["default"].createElement(_.Icon, {
      icon: icon,
      onClick: function onClick() {
        if (clickable) {
          _onClick(e);
        }
      }
    })), index === data.length - 1 ? '' : _ref2);
  }) : data.map(function (e, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "element"
    }, /*#__PURE__*/_react["default"].createElement(_.InfoItem, (0, _extends2["default"])({
      onClick: function onClick() {
        if (clickable) {
          _onClick(e);
        }
      },
      key: e.id
    }, e)), icon !== null && /*#__PURE__*/_react["default"].createElement(_.Icon, {
      icon: icon,
      onClick: function onClick() {
        if (clickable) {
          _onClick(e);
        }
      }
    })), index === data.length - 1 ? '' : _ref3);
  }));
};

process.env.NODE_ENV !== "production" ? ListItem.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = ListItem;
exports["default"] = _default;