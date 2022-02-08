"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var StatusRendererModerateBackoffice = function StatusRendererModerateBackoffice(props) {
  var _status$props$value, _status$props$value2;

  var status = {
    aprovado: {
      label: 'Ativo/Aprovado',
      state: 'success'
    },
    pendente: {
      label: 'Pendente',
      state: 'warning'
    },
    rejeitado: {
      label: 'Rejeitado',
      state: 'danger'
    },
    em_preenchimento: {
      label: 'Em preenchimento',
      state: 'inative'
    },
    em_analise_de_aprovacao: {
      label: 'Em análise de aprovação',
      state: 'warning'
    },
    em_analise_de_alteracao: {
      label: 'Em análise de alteração',
      state: 'warning'
    },
    inativo: {
      label: 'Inativo',
      state: 'inative'
    },
    excluido: {
      label: 'Excluído',
      state: 'inative'
    },
    bloqueado: {
      label: 'Bloqueado',
      state: 'danger'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "statusRenderer ".concat((_status$props$value = status[props.value]) === null || _status$props$value === void 0 ? void 0 : _status$props$value.state)
  }, (_status$props$value2 = status[props.value]) === null || _status$props$value2 === void 0 ? void 0 : _status$props$value2.label);
};

process.env.NODE_ENV !== "production" ? StatusRendererModerateBackoffice.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = StatusRendererModerateBackoffice;
exports["default"] = _default;