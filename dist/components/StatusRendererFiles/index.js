"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var StatusRenderer = function StatusRenderer(props) {
  var _status$props$value, _status$props$value2;

  var status = {
    "gerado com erro": {
      label: 'Gerado com erro',
      state: 'danger'
    },
    "gerado com sucesso": {
      label: 'Gerado com sucesso',
      state: 'success'
    },
    "processado com erro": {
      label: 'Processado com erro',
      state: 'danger'
    },
    "processado com sucesso": {
      label: 'Processado com sucesso',
      state: 'success'
    },
    "enviado com erro": {
      label: 'Enviado com erro',
      state: 'danger'
    },
    "enviado com sucesso": {
      label: 'Enviado com sucesso',
      state: 'success'
    },
    "recebido com erro": {
      label: 'Recebido com erro',
      state: 'danger'
    },
    "recebido com sucesso": {
      label: 'Recebido com sucesso',
      state: 'success'
    },
    "aguardando arquivo": {
      label: 'Aguardando arquivo',
      state: 'warning'
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "statusRenderer ".concat((_status$props$value = status[props.value]) === null || _status$props$value === void 0 ? void 0 : _status$props$value.state)
  }, (_status$props$value2 = status[props.value]) === null || _status$props$value2 === void 0 ? void 0 : _status$props$value2.label);
};

process.env.NODE_ENV !== "production" ? StatusRenderer.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = StatusRenderer;
exports["default"] = _default;