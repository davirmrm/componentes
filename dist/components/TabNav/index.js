"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ = require("../");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style.scss"));

var TabNav = function TabNav(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [{
    id: '1',
    label: 'Histórico',
    route: 'historico'
  }, {
    id: '2',
    label: 'Liquidação',
    route: 'liquidacao'
  }, {
    id: '3',
    label: 'Estabelecimento Comercial',
    route: 'comercial'
  }, {
    id: '4',
    label: 'Recebíveis',
    route: 'recebiveis',
    counter: '8'
  }] : _ref$data,
      _ref$useNavLink = _ref.useNavLink,
      useNavLink = _ref$useNavLink === void 0 ? false : _ref$useNavLink,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? '' : _ref$selected;

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "tabNav",
    style: style
  }, useNavLink ? data.map(function (e) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
      exact: true,
      key: e.id,
      className: "linkBox",
      activeClassName: "tabNavLinkActive",
      to: e.route
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tabNavLink"
    }, e.label));
  }) : data.map(function (e) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "linkBox ".concat(selected === e.route ? "tabNavLinkActive" : ""),
      key: e.id,
      onClick: function onClick() {
        return _onClick(e.route);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tabNavLink"
    }, e.label, e.counter && /*#__PURE__*/_react["default"].createElement(_.Counter, {
      label: e.counter
    })));
  }));
};

process.env.NODE_ENV !== "production" ? TabNav.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = TabNav;
exports["default"] = _default;