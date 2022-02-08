"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLottie = _interopRequireDefault(require("react-lottie"));

var _data = require("./data");

var Loader = function Loader(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? true : _ref$loop,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay,
      _ref$animationData = _ref.animationData,
      animationData = _ref$animationData === void 0 ? _data.loader : _ref$animationData,
      _ref$rendererSettings = _ref.rendererSettings,
      rendererSettings = _ref$rendererSettings === void 0 ? {
    preserveAspectRatio: 'xMidYMid slice'
  } : _ref$rendererSettings,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 100 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 100 : _ref$width,
      _ref$isStopped = _ref.isStopped,
      isStopped = _ref$isStopped === void 0 ? false : _ref$isStopped,
      _ref$isPaused = _ref.isPaused,
      isPaused = _ref$isPaused === void 0 ? false : _ref$isPaused;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react["default"].createElement(_reactLottie["default"], {
    options: {
      loop: loop,
      autoplay: autoplay,
      animationData: animationData,
      rendererSettings: rendererSettings
    },
    height: height,
    width: width,
    isStopped: isStopped,
    speed: ".25",
    isPaused: isPaused
  }));
};

exports.Loader = Loader;
process.env.NODE_ENV !== "production" ? Loader.propTypes = {
  style: _propTypes["default"].object
} : void 0;