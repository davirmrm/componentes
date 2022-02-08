"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moderateIf = void 0;
var moderateIf = {
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
exports.moderateIf = moderateIf;