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

var IconCellRenderer = function IconCellRenderer(props) {
  var processClick = function processClick() {
    var field = '';
    Object.keys(props.data).find(function (k) {
      if (props.data[k] === props.value) {
        field = k;
        return true;
      }

      return false;
    });
    document.dispatchEvent(new CustomEvent('clickOnIconCell', {
      detail: {
        data: props.data,
        field: field
      }
    }));
  };

  return /*#__PURE__*/_react["default"].createElement("span", {
    testid: props === null || props === void 0 ? void 0 : props.testid,
    className: "iconCell",
    onClick: function onClick() {
      return processClick();
    }
  }, props.data ? /*#__PURE__*/_react["default"].createElement(_.Icon, {
    icon: props.value,
    size: "1",
    className: props.data.className ? props.data.className : ''
  }) : '-');
};

process.env.NODE_ENV !== "production" ? IconCellRenderer.propTypes = {
  style: _propTypes["default"].object,
  status: _propTypes["default"].string,
  label: _propTypes["default"].string
} : void 0;
var _default = IconCellRenderer;
exports["default"] = _default;