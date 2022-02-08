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

var msgs = [{
  type: 'public',
  username: 'Nome do usuário',
  date: '12 jun 2020 18:32',
  message: "Tristique maecenas faucibus sed tristique pellentesque leo, aenean et et. Vitae eget magna eu facilisis. Laoreet elementum lectus massa turpis risus justo. Scelerisque tristique egestas amet, magna sed commodo ut eget faucibus. Facilisis lectus amet, mi lacus, ullamcorper gravida vitae vitae turpis."
}, {
  type: 'client',
  username: 'Nome do usuário',
  date: '12 jun 2020 18:32',
  message: "Tristique maecenas faucibus sed tristique pellentesque leo, aenean et et. Vitae eget magna eu facilisis. Laoreet elementum lectus massa turpis risus justo. Scelerisque tristique egestas amet, magna sed commodo ut eget faucibus. Facilisis lectus amet, mi lacus, ullamcorper gravida vitae vitae turpis."
}, {
  type: 'private',
  username: 'Nome do usuário',
  date: '12 jun 2020 18:32',
  message: "Tristique maecenas faucibus sed tristique pellentesque leo, aenean et et. Vitae eget magna eu facilisis. Laoreet elementum lectus massa turpis risus justo. Scelerisque tristique egestas amet, magna sed commodo ut eget faucibus. Facilisis lectus amet, mi lacus, ullamcorper gravida vitae vitae turpis."
}];

var _ref2 = /*#__PURE__*/_react["default"].createElement(_.Icon, {
  icon: "Lock"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("span", {
  className: "feedbackToUser"
}, "N\xE3o h\xE1 nenhuma mensagem para exibir.");

var Chat = function Chat(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$messages = _ref.messages,
      messages = _ref$messages === void 0 ? msgs : _ref$messages,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$clientSide = _ref.clientSide,
      clientSide = _ref$clientSide === void 0 ? false : _ref$clientSide;

  var _useState = (0, _react.useState)({
    label: 'Todas',
    id: '1'
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = (0, _react.useState)({
    label: 'Pública',
    id: '1'
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selectedTypeOfMessage = _useState4[0],
      setSelectedTypeOfMessage = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      openFooterBox = _useState6[0],
      setOpenFooterBox = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  var input = (0, _react.useRef)();

  var handleBtnClick = function handleBtnClick(save) {
    if (save) {
      // TODO enviar mensagem
      onClick({
        message: message,
        type: selectedTypeOfMessage
      });
      setMessage('');
    } else {
      setMessage('');
    }

    setOpenFooterBox(!openFooterBox);
  };

  (0, _react.useEffect)(function () {
    if (openFooterBox) {
      input.current.focus();
    }
  }, [openFooterBox]);
  var scrollBox = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    scrollToBottom();
  }, [messages, selected]);

  var scrollToBottom = function scrollToBottom() {
    return scrollBox.current.scrollTop = scrollBox.current.scrollHeight;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "chatContainer ".concat(clientSide ? 'client' : ''),
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_.TabButtonNavigator, {
    data: [{
      label: 'Todas',
      id: '1'
    }, {
      label: 'Públicas',
      id: '2'
    }, {
      label: 'Notas privadas',
      id: '3'
    }],
    onClick: function onClick(s) {
      setSelected(s);
    },
    selected: selected
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "chatContent",
    ref: scrollBox
  }, messages.map(function (msg) {
    // ID selecionado 2 significa público, ID selecionado 3 significa privado
    if (selected.id === '2' && msg.type === 'private' || selected.id === '3' && msg.type !== 'private') {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "message ".concat(msg.type !== 'client' ? 'right' : '')
    }, /*#__PURE__*/_react["default"].createElement("header", null, msg.type === 'private' && !clientSide && _ref2, " ", msg.username, "\xA0", /*#__PURE__*/_react["default"].createElement("span", null, msg.date)), /*#__PURE__*/_react["default"].createElement("p", null, msg.message));
  }), !messages.length && _ref3), openFooterBox ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "chatFooter extended"
  }, /*#__PURE__*/_react["default"].createElement(_.TabButtonNavigator, {
    data: [{
      label: 'Pública',
      id: '1'
    }, {
      label: 'Nota privada',
      id: '2'
    }],
    onClick: function onClick(s) {
      setSelectedTypeOfMessage(s);
    },
    selected: selectedTypeOfMessage
  }), /*#__PURE__*/_react["default"].createElement(_.TextArea, {
    placeholder: clientSide ? 'Adicionar mensagem...' : 'Adicionar nota...',
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    value: message,
    ref: input,
    rows: 6
  }), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement(_.Button, {
    label: "cancelar",
    state: clientSide ? 'light' : 'transparent',
    onClick: function onClick() {
      return handleBtnClick(false);
    }
  }), /*#__PURE__*/_react["default"].createElement(_.Button, {
    label: "salvar",
    onClick: function onClick() {
      return handleBtnClick(true);
    }
  }))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "chatFooter",
    onClick: function onClick() {
      return setOpenFooterBox(!openFooterBox);
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: clientSide ? 'Adicionar mensagem...' : 'Adicionar nota...',
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    value: message
  })));
};

process.env.NODE_ENV !== "production" ? Chat.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = Chat;
exports["default"] = _default;