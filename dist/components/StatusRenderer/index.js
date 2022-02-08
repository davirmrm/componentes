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

var StatusRenderer = function StatusRenderer(props) {
  var _useState = (0, _react.useState)({
    state: '',
    label: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      localData = _useState2[0],
      setLocalData = _useState2[1];

  var map = {
    ativo: {
      state: 'success',
      label: 'Ativo'
    },
    pendente: {
      state: 'warning',
      label: 'pendente'
    },
    rejeitado: {
      state: 'danger',
      label: 'rejeitado'
    },
    inativo: {
      state: 'inative',
      label: 'inativo'
    },
    carga_automatica: {
      state: 'success',
      label: 'Carga automática'
    }
  };
  (0, _react.useEffect)(function () {
    if (props.data) {
      setLocalData(map[props.value]);
    }
  }, [props]);
  return /*#__PURE__*/_react["default"].createElement("span", {
    testid: props === null || props === void 0 ? void 0 : props.testid,
    className: "statusRenderer"
  }, props.data ? /*#__PURE__*/_react["default"].createElement("span", {
    className: localData === null || localData === void 0 ? void 0 : localData.state
  }, localData === null || localData === void 0 ? void 0 : localData.label) : '-');
};

process.env.NODE_ENV !== "production" ? StatusRenderer.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = StatusRenderer;
exports["default"] = _default;