"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _dateFns = require("date-fns");

var map = {
  em_leilao: {
    label: 'Em leilão',
    state: 'warning'
  },
  cancelada: {
    label: 'Cancelado',
    state: 'neutral'
  },
  aguardando_registro: {
    label: 'Aguardando registro',
    state: 'warning'
  },
  aguardando_liquidacao: {
    label: 'Aguardando liquidação',
    state: 'warning'
  },
  aguardando_saldo: {
    label: 'Aguardando saldo',
    state: 'warning'
  },
  concluida: {
    label: 'Concluída',
    state: 'success'
  },
  aguardando_confirmacao_ec: {
    label: 'Aguardando confirmação',
    state: 'warning'
  },
  cancelado_manual: {
    label: 'Cancelado manual',
    state: 'neutral'
  },
  aguardando_aprovacao_operador: {
    label: 'Aguardando aprovação',
    state: 'warning'
  }
};

var TimerCellRenderer = function TimerCellRenderer(props) {
  var _useState = (0, _react.useState)({
    label: '',
    state: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  (0, _react.useEffect)(function () {
    var processLabel = function processLabel(data) {
      // Padroniza hora para 00H00M
      var minutosAbsolutos = data.minutosLiquidacaoPrevista;
      var dateToPay = new Date(data.dataRegistro);
      dateToPay.setMinutes(dateToPay.getMinutes() + minutosAbsolutos);
      var atualDate = new Date();
      var state = dateToPay > atualDate ? 'warning' : 'danger';
      var label = (0, _dateFns.intervalToDuration)({
        start: atualDate,
        end: dateToPay
      });
      var days = label.days > 9 ? label.days : "0".concat(label.days);
      var hours = label.hours > 9 ? label.hours : "0".concat(label.hours);
      var minutes = label.minutes > 9 ? label.minutes : "0".concat(label.minutes);
      var time = label.days > 0 ? "".concat(days, "D").concat(hours, "H").concat(minutes, "M") : "".concat(hours, "H").concat(minutes, "M");
      return [time, state];
    };

    if (props.data) {
      var situacao = props.data.situacao;
      var _map$situacao = map[situacao],
          label = _map$situacao.label,
          state = _map$situacao.state;

      if (situacao === 'aguardando_liquidacao') {
        var _processLabel = processLabel(props.data);

        var _processLabel2 = (0, _slicedToArray2["default"])(_processLabel, 2);

        label = _processLabel2[0];
        state = _processLabel2[1];
      }

      setParams({
        label: label,
        state: state
      });
    }
  }, [props]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.data ? /*#__PURE__*/_react["default"].createElement(_.TimerCell, {
    label: params.label,
    state: params.state
  }) : '-');
};

process.env.NODE_ENV !== "production" ? TimerCellRenderer.propTypes = {
  style: _propTypes["default"].object,
  state: _propTypes["default"].string,
  label: _propTypes["default"].string
} : void 0;
var _default = TimerCellRenderer;
exports["default"] = _default;