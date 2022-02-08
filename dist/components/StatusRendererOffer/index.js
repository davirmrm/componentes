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

var StatusRendererOffer = function StatusRendererOffer(props) {
  var _useState = (0, _react.useState)({
    state: '',
    label: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      localData = _useState2[0],
      setLocalData = _useState2[1];

  var map = {
    finalizada: {
      state: 'success',
      label: 'Finalizada'
    },
    pendente: {
      state: 'warning',
      label: 'Pendente'
    },
    cancelada: {
      state: 'danger',
      label: 'Cancelada'
    }
  };
  (0, _react.useEffect)(function () {
    if (props.data) {
      setLocalData(map[props.value]);
    }
  }, [props]);
  return /*#__PURE__*/_react["default"].createElement("span", {
    testid: props === null || props === void 0 ? void 0 : props.testid,
    className: "statusRendererOffer"
  }, props.data ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    className: localData === null || localData === void 0 ? void 0 : localData.state,
    icon: (localData === null || localData === void 0 ? void 0 : localData.state) === 'success' ? 'Check Circle' : (localData === null || localData === void 0 ? void 0 : localData.state) === 'neutral' ? 'Alert' : 'Clock',
    size: "1"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: localData === null || localData === void 0 ? void 0 : localData.state
  }, localData === null || localData === void 0 ? void 0 : localData.label)) : '-');
};

process.env.NODE_ENV !== "production" ? StatusRendererOffer.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = StatusRendererOffer;
exports["default"] = _default;