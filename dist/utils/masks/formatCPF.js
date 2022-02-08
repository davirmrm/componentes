"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var _default = function _default(cpf) {
  cpf = cpf.replace(/[^\d]/g, '');
  cpf = cpf.substring(0, 11);

  if (cpf.length > 3) {
    cpf = cpf.replace(/^(\d{3})(\d*)/, '$1.$2');
  }

  if (cpf.length > 7) {
    cpf = cpf.replace(/^(.{7})(\d*)/, '$1.$2');
  }

  if (cpf.length > 11) {
    cpf = cpf.replace(/^(.{11})(\d*)/, '$1-$2');
  }

  return cpf;
}; // format('00000123456')
// format('0000000000')
// format('000000000000000')
// format('123456')
// format('000321700')
// format('000846600')


exports["default"] = _default;