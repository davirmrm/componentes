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

var DropdownCheckboxList = function DropdownCheckboxList(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'primary' : _ref$state,
      _ref$onClickConfirm = _ref.onClickConfirm,
      onClickConfirm = _ref$onClickConfirm === void 0 ? function () {} : _ref$onClickConfirm,
      _ref$onClickCancel = _ref.onClickCancel,
      onClickCancel = _ref$onClickCancel === void 0 ? function () {} : _ref$onClickCancel,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$haveSearch = _ref.haveSearch,
      haveSearch = _ref$haveSearch === void 0 ? false : _ref$haveSearch,
      _ref$selectedData = _ref.selectedData,
      selectedData = _ref$selectedData === void 0 ? [] : _ref$selectedData;

  var _useState = (0, _react.useState)(data),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      localData = _useState2[0],
      setLocalData = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      searchValue = _useState4[0],
      setSearchValue = _useState4[1];

  (0, _react.useEffect)(function () {
    setLocalData(data);
  }, [data]);

  var doSearch = function doSearch(e) {
    var newData = data.filter(function (checkbox) {
      return checkbox.label.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    });
    setLocalData(newData);
    setSearchValue(e.target.value);
  };

  var isSelected = function isSelected(e) {
    return !!selectedData.find(function (selected) {
      return selected.label === e.label;
    });
  };

  var _onClick = function onClick(e) {
    var localSelectedData = selectedData;
    var i = -1;

    if (!!localSelectedData.find(function (selected, index) {
      if (e.label === selected.label) {
        i = index;
        return selected;
      }
    })) {
      localSelectedData.splice(i, 1);
    } else {
      localSelectedData.push(e);
    }

    onChange(localSelectedData);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "DropdownCheckboxListContainer ".concat(state)
  }, haveSearch && /*#__PURE__*/_react["default"].createElement(_.Input, {
    iconLeft: "Search",
    placeholder: "Buscar...",
    value: searchValue,
    onChange: function onChange(e) {
      return doSearch(e);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkList"
  }, localData.map(function (check, index) {
    return /*#__PURE__*/_react["default"].createElement(_.Checkbox, {
      key: index,
      type: "secondary",
      label: check.label,
      checked: isSelected(check),
      onClick: function onClick() {
        return _onClick(check);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return onClickCancel();
    },
    label: "cancelar",
    size: "small",
    state: "".concat(state === 'primary' ? 'transparent' : 'white')
  }), /*#__PURE__*/_react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return onClickConfirm();
    },
    label: "aplicar",
    size: "small"
  })));
};

process.env.NODE_ENV !== "production" ? DropdownCheckboxList.propTypes = {
  style: _propTypes["default"].object
} : void 0;
var _default = DropdownCheckboxList;
exports["default"] = _default;