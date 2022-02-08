"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _default = {
  title: 'Header',
  component: _.Header,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var header = function header() {
  return /*#__PURE__*/_react["default"].createElement(_.Header, {
    isOnline: (0, _addonKnobs["boolean"])('Online', true),
    time: new Date('2020', '05', '15', '20', '15', '23', '00'),
    totalValue: "100.000,00",
    percent: (0, _addonKnobs.text)('Porcentagem', 50),
    ifname: "Crevisa",
    username: "maria das neves",
    ifList: [{
      nome: 'if 1',
      id: 1321
    }, {
      nome: 'if 32113123123 1 312 321 312 21 313 12 12312',
      id: 431321
    }, {
      nome: 'if 3',
      id: 13215
    }],
    selectNewIf: function selectNewIf(e) {
      return console.log(e);
    }
  });
};

exports.header = header;