"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _ref2 = /*#__PURE__*/_react["default"].createElement("div", {
  className: "separator"
});

var Documentation = function Documentation(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$btnLabel = _ref.btnLabel,
      btnLabel = _ref$btnLabel === void 0 ? 'adicionar comprovante' : _ref$btnLabel,
      _ref$maxSize = _ref.maxSize,
      maxSize = _ref$maxSize === void 0 ? '10' : _ref$maxSize,
      _ref$warningSize = _ref.warningSize,
      warningSize = _ref$warningSize === void 0 ? '2' : _ref$warningSize,
      _ref$onlyShow = _ref.onlyShow,
      onlyShow = _ref$onlyShow === void 0 ? false : _ref$onlyShow,
      _ref$receiveFilesChan = _ref.receiveFilesChange,
      receiveFilesChange = _ref$receiveFilesChan === void 0 ? function () {} : _ref$receiveFilesChan,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$changeFilesFeedb = _ref.changeFilesFeedback,
      changeFilesFeedback = _ref$changeFilesFeedb === void 0 ? function () {} : _ref$changeFilesFeedb;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      localData = _useState2[0],
      setLocalData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      updateInput = _useState4[0],
      setUpdateInput = _useState4[1];

  var file = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    setLocalData(data);
  }, [data]);

  var addFilePreview = function addFilePreview(f) {
    return {
      file: f,
      value: URL.createObjectURL(f)
    };
  };

  var verifySize = function verifySize(size) {
    if (size > maxSize * 1024 * 1024) {
      changeFilesFeedback({
        label: "Arquivo muito grande, o tamanho m\xE1ximo para esse processo \xE9 ".concat(maxSize, "MB.")
      });
      return false;
    }

    if (size > warningSize * 1024 * 1024) {
      changeFilesFeedback({
        label: "O processamento pode demorar um pouco, aguarde."
      });
    }

    return true;
  };

  var handleClickAddingFiles = function handleClickAddingFiles(e) {
    var filesToAdd = [];

    for (var f in e.target.files) {
      if ((0, _typeof2["default"])(e.target.files[f]) === 'object') {
        if (verifySize(e.target.files[f].size)) {
          filesToAdd.push(addFilePreview(e.target.files[f]));
        }
      }
    }

    var newList = [].concat((0, _toConsumableArray2["default"])(localData), filesToAdd);
    receiveFilesChange(newList);
    setUpdateInput(!updateInput);
    setLocalData(newList);
  };

  var removeFile = function removeFile(f) {
    console.log(f);
    console.log(localData);
    var newList = localData.filter(function (d) {
      return d.id !== f.id;
    });
    receiveFilesChange(newList);
    setLocalData(newList);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    style: style,
    className: "documentation"
  }, localData.map(function (e, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: e.id
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "line"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick() {
        _onClick(e);
      }
    }, e.file.name), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.Icon, {
      icon: "Eye",
      onClick: function onClick() {
        return _onClick(e);
      }
    }), !onlyShow && /*#__PURE__*/_react["default"].createElement(_.Icon, {
      icon: "Close",
      onClick: function onClick() {
        return removeFile(e);
      }
    }))), _ref2);
  }), !onlyShow && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Button, {
    label: btnLabel,
    state: "light",
    onClick: function onClick() {
      file.current.click();
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    ref: file,
    key: updateInput,
    multiple: true,
    type: "file",
    onChange: function onChange(e) {
      return handleClickAddingFiles(e);
    }
  })));
};

process.env.NODE_ENV !== "production" ? Documentation.propTypes = {
  style: _propTypes["default"].object,
  data: _propTypes["default"].array,
  btnLabel: _propTypes["default"].string,
  handleIconClick: _propTypes["default"].func,
  handleButtonClick: _propTypes["default"].func
} : void 0;
var _default = Documentation;
exports["default"] = _default;