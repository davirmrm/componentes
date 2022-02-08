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

var Dropdown = function Dropdown(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'primary' : _ref$state,
      toggle = _ref.toggle,
      children = _ref.children,
      title = _ref.title,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '' : _ref$width,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? {} : _ref$selected,
      _ref$closeOnClick = _ref.closeOnClick,
      closeOnClick = _ref$closeOnClick === void 0 ? false : _ref$closeOnClick,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? false : _ref$right;

  (0, _react.useEffect)(function () {
    if (toggle) {
      document.addEventListener('mousedown', callback);
    }

    return function () {
      document.removeEventListener('mousedown', callback);
    };
  }, [toggle]);

  var callback = function callback(e) {
    var onContent = false;
    e.path.map(function (node) {
      var _node$className;

      if (node.className && node.className.includes && (node === null || node === void 0 ? void 0 : (_node$className = node.className) === null || _node$className === void 0 ? void 0 : _node$className.includes('dropdownContent'))) {
        onContent = true;
      }
    });

    if (!onContent || closeOnClick) {
      document.removeEventListener('mousedown', callback);

      _onClick(e);
    }
  }; // TODO construir renderer do select :)


  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "dropdownContainer ".concat(toggle ? "open" : "", " ").concat(state, " ").concat(state === 'status' ? selected.state : '', " ").concat(state === 'statusForeground' ? "".concat(selected.state, "Foreground") : '', " ").concat(label ? 'withLabel' : ''),
    style: width ? {
      width: width,
      minWidth: width,
      maxWidth: width
    } : null
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdownHeader",
    onClick: function onClick(e) {
      _onClick(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      width: "calc(".concat(width, " - 28px)")
    }
  }, state.includes('status') ? selected.label : /*#__PURE__*/_react["default"].createElement("div", null, title, " ", label && /*#__PURE__*/_react["default"].createElement(_.Counter, {
    label: label
  }), " ")), /*#__PURE__*/_react["default"].createElement(_.Icon, {
    icon: toggle ? 'Chevron Up' : 'Chevron Down',
    size: "1",
    style: {
      marginLeft: '0.75rem',
      cursor: 'pointer'
    }
  })), toggle && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdownContent ".concat(right ? 'right' : '')
  }, children));
};

process.env.NODE_ENV !== "production" ? Dropdown.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = Dropdown;
exports["default"] = _default;