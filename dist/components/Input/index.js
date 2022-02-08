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

var _ = require("../");

var _round = require("./../../utils/round");

var masks = _interopRequireWildcard(require("../../utils/masks"));

var Input = function Input(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? null : _ref$label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Placeholder' : _ref$placeholder,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$iconRight = _ref.iconRight,
      iconRight = _ref$iconRight === void 0 ? null : _ref$iconRight,
      _ref$iconLeft = _ref.iconLeft,
      iconLeft = _ref$iconLeft === void 0 ? null : _ref$iconLeft,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$inconLeftClickHa = _ref.inconLeftClickHandle,
      inconLeftClickHandle = _ref$inconLeftClickHa === void 0 ? function () {} : _ref$inconLeftClickHa,
      _ref$inconRightClickH = _ref.inconRightClickHandle,
      inconRightClickHandle = _ref$inconRightClickH === void 0 ? function () {} : _ref$inconRightClickH,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? undefined : _ref$value,
      _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? '1' : _ref$step,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? '' : _ref$state,
      _ref$mask = _ref.mask,
      mask = _ref$mask === void 0 ? null : _ref$mask,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? null : _ref$errors,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? '524288' : _ref$maxLength,
      _ref$onBlur = _ref.onBlur,
      _onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
      _ref$onFocus = _ref.onFocus,
      _onFocus = _ref$onFocus === void 0 ? function () {} : _ref$onFocus,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$keyPress = _ref.keyPress,
      keyPress = _ref$keyPress === void 0 ? function () {} : _ref$keyPress,
      _ref$haveLabelIcon = _ref.haveLabelIcon,
      haveLabelIcon = _ref$haveLabelIcon === void 0 ? false : _ref$haveLabelIcon,
      _ref$labelIconClick = _ref.labelIconClick,
      labelIconClick = _ref$labelIconClick === void 0 ? function () {} : _ref$labelIconClick;

  (0, _react.useEffect)(function () {
    if (value !== undefined) {
      if (mask) {
        var valueBackup = value;
        value = masks[mask]("".concat(value));

        if (value !== valueBackup) {
          _onChange({
            target: {
              value: value
            }
          });
        }
      }
    }
  }, [value]);
  var input = (0, _react.useRef)();

  var handleArrows = function handleArrows(direction) {
    var newValue = 0;

    if (value) {
      newValue = value;
    }

    newValue = direction === 'up' ? parseFloat(newValue) + parseFloat(step) : newValue - parseFloat(step);

    if (step.indexOf('.') > -1 || step.indexOf(',') > -1) {
      _onChange({
        target: {
          value: String((0, _round.round)(newValue).toFixed(2))
        }
      });
    } else {
      _onChange({
        target: {
          value: String(parseInt((0, _round.round)(newValue)))
        }
      });
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'Enter') {
      keyPress('Enter');
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "input ".concat(state, " ").concat(className),
    style: style,
    onClick: function onClick() {
      input.current.focus();
    }
  }, label && /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("label", null, label), haveLabelIcon && /*#__PURE__*/_react["default"].createElement(_.Icon, {
    icon: "Info",
    size: "0.75",
    onClick: function onClick() {
      return labelIconClick();
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: disabled ? 'disabled' : '',
    onClick: function onClick(e) {
      _onClick(e);
    }
  }, iconLeft && /*#__PURE__*/_react["default"].createElement(_.Icon, {
    onClick: function onClick() {
      !disabled && inconLeftClickHandle();
    },
    icon: iconLeft,
    style: {
      marginRight: '0.75rem'
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    onKeyDown: handleKeyDown,
    maxLength: maxLength,
    style: {
      textAlign: type === 'number' ? 'right' : textAlign
    },
    value: value,
    step: step,
    onChange: function onChange(e) {
      if (mask) {
        e.target.value = masks[mask](e.target.value);
      }

      _onChange(e);
    },
    onBlur: function onBlur() {
      _onBlur();
    },
    onFocus: function onFocus() {
      _onFocus();
    },
    disabled: disabled,
    type: type,
    placeholder: placeholder,
    ref: input
  }), type === 'number' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "arrows"
  }, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    onClick: function onClick() {
      handleArrows('up');
    },
    icon: "Arrow Number Up",
    size: "0.75",
    style: {
      marginLeft: '0.75rem'
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Icon, {
    onClick: function onClick() {
      handleArrows('down');
    },
    icon: "Arrow Number Down",
    size: "0.75",
    style: {
      marginLeft: '0.75rem'
    }
  })), iconRight && /*#__PURE__*/_react["default"].createElement(_.Icon, {
    onClick: function onClick(e) {
      inconRightClickHandle(e);
    },
    icon: iconRight,
    style: {
      marginLeft: '0.75rem',
      cursor: 'pointer'
    }
  })), errors && /*#__PURE__*/_react["default"].createElement("span", {
    className: "error"
  }, errors));
};

process.env.NODE_ENV !== "production" ? Input.propTypes = {
  style: _propTypes["default"].object,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  type: _propTypes["default"].string,
  iconRight: _propTypes["default"].string,
  iconLeft: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  inconLeftClickHandle: _propTypes["default"].func,
  inconRightClickHandle: _propTypes["default"].func,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  step: _propTypes["default"].string,
  textAlign: _propTypes["default"].string
} : void 0;
var _default = Input;
exports["default"] = _default;