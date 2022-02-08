"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _masks = require("../../utils/masks");

var _ref2 = /*#__PURE__*/_react["default"].createElement("div", {
  className: "markBall"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("div", {
  className: "markDash"
});

var Historic = function Historic(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$historic = _ref.historic,
      historic = _ref$historic === void 0 ? [] : _ref$historic,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'one' : _ref$type;

  var renderInfo = function renderInfo(e) {
    if (type === 'one') {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "text"
      }, /*#__PURE__*/_react["default"].createElement("span", null, (0, _masks.dateToDDMMYYYY)(new Date(e.data), true)), /*#__PURE__*/_react["default"].createElement("h3", null, e.nome), e.responsavel);
    }

    if (type === 'two') {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "text status"
      }, /*#__PURE__*/_react["default"].createElement("span", null, (0, _masks.dateToDDMMYYYY)(new Date(e.data), true)), /*#__PURE__*/_react["default"].createElement("h3", {
        className: e.state
      }, e.status));
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "historicContainer"
  }, historic.map(function (e, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "historicItem",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "mark"
    }, _ref2, index === historic.length - 1 ? '' : _ref3), renderInfo(e));
  }));
};

process.env.NODE_ENV !== "production" ? Historic.propTypes = {
  style: _propTypes["default"].object,
  historic: _propTypes["default"].array
} : void 0;
var _default = Historic;
exports["default"] = _default;