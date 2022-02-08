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

var Card = function Card(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$iconLeft = _ref.iconLeft,
      iconLeft = _ref$iconLeft === void 0 ? null : _ref$iconLeft,
      _ref$iconRight = _ref.iconRight,
      iconRight = _ref$iconRight === void 0 ? null : _ref$iconRight,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "card",
    style: style,
    onClick: function onClick(e) {
      return _onClick(e);
    }
  }, iconLeft && /*#__PURE__*/_react["default"].createElement(_.Icon, {
    className: "iconLeft ".concat(checked ? 'checked' : ''),
    icon: iconLeft,
    size: "1.5"
  }), /*#__PURE__*/_react["default"].createElement("h3", null, label), iconRight && /*#__PURE__*/_react["default"].createElement(_.Icon, {
    className: "iconRight",
    icon: iconRight,
    size: "1.5"
  }));
};

process.env.NODE_ENV !== "production" ? Card.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = Card;
exports["default"] = _default;