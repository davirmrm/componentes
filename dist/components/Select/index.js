"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _toGenerateId = _interopRequireDefault(require("../../utils/toGenerateId"));

var _ref2 = /*#__PURE__*/_react["default"].createElement("div", {
  key: "-1",
  className: "disabled"
}, "Nenhum campo a ser exibido.");

var _ref3 = /*#__PURE__*/_react["default"].createElement("div", {
  key: "-1",
  className: "disabled"
}, "Nenhum campo a ser exibido.");

var Select = function Select(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? {
    id: '',
    label: ''
  } : _ref$selected,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$searchType = _ref.searchType,
      searchType = _ref$searchType === void 0 ? 'client' : _ref$searchType,
      _ref$handleSearchToRe = _ref.handleSearchToRequest,
      handleSearchToRequest = _ref$handleSearchToRe === void 0 ? function () {} : _ref$handleSearchToRe,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$iconLeft = _ref.iconLeft,
      iconLeft = _ref$iconLeft === void 0 ? '' : _ref$iconLeft,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'secondary' : _ref$state,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? function () {} : _ref$onSelect,
      _ref$onBlur = _ref.onBlur,
      _onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
      _ref$onFocus = _ref.onFocus,
      _onFocus = _ref$onFocus === void 0 ? function () {} : _ref$onFocus,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? null : _ref$errors,
      _ref$mcc = _ref.mcc,
      mcc = _ref$mcc === void 0 ? false : _ref$mcc,
      _ref$haveLabelIcon = _ref.haveLabelIcon,
      haveLabelIcon = _ref$haveLabelIcon === void 0 ? false : _ref$haveLabelIcon,
      _ref$labelIconClick = _ref.labelIconClick,
      labelIconClick = _ref$labelIconClick === void 0 ? function () {} : _ref$labelIconClick;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showDropdown = _useState2[0],
      setShowDropdown = _useState2[1];

  var select = (0, _react.useRef)();

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      localData = _useState4[0],
      setLocalData = _useState4[1];

  var _useState5 = (0, _react.useState)(selected),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selectedData = _useState6[0],
      setSelectedData = _useState6[1];

  var _useState7 = (0, _react.useState)(selected.label),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  (0, _react.useEffect)(function () {
    setLocalData(data);
  }, [data]);
  (0, _react.useEffect)(function () {
    selectNewElement(selected, false);
  }, [selected]);

  var handleClickToOpen = function handleClickToOpen() {
    var _select$current$getEl = select.current.getElementsByTagName('input'),
        _select$current$getEl2 = (0, _slicedToArray2["default"])(_select$current$getEl, 1),
        input = _select$current$getEl2[0];

    if (!showDropdown) {
      input.focus();
      input.select();
      addListenerToClickOut();
      setShowDropdown(!showDropdown);
    } else {
      input.blur();
    }
  };

  var handleSearch = function handleSearch(v) {
    if (!showDropdown) {
      handleClickToOpen();
    }

    if (searchType === 'client') {
      applyLocalSearch(v);
    } else {
      handleSearchToRequest(v);
    }

    setSearchValue(v);
  };

  var selectNewElement = function selectNewElement(e) {
    var propagate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setSelectedData(e);
    setSearchValue(e.label);

    if (propagate) {
      onSelect(e);
    }
  };

  var handleDropdownClick = function handleDropdownClick(e) {
    selectNewElement(e);
  };

  var applyLocalSearch = function applyLocalSearch(v) {
    if (mcc) {
      // setLocalData(data.map(elem => ({label: elem.label, mcc: elem.mcc.filter(mccData => mccData.label.toLowerCase().indexOf(v.toLowerCase()) > -1)})));
      setLocalData(data.map(function (groupOfMccs) {
        return (0, _extends2["default"])({}, groupOfMccs, {
          politicas: groupOfMccs.politicas.filter(function (mccData) {
            return mccData.label.toLowerCase().indexOf(v.toLowerCase()) > -1;
          })
        });
      }));
    } else {
      setLocalData(data.filter(function (elem) {
        return elem.label.toLowerCase().indexOf(v.toLowerCase()) > -1;
      }));
    }
  };

  var callback = function callback(e) {
    if (e.target.id.indexOf('selectCell#') === -1) {
      setSearchValue(selectedData.label);
    } else {
      var _e$target$id$split = e.target.id.split('#'),
          _e$target$id$split2 = (0, _slicedToArray2["default"])(_e$target$id$split, 3),
          _label = _e$target$id$split2[1],
          id = _e$target$id$split2[2];

      onChange(_label);
      handleDropdownClick({
        id: id,
        label: _label
      });
    }

    setLocalData(data);
    document.removeEventListener('mousedown', callback);
    setShowDropdown(false);
  };

  var addListenerToClickOut = function addListenerToClickOut() {
    document.addEventListener('mousedown', callback);
  };

  var renderLocalData = function renderLocalData() {
    return localData.length > 0 ? localData.map(function (d) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: d.id,
        id: "selectCell#".concat(d.label, "#").concat(d.id)
      }, d.label);
    }) : _ref2;
  };

  var renderServerData = function renderServerData(d) {
    return data.length > 0 ? data.map(function (d) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: d.id,
        id: "selectCell#".concat(d.label, "#").concat(d.id)
      }, d.label);
    }) : _ref3;
  };

  var renderGroupOfMCC = function renderGroupOfMCC(g) {
    if (g.politicas && g.politicas.length > 0) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        key: (0, _toGenerateId["default"])('select'),
        className: "selectLabel"
      }, g.situacao === 'valido' ? 'Válido' : 'Inválido'), g.politicas.map(function (mccData) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: (0, _toGenerateId["default"])('select'),
          id: "selectCell#".concat(mccData.label, "#").concat(mccData.id)
        }, mccData.descricaoMcc);
      }));
    }

    return null;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "select ".concat(mcc ? 'mccStyle' : null),
    style: style,
    ref: select
  }, /*#__PURE__*/_react["default"].createElement(_.Input, {
    haveLabelIcon: haveLabelIcon,
    labelIconClick: labelIconClick,
    className: "selectInput",
    label: label,
    placeholder: placeholder,
    type: type,
    iconLeft: iconLeft,
    iconRight: showDropdown ? 'Chevron Up' : 'Chevron Down',
    disabled: disabled,
    state: state,
    onChange: function onChange(e) {
      handleSearch(e.target.value);
    },
    onClick: function onClick(e) {
      handleClickToOpen();
    },
    value: searchValue,
    onBlur: function onBlur() {
      return _onBlur();
    },
    onFocus: function onFocus() {
      return _onFocus();
    },
    errors: errors
  }), showDropdown && (mcc ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown mccDropdown"
  }, localData.map(function (groupOfMccs) {
    return renderGroupOfMCC(groupOfMccs);
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown ".concat(!label && 'noLabel')
  }, searchType === 'client' ? renderLocalData() : renderServerData())));
};

process.env.NODE_ENV !== "production" ? Select.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = Select;
exports["default"] = _default;