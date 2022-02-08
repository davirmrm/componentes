"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestToBackEnd = void 0;

var _sortAndFilter = require("./sortAndFilter");

var requestToBackEnd = function requestToBackEnd(data, params) {
  var dataAfterSortingAndFiltering = (0, _sortAndFilter.sortAndFilter)(data, params.sortModel, params.filterModel);
  var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
  var lastRow = -1;

  if (dataAfterSortingAndFiltering.length <= params.endRow) {
    lastRow = dataAfterSortingAndFiltering.length;
  }

  return {
    rowsThisPage: rowsThisPage,
    lastRow: lastRow
  };
};

exports.requestToBackEnd = requestToBackEnd;