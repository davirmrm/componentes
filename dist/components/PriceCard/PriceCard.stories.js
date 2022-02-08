"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _ = require("../");

var _default = {
  title: 'PriceCard',
  component: _.PriceCard,
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var Default = function Default() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(120),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      rate = _useState4[0],
      setRate = _useState4[1];

  var _useState5 = (0, _react.useState)(new Date(2020, 11, 1, 17, 36, 0, 0)),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      timer = _useState6[0],
      setTimer = _useState6[1]; // useEffect(() => {
  //   let date = new Date();
  //   date.setMinutes(date.getMi() + 2);
  //   setTimer(date);
  // }, [])


  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.PriceCard, {
    style: {
      width: '330px'
    },
    selected: selected,
    rate: rate,
    time: timer,
    mcc: "mcc XPTO grande XPTO grande XPTO grande XPTO grande",
    dayCount: Number.parseInt((0, _addonKnobs.text)('Contagem de dias', '10')),
    value: Number.parseInt((0, _addonKnobs.text)('Valor', '100000')),
    status: (0, _addonKnobs.select)('Status', ['danger', 'success'], 'danger'),
    onChange: function onChange(e) {
      console.log(e);
      setRate(e);
    },
    handleClickToUnselect: function handleClickToUnselect() {
      setSelected(false);
    },
    onClick: function onClick() {
      setSelected(true);
    },
    timeout: 1 // forceTemporaryBlock='4'

  }));
};

exports.Default = Default;