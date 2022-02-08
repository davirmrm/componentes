"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historicTypeTow = exports.historic = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'Historic',
  component: _.Historic,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var data = [{
  data: '2020-07-09T13:46:03.959Z',
  nome: 'Título da ação',
  responsavel: 'Nome do usuário que executou a ação'
}, {
  data: '2020-07-09T13:46:03.959Z',
  nome: 'Título da ação',
  responsavel: 'Nome do usuário que executou a ação'
}, {
  data: '2020-07-09T13:46:03.959Z',
  nome: 'Título da ação',
  responsavel: 'Nome do usuário que executou a ação'
}];
var dataTwo = [{
  data: '2020-07-09T13:46:03.959Z',
  status: 'Processado com sucesso',
  state: 'success'
}, {
  data: '2020-07-09T13:46:03.959Z',
  status: 'Erro ao gerar arquivo',
  state: 'danger'
}, {
  data: '2020-07-09T13:46:03.959Z',
  status: 'Erro no processamento',
  state: 'danger'
}];

var _ref = /*#__PURE__*/_react["default"].createElement(_.Historic, {
  historic: data
});

var historic = function historic() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, _ref);
};

exports.historic = historic;

var _ref2 = /*#__PURE__*/_react["default"].createElement(_.Historic, {
  historic: dataTwo,
  type: "two"
});

var historicTypeTow = function historicTypeTow() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, _ref2);
};

exports.historicTypeTow = historicTypeTow;