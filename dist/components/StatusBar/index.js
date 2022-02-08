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

var _dateFns = require("date-fns");

var _ref2 = /*#__PURE__*/_react["default"].createElement("p", null, "Sistema");

var StatusBar = function StatusBar(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$isOnline = _ref.isOnline,
      isOnline = _ref$isOnline === void 0 ? true : _ref$isOnline,
      _ref$time = _ref.time,
      time = _ref$time === void 0 ? null : _ref$time,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? function () {} : _ref$timeout;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      timeToShow = _useState2[0],
      setTimeToShow = _useState2[1];

  var pointCounter = '';
  var globalInterval = null;
  (0, _react.useEffect)(function () {
    if (time === null) {
      setTimeToShow('-');
      return;
    }

    clearInterval(globalInterval);
    var interval = null;
    var result = null;
    interval = setInterval(function () {
      var date = new Date();

      try {
        result = (0, _dateFns.intervalToDuration)({
          start: date,
          end: new Date(time)
        });

        if (result.hours + result.minutes + result.seconds === 0) {
          timeout();
        }

        setTimeToShow("".concat(result.hours, "h").concat(result.minutes, "m").concat(result.seconds, "s"));
      } catch (err) {
        pointCounter = pointCounter + '.';

        if (pointCounter.length > 3) {
          pointCounter = '';
        }

        setTimeToShow(pointCounter);
      }
    }, 1000);
    globalInterval = interval;
    return function () {
      return clearInterval(interval);
    };
  }, [time]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "statusBar"
  }, _ref2, /*#__PURE__*/_react["default"].createElement("div", {
    className: "statusBar_content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: isOnline ? 'online' : 'offline'
  }), isOnline ? 'online' : 'offline', " | ", isOnline ? 'fechamento' : 'abertura', " em ", timeToShow));
};

process.env.NODE_ENV !== "production" ? StatusBar.propTypes = {
  style: _propTypes["default"].object,
  isOnline: _propTypes["default"].bool
} : void 0;

var _default = /*#__PURE__*/_react["default"].memo(StatusBar);

exports["default"] = _default;