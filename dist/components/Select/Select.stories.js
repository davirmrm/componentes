"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mcc = exports.Default = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'Select',
  component: _.Select,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var Default = function Default() {
  var _useState = (0, _react.useState)({
    label: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      setSelected({
        label: 'Valor injetado'
      });
    }, 3000);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Select, {
    style: {
      width: '50%'
    },
    data: [{
      label: 'teste 1',
      id: 1
    }, {
      label: 'teste 2',
      id: 2
    }],
    searchType: "client",
    placeholder: "placeholder",
    selected: selected,
    iconLeft: (0, _addonKnobs.select)('Ícone a esquerda', ['Search', null], 'Search'),
    disabled: (0, _addonKnobs["boolean"])('Desativado', false),
    state: (0, _addonKnobs.select)('Qual estado', ['primary', 'secondary'], 'secondary'),
    onSelect: function onSelect(e) {
      return console.log(e);
    }
  }));
};

exports.Default = Default;
var data = [{
  "situacao": "valido",
  "politicas": [{
    "id": -8011,
    "situacao": "valido",
    "idMcc": 952,
    "codigoMcc": "9999",
    "descricaoMcc": "GERAL",
    "label": "GERAL",
    "dataAlteracao": "2020-07-16T21:53:25.468356Z"
  }, {
    "id": -8011,
    "situacao": "valido",
    "idMcc": 952,
    "codigoMcc": "9999",
    "descricaoMcc": "CLIENT DEFINED MCC",
    "label": "CLIENT DEFINED MCC",
    "dataAlteracao": "2020-07-16T21:53:25.468356Z"
  }]
}, {
  "situacao": "invalido",
  "politicas": [{
    "id": -8011,
    "situacao": "valido",
    "idMcc": 952,
    "codigoMcc": "9999",
    "descricaoMcc": "OUTRO MCC",
    "label": "OUTRO MCC",
    "dataAlteracao": "2020-07-16T21:53:25.468356Z"
  }, {
    "id": -8011,
    "situacao": "valido",
    "idMcc": 952,
    "codigoMcc": "9999",
    "descricaoMcc": "CLIENT DEFINED MCC",
    "label": "CLIENT DEFINED MCC",
    "dataAlteracao": "2020-07-16T21:53:25.468356Z"
  }]
}];

var Mcc = function Mcc() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'black'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Select, {
    style: {
      width: '50%'
    },
    data: data,
    label: "Taxas MCC",
    disabled: (0, _addonKnobs["boolean"])('Desativado', false),
    state: (0, _addonKnobs.select)('Qual estado', ['primary', 'secondary'], 'secondary'),
    onSelect: function onSelect(e) {
      return console.log(e);
    },
    mcc: true,
    selected: {
      label: 'Política geral',
      id: 0
    }
  }));
};

exports.Mcc = Mcc;