"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sprites = _interopRequireDefault(require("../../assets/icons/sprites.svg"));

var Icon = function Icon(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1.25 : _ref$size,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      style = _ref.style;

  var processSize = function processSize() {
    if ((0, _typeof2["default"])(size) === 'object') {
      return {
        width: "".concat(size === null || size === void 0 ? void 0 : size.width, "rem"),
        minWidth: "".concat(size === null || size === void 0 ? void 0 : size.width, "rem")
      };
    } else {
      return {
        width: "".concat(size, "rem"),
        height: "".concat(size, "rem"),
        minWidth: "".concat(size, "rem"),
        minHeight: "".concat(size, "rem")
      };
    }
  };

  return /*#__PURE__*/_react["default"].createElement("svg", {
    testid: testid,
    className: "".concat(className, " icon"),
    viewBox: "0 0 24 24",
    onClick: function onClick(e) {
      return _onClick(e);
    },
    style: (0, _extends2["default"])({}, style, processSize())
  }, /*#__PURE__*/_react["default"].createElement("use", {
    xlinkHref: "".concat(_sprites["default"], "#").concat(icon)
  }));
};

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  className: _propTypes["default"].string,
  icon: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  style: _propTypes["default"].object
} : void 0;
var _default = Icon;
exports["default"] = _default;