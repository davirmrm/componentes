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

var Modal = function Modal(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$closeModal = _ref.closeModal,
      closeModal = _ref$closeModal === void 0 ? function () {} : _ref$closeModal,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  (0, _react.useEffect)(function () {
    var listener = function listener(event) {
      var bool = false;
      var ignore = true;
      event.path.forEach(function (elem) {
        if (elem.className !== undefined && elem.className.includes && elem.className.includes('modal ')) {
          bool = true;
        }

        if (elem.className !== undefined && elem.className.includes && elem.className.includes('modalWrapper')) {
          ignore = false;
        }
      });

      if (ignore) {
        return;
      }

      if (!bool) {
        closeModal();
      }
    };

    if (show) {
      document.addEventListener('mousedown', listener);
    } else {
      document.removeEventListener('mousedown', listener);
    }

    return function () {
      document.removeEventListener('mousedown', listener);
    };
  }, [show]);
  return show && /*#__PURE__*/_react["default"].createElement("div", {
    className: "modalWrapper",
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "modal ".concat(className)
  }, children));
};

process.env.NODE_ENV !== "production" ? Modal.propTypes = {
  style: _propTypes["default"].object,
  show: _propTypes["default"].bool,
  closeModal: _propTypes["default"].func
} : void 0;
var _default = Modal;
exports["default"] = _default;