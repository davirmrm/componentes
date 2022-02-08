"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

var _data = require("./data");

var DatePicker = function DatePicker(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$onDayClick = _ref.onDayClick,
      _onDayClick = _ref$onDayClick === void 0 ? function () {} : _ref$onDayClick,
      _ref$onWrapperClick = _ref.onWrapperClick,
      onWrapperClick = _ref$onWrapperClick === void 0 ? function () {} : _ref$onWrapperClick,
      _ref$pos = _ref.pos,
      pos = _ref$pos === void 0 ? {
    x: 100,
    y: 100
  } : _ref$pos,
      _ref$selectedDays = _ref.selectedDays,
      selectedDays = _ref$selectedDays === void 0 ? [] : _ref$selectedDays;

  var callback = (0, _react.useCallback)(function (e) {
    var indicator = true;
    e.path.forEach(function (p) {
      if (p.className === 'DayPicker') {
        indicator = false;
      }
    });

    if (indicator) {
      onWrapperClick();
      document.removeEventListener('mousedown', callback);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (show) {
      document.addEventListener('mousedown', callback);
    }

    return function () {
      document.removeEventListener('mousedown', callback);
    };
  }, [callback, onWrapperClick, show]);
  return show && /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "datePickerWrapper",
    style: {
      paddingLeft: "".concat(pos.x, "px"),
      paddingTop: "".concat(pos.y, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactDayPicker["default"], {
    showOutsideDays: true,
    onDayClick: function onDayClick(e) {
      return _onDayClick(e);
    },
    selectedDays: selectedDays,
    locale: _data.data.locale,
    months: _data.data.months,
    weekdaysLong: _data.data.weekdaysLong,
    weekdaysShort: _data.data.weekdaysShort,
    firstDayOfWeek: _data.data.firstDayOfWeek
  }));
};

process.env.NODE_ENV !== "production" ? DatePicker.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = DatePicker;
exports["default"] = _default;