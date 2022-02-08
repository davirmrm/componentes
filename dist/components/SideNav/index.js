"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _style = _interopRequireDefault(require("./style.scss"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _ref2 = /*#__PURE__*/_react["default"].createElement(_reactTooltip["default"], {
  place: "right",
  effect: "solid",
  delayShow: 250,
  className: "tooltip"
});

var SideNav = function SideNav(_ref) {
  var version = _ref.version,
      env = _ref.env,
      _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [{
    id: '1',
    icon: 'Home',
    route: '/index',
    tooltip: 'Home'
  }, {
    id: '2',
    icon: 'Operacoes',
    route: '/index/operacoes',
    tooltip: 'Operações'
  }, {
    id: '3',
    icon: 'Taxas',
    route: '/index/taxas',
    tooltip: 'Taxas'
  }, {
    id: '1321',
    icon: 'Taxas',
    route: '/index/taxas',
    tooltip: 'Taxas'
  }, {
    id: '654654',
    icon: 'Taxas',
    route: '/index/taxas',
    tooltip: 'Taxas'
  }, {
    id: '321312',
    icon: 'Taxas',
    route: '/index/taxas',
    tooltip: 'Taxas'
  }, {
    id: '354354',
    icon: 'Taxas',
    route: '/index/taxas',
    tooltip: 'Taxas'
  }, {
    id: '41123',
    icon: 'Taxas',
    route: '/index/taxas',
    tooltip: 'Taxas'
  }, {
    id: '332',
    icon: 'Taxas',
    route: '/index/taxas',
    tooltip: 'Taxas'
  }, {
    id: '4',
    icon: 'Logout',
    route: 'logout',
    tooltip: 'Logout'
  }] : _ref$data,
      _ref$useNavLink = _ref.useNavLink,
      useNavLink = _ref$useNavLink === void 0 ? false : _ref$useNavLink,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$logo = _ref.logo,
      logo = _ref$logo === void 0 ? null : _ref$logo,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'primary' : _ref$state;

  return /*#__PURE__*/_react["default"].createElement("aside", {
    testid: testid,
    className: "sideNav",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sideNavHeader"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: logo,
    className: "logo ".concat(state)
  }), env && /*#__PURE__*/_react["default"].createElement("div", {
    className: "env"
  }, env), version && /*#__PURE__*/_react["default"].createElement("div", {
    className: "version"
  }, version)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "navScroll"
  }, useNavLink ? data.map(function (e) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
      exact: true,
      key: e.id,
      className: "linkBox",
      activeClassName: "sideNavLinkActive",
      to: e.route
    }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
      className: "sideNavLink",
      icon: e.icon,
      size: "1.75"
    }));
  }) : data.map(function (e) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      "data-tip": e.tooltip,
      className: "linkBox ".concat(window.location.pathname.replace(/(\/)$/, '') === e.route ? 'sideNavLinkActive' : '', " ").concat(e.icon === 'Logout' ? 'logout' : ''),
      key: e.id,
      onClick: function onClick() {
        return _onClick(e.route);
      }
    }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
      className: "sideNavLink",
      icon: e.icon,
      size: "1.75"
    }));
  })), _ref2);
};

process.env.NODE_ENV !== "production" ? SideNav.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = SideNav;
exports["default"] = _default;