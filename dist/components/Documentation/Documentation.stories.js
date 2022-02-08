"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentation = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _CenterView = _interopRequireDefault(require("../CenterView"));

var _default = {
  title: 'Documentation',
  component: _.Documentation,
  decorators: [_addonKnobs.withKnobs]
}; // const docList = [{ label: 'Documento-xyz.png', id: '1' }, { label: 'Documento-xyz.png', id: '2' }, { label: 'Documento-xyz.png', id: '3' }];

exports["default"] = _default;

var documentation = function documentation() {
  return /*#__PURE__*/_react["default"].createElement(_CenterView["default"], {
    bg: {
      backgroundColor: 'var(--background-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Documentation, {
    onClick: function onClick(e) {
      console.log(e);
    },
    data: [],
    style: {
      width: '50%'
    },
    handleButtonClick: (0, _addonActions.action)('botão foi clicado'),
    handleIconClick: (0, _addonActions.action)('Icon foi clicado')
  }));
};

exports.documentation = documentation;