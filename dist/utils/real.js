"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.float2Int = exports.brl2Int = exports.int2Brl = void 0;

var int2Brl = function int2Brl(v) {
  return parseFloat(v / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
};

exports.int2Brl = int2Brl;

var brl2Int = function brl2Int(v) {
  return parseInt(v.replace(/(\D)/g, ''), 10);
};

exports.brl2Int = brl2Int;

var float2Int = function float2Int(v) {
  return v === '0' ? undefined : v.indexOf('.') < v.length - 2 ? v.replace('.', '') : v.length === 1 ? "00".concat(v) : parseFloat(v).toFixed(2) * 100;
};

exports.float2Int = float2Int;