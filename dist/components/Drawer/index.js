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

var Drawer = function Drawer(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$handleClickToUnS = _ref.handleClickToUnShow,
      handleClickToUnShow = _ref$handleClickToUnS === void 0 ? function () {} : _ref$handleClickToUnS,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? false : _ref$shadow;
  var callback = (0, _react.useCallback)(function (e) {
    var indicator = true;
    e.path.forEach(function (p) {
      if (p.id === 'drawerElement' || p.className === 'modalWrapper') {
        indicator = false;
      }
    });

    if (indicator) {
      handleClickToUnShow();
      document.removeEventListener('mousedown', callback);
    }
  });
  (0, _react.useEffect)(function () {
    if (show) {
      document.addEventListener('mousedown', callback);
    }

    return function () {
      document.removeEventListener('mousedown', callback);
    };
  }, [callback, handleClickToUnShow, show]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "".concat(show ? 'drawer show' : 'drawer', " ").concat(shadow ? 'shadow' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "drawerElement"
  }, show && children));
};

process.env.NODE_ENV !== "production" ? Drawer.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = Drawer;
exports["default"] = _default;