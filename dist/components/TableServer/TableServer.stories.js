"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _data = require("./data");

var _requestToBackEnd = require("./requestToBackEnd");

var _default = {
  title: 'TableServer',
  component: _.TableServer,
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
  }, /*#__PURE__*/_react["default"].createElement(_.TableServer, {
    ref: table,
    editable: true,
    pagination: true,
    columnDef: _data.columnDefExample,
    request: /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _requestToBackEnd.requestToBackEnd)(_data.dataExample, params);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  }));
};

exports.Default = Default;