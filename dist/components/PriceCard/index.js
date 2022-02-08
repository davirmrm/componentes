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

var _real = require("../../utils/real");

var _masks = require("../../utils/masks");

var _round = require("../../utils/round");

var PriceCard = function PriceCard(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      _ref$rate = _ref.rate,
      rate = _ref$rate === void 0 ? null : _ref$rate,
      _ref$time = _ref.time,
      time = _ref$time === void 0 ? null : _ref$time,
      _ref$timeGoesZero = _ref.timeGoesZero,
      timeGoesZero = _ref$timeGoesZero === void 0 ? function () {} : _ref$timeGoesZero,
      _ref$dayCount = _ref.dayCount,
      dayCount = _ref$dayCount === void 0 ? null : _ref$dayCount,
      _ref$mcc = _ref.mcc,
      mcc = _ref$mcc === void 0 ? null : _ref$mcc,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? null : _ref$value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? null : _ref$id,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'danger' : _ref$status,
      _ref$handleClickToUns = _ref.handleClickToUnselect,
      handleClickToUnselect = _ref$handleClickToUns === void 0 ? function () {} : _ref$handleClickToUns,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 5 : _ref$timeout,
      _ref$forceTemporaryBl = _ref.forceTemporaryBlock,
      forceTemporaryBlock = _ref$forceTemporaryBl === void 0 ? null : _ref$forceTemporaryBl;

  var _useState = (0, _react.useState)(rate),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      updatedRate = _useState2[0],
      setUpdatedRate = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      timeoutToBlock = _useState4[0],
      setTimeoutToBlock = _useState4[1];

  var timeToCloseHelper = null;

  var _useState5 = (0, _react.useState)(timeToCloseHelper),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      timerToClose = _useState6[0],
      setTimerToClose = _useState6[1];

  var timer = null;
  var intervalOnlineRate = null;
  (0, _react.useEffect)(function () {
    setUpdatedRate((0, _masks.monetary)(String(rate)));
  }, [setUpdatedRate, selected]);
  (0, _react.useEffect)(function () {
    var now = new Date();
    var interval = null;
    timeToCloseHelper = time.getTime() - now.getTime();

    if (timeToCloseHelper < 0) {
      setTimerToClose(0);
      return;
    }

    if (timeToCloseHelper > 120000) {
      interval = setInterval(function () {
        timeToCloseHelper = timeToCloseHelper - 60000;
        setTimerToClose(timeToCloseHelper);

        if (timeToCloseHelper < 120000) {
          clearInterval(interval);
          interval = setInterval(function () {
            timeToCloseHelper = timeToCloseHelper - 1000;
            setTimerToClose(timeToCloseHelper);

            if (timeToCloseHelper < 0) {
              timeGoesZero();
              clearInterval(interval);
            }
          }, 1000);
        }
      }, 60000);
    } else {
      interval = setInterval(function () {
        timeToCloseHelper = timeToCloseHelper - 1000;
        setTimerToClose(timeToCloseHelper);

        if (timeToCloseHelper < 0) {
          timeGoesZero();
          clearInterval(interval);
        }
      }, 1000);
    }

    setTimerToClose(timeToCloseHelper);
    return function () {
      clearInterval(interval);
    };
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      clearInterval(intervalOnlineRate);
    };
  }, []);
  var callback = (0, _react.useCallback)(function (e) {
    var indicator = true;
    e.path.forEach(function (p) {
      if (p.className && p.className.includes && p.className.includes('priceCard') && p.className.includes('selected') && p.id === "priceCard#".concat(id)) {
        indicator = false;
      }
    });

    if (indicator) {
      handleClickToUnselect();
      document.removeEventListener('mousedown', callback);
    }
  });
  (0, _react.useEffect)(function () {
    if (selected === true) {
      document.addEventListener('mousedown', callback);
    } else {
      document.removeEventListener('mousedown', callback);
    }

    return function () {
      document.removeEventListener('mousedown', callback);
    };
  }, [callback, handleClickToUnselect, id, rate, selected]);

  var temporaryBlock = function temporaryBlock() {
    var initialTimer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeout;
    timer = initialTimer;
    intervalOnlineRate = setInterval(function () {
      if (timer === 1) {
        clearInterval(intervalOnlineRate);
        timer = timeout;
        setTimeoutToBlock(null);
      } else {
        timer = timer - 1;
        setTimeoutToBlock(timer);
      }
    }, 1000);
    setTimeoutToBlock(initialTimer);
  };

  (0, _react.useEffect)(function () {
    if (forceTemporaryBlock) {
      temporaryBlock(forceTemporaryBlock);
    }
  }, [forceTemporaryBlock]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    id: "priceCard#".concat(id),
    style: style,
    className: "priceCard ".concat(selected ? 'selected' : '', " ").concat(timeoutToBlock !== null ? 'opacity' : ''),
    onClick: function onClick() {
      if (!selected && timeoutToBlock === null) {
        _onClick();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "counter"
  }, /*#__PURE__*/_react["default"].createElement("span", null, timerToClose > 60000 ? Math.trunc(timerToClose / 60000) : Math.trunc(timerToClose / 1000)), timerToClose > 60000 ? 'min' : 'seg'), /*#__PURE__*/_react["default"].createElement("div", {
    className: "labels"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "R$ ", (0, _real.int2Brl)(value)), /*#__PURE__*/_react["default"].createElement("h4", null, dayCount, " ", dayCount === 1 ? ' dia' : ' dias'), /*#__PURE__*/_react["default"].createElement("h4", null, mcc)), selected ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "editInput"
  }, /*#__PURE__*/_react["default"].createElement(_.Input, {
    step: "0.01",
    type: "number",
    value: updatedRate,
    placeholder: "Taxa",
    onChange: function onChange(e) {
      setUpdatedRate((0, _masks.monetary)(e.target.value));
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Button, {
    state: "neutral",
    icon: "Check",
    onClick: function onClick() {
      temporaryBlock();
      onChange((0, _round.round)(updatedRate * 100));
      document.removeEventListener('mousedown', callback);
      handleClickToUnselect();
    }
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "rate"
  }, rate ? "".concat((0, _real.int2Brl)(rate), "%") : '-', /*#__PURE__*/_react["default"].createElement("span", {
    className: status
  })), timeoutToBlock !== null && /*#__PURE__*/_react["default"].createElement("span", {
    className: "timer"
  }, timeoutToBlock, "s"));
};

process.env.NODE_ENV !== "production" ? PriceCard.propTypes = {
  style: _propTypes["default"].object,
  selected: _propTypes["default"].bool,
  rate: _propTypes["default"].number,
  time: _propTypes["default"].number,
  dayCount: _propTypes["default"].number,
  value: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  status: _propTypes["default"].string
} : void 0;
var _default = PriceCard;
exports["default"] = _default;