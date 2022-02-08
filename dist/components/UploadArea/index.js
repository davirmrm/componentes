"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

var _style = _interopRequireDefault(require("./style.scss"));

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/require-default-props */
var _ref2 = /*#__PURE__*/_react["default"].createElement(_.Icon, {
  icon: "Trash",
  size: "2"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement(_.Icon, {
  icon: "Import",
  size: "3"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement(_.Icon, {
  icon: "Import",
  size: "3"
});

var UploadArea = function UploadArea(_ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? '1' : _ref$columns,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '4' : _ref$height,
      _ref$receiveFilesChan = _ref.receiveFilesChange,
      receiveFilesChange = _ref$receiveFilesChan === void 0 ? function () {} : _ref$receiveFilesChan,
      _ref$onlyOne = _ref.onlyOne,
      onlyOne = _ref$onlyOne === void 0 ? false : _ref$onlyOne,
      _ref$maxSize = _ref.maxSize,
      maxSize = _ref$maxSize === void 0 ? '10' : _ref$maxSize,
      _ref$warningSize = _ref.warningSize,
      warningSize = _ref$warningSize === void 0 ? '2' : _ref$warningSize,
      _ref$changeFilesFeedb = _ref.changeFilesFeedback,
      changeFilesFeedback = _ref$changeFilesFeedb === void 0 ? function () {} : _ref$changeFilesFeedb;

  var _useState = (0, _react.useState)(data),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      localData = _useState2[0],
      setLocalData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      updateInput = _useState4[0],
      setUpdateInput = _useState4[1];

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

  var handleMouseEvent = function handleMouseEvent(e, state) {
    e.target.value = null;
    var removeView = e.target;

    if (state === 'enter') {
      removeView.classList.add('visible');
    } else {
      removeView.classList.remove('visible');
    }
  };

  var removeFile = function removeFile(f) {
    var newList = localData.filter(function (d) {
      return d.value !== f.value;
    });
    receiveFilesChange(newList);
    setLocalData(newList);
  };

  var handleDropEvent = function handleDropEvent(e, state) {
    var uploadCard = e.target.parentNode;

    if (state === 'enter') {
      uploadCard.classList.add('hover');
    } else {
      uploadCard.classList.remove('hover');
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    style: (0, _extends2["default"])({}, style, {
      gridTemplateColumns: "repeat(".concat(columns, ", 1fr)")
    }),
    className: "uploadArea"
  }, localData.map(function (f) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "uploadView",
      onMouseEnter: function onMouseEnter(e) {
        return handleMouseEvent(e, 'enter');
      },
      onMouseLeave: function onMouseLeave(e) {
        return handleMouseEvent(e, 'leave');
      },
      style: {
        height: "".concat(height, "rem"),
        backgroundImage: "url(".concat(f.value, ")")
      }
    }, /*#__PURE__*/_react["default"].createElement("h6", null, f.file.name), /*#__PURE__*/_react["default"].createElement("div", {
      className: "removeView",
      onClick: function onClick() {
        return removeFile(f);
      }
    }, _ref2));
  }), onlyOne ? localData.length === 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "uploadCard",
    style: {
      height: "".concat(height, "rem")
    },
    onDragLeave: function onDragLeave(e) {
      return handleDropEvent(e, 'leave');
    },
    onDragEnter: function onDragEnter(e) {
      return handleDropEvent(e, 'enter');
    },
    onDrop: function onDrop(e) {
      /* dropFile(e.dataTransfer) */
    }
  }, _ref3, "Arraste o arquivo ou clique para fazer o upload", /*#__PURE__*/_react["default"].createElement("input", {
    key: updateInput,
    type: "file",
    onChange: function onChange(e) {
      return handleClickAddingFiles(e);
    }
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "uploadCard",
    style: {
      height: "".concat(height, "rem")
    },
    onDragLeave: function onDragLeave(e) {
      return handleDropEvent(e, 'leave');
    },
    onDragEnter: function onDragEnter(e) {
      return handleDropEvent(e, 'enter');
    },
    onDrop: function onDrop(e) {
      /* dropFile(e.dataTransfer) */
    }
  }, _ref4, "Arraste o arquivo ou clique para fazer o upload", /*#__PURE__*/_react["default"].createElement("input", {
    key: updateInput,
    multiple: true,
    type: "file",
    onChange: function onChange(e) {
      return handleClickAddingFiles(e);
    }
  })));
};

process.env.NODE_ENV !== "production" ? UploadArea.propTypes = {
  style: _propTypes["default"].object,
  data: _propTypes["default"].array,
  columns: _propTypes["default"].string,
  height: _propTypes["default"].string,
  receiveFilesChange: _propTypes["default"].func,
  onlyOne: _propTypes["default"].bool
} : void 0;
var _default = UploadArea;
exports["default"] = _default;