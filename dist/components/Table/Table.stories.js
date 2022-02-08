"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _data = require("./data");

var _default = {
  title: 'Table',
  component: _.Table,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var Default = function Default() {
  var table = (0, _react.useRef)();

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      setData(_data.dataExample);
    }, 3000);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Table, {
    ref: table,
    editable: true,
    pagination: true,
    data: data,
    columnDef: _data.columnDefExample,
    theme: (0, _addonKnobs.select)("Selecione o tema da tabela", ['default', 'dark', 'light'])
  }));
};

exports.Default = Default;