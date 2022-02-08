"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestToBackEnd = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sortAndFilter = require("./sortAndFilter");

var requestToBackEnd = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, params) {
    var res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {
              var dataAfterSortingAndFiltering = (0, _sortAndFilter.sortAndFilter)(data, params.sortModel, params.filterModel);
              var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
              var lastRow = -1;

              if (dataAfterSortingAndFiltering.length <= params.endRow) {
                lastRow = dataAfterSortingAndFiltering.length;
              }

              resolve({
                rowsThisPage: rowsThisPage,
                lastRow: lastRow
              });
            });

          case 2:
            res = _context.sent;
            return _context.abrupt("return", []);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function requestToBackEnd(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.requestToBackEnd = requestToBackEnd;