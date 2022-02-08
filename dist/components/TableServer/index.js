"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _agGridReact = require("ag-grid-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _data = require("./data");

var _style = _interopRequireDefault(require("./style.scss"));

// import { AllModules } from '@ag-grid-enterprise/all-modules';
var TableServer = function TableServer(_ref, ref) {
  var _ref$testid = _ref.testid,
      testid = _ref$testid === void 0 ? false : _ref$testid,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'default' : _ref$theme,
      _ref$handleRowClick = _ref.handleRowClick,
      handleRowClick = _ref$handleRowClick === void 0 ? function () {} : _ref$handleRowClick,
      _ref$request = _ref.request,
      request = _ref$request === void 0 ? function () {} : _ref$request,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$columnDef = _ref.columnDef,
      columnDef = _ref$columnDef === void 0 ? [] : _ref$columnDef,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components,
      _ref$pagination = _ref.pagination,
      pagination = _ref$pagination === void 0 ? true : _ref$pagination,
      _ref$onCellValueChang = _ref.onCellValueChanged,
      _onCellValueChanged = _ref$onCellValueChang === void 0 ? function () {} : _ref$onCellValueChang,
      _ref$deleteRowClick = _ref.deleteRowClick,
      deleteRowClick = _ref$deleteRowClick === void 0 ? function () {} : _ref$deleteRowClick,
      _ref$deleteColumnClic = _ref.deleteColumnClick,
      deleteColumnClick = _ref$deleteColumnClic === void 0 ? function () {} : _ref$deleteColumnClic,
      _ref$requestFilter = _ref.requestFilter,
      requestFilter = _ref$requestFilter === void 0 ? function () {} : _ref$requestFilter,
      _ref$filterData = _ref.filterData,
      filterData = _ref$filterData === void 0 ? {} : _ref$filterData;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      rowData = _useState2[0],
      setRowData = _useState2[1];

  (0, _react.useEffect)(function () {
    if (ref.current !== null) {
      injectFuntions();
    }
  }, [data]);
  (0, _react.useEffect)(function () {
    if (Object.keys(filterData).length) {
      updateDataWithFilter(ref.current);
    }
  }, [filterData]);

  var toggleHoverToColumn = function toggleHoverToColumn(state, column) {
    console.log('veio na função');
    var elems = document.querySelectorAll("[col-id=".concat(column, "]"));

    if (state) {
      elems[0].getElementsByClassName('customHeader')[0].classList.add('hover');
      elems.forEach(function (e) {
        e.classList.add('RateTableColumnSelectedBackground');
      });
    } else {
      elems[0].getElementsByClassName('customHeader')[0].classList.remove('hover');
      elems.forEach(function (e) {
        e.classList.remove('RateTableColumnSelectedBackground');
      });
    }
  };

  (0, _react.useEffect)(function () {
    var callbackForRowListener = function callbackForRowListener(e) {
      deleteRowClick(e);
    };

    var callbackForColumnListener = function callbackForColumnListener(e) {
      deleteColumnClick(e);
    };

    document.addEventListener('clickOnRowToRemove', callbackForRowListener);
    document.addEventListener('clickOnColumnToRemove', callbackForColumnListener);
    return function () {
      document.removeEventListener('clickOnRowToRemove', callbackForRowListener);
      document.addEventListener('clickOnColumnToRemove', callbackForColumnListener);
    };
  }, []);
  var grid = {
    columnDefs: columnDef,
    localeText: _data.localeTxt,
    components: components,
    defaultColDef: {
      flex: 1,
      sortable: true,
      resizable: true,
      minWidth: 120,
      suppressMenu: true // floatingFilter: true,

    },
    cacheOverflowSize: 1,
    maxConcurrentDatasourceRequests: 2,
    maxBlocksInCache: 2,
    cacheBlockSize: 100,
    rowStyle: {
      cursor: 'pointer'
    }
  };

  var updateData = function updateData() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    try {
      var dataSource = {
        rowCount: null,
        getRows: function getRows(params) {
          request(params).then(function (res) {
            var rowsThisPage = res.rowsThisPage,
                lastRow = res.lastRow;
            params.successCallback(rowsThisPage, lastRow);
          });
        }
      };
      params.api.setDatasource(dataSource);
    } catch (err) {}
  };

  var updateDataWithFilter = function updateDataWithFilter() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    try {
      var dataSource = {
        rowCount: null,
        getRows: function getRows(params) {
          requestFilter(params, filterData).then(function (res) {
            var rowsThisPage = res.rowsThisPage,
                lastRow = res.lastRow;
            params.successCallback(rowsThisPage, lastRow);
          });
        }
      };
      params.api.setDatasource(dataSource);
    } catch (err) {}
  };

  var injectFuntions = function injectFuntions() {
    ref.current.inject = {
      toggleHoverToColumn: toggleHoverToColumn
    };
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    testid: testid,
    className: "ag-theme-alpine".concat(theme === 'dark' ? '-dark' : theme === 'light' ? '-light' : ''),
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_agGridReact.AgGridReact // modules={AllModules}
  , {
    columnDefs: grid.columnDefs // Definição das colunas
    ,
    pagination: pagination // Indica que tem paginação
    // onGridReady={onGridReady} // Callback principal da tabela
    ,
    defaultColDef: grid.defaultColDef // Definições gerais da coluna
    ,
    cacheOverflowSize: grid.cacheOverflowSize // Quantidade de loaders que aparecem após o bloco estourar
    ,
    maxConcurrentDatasourceRequests: grid.maxConcurrentDatasourceRequests // Quantidade max de requisições concorrentes
    ,
    maxBlocksInCache: grid.maxBlocksInCache // Tamanho maximo de blocos na cache
    ,
    paginationAutoPageSize: true // Tabela adapta paginação ao tamanho da tela
    ,
    rowModelType: "infinite" // Indica que é scroll infinito
    ,
    components: grid.components // Tras componentes extras para serem exibidos (no caso, o loader)
    ,
    onRowClicked: function onRowClicked(e) {
      handleRowClick(e);
    } // Handler do click na linha
    ,
    localeText: grid.localeText // Função que trás os textos para que possam ser traduzidos
    // paginationNumberFormatter={grid.paginationNumberFormatter} // Função que formata o numero da paginação
    // rowData={rowData}  // aparentemente não obrigatorio, tentativa frustrada de exibir o valor total de dados
    ,
    rowStyle: grid.rowStyle // Exemplo de injeção de estilo pra linha
    ,
    cacheBlockSize: grid.cacheBlockSize // Tamanho do bloco que vem na requisição - de 100 em 100, 50 em 50
    ,
    ref: ref,
    onCellValueChanged: function onCellValueChanged(e) {
      _onCellValueChanged(e);
    },
    stopEditingWhenGridLosesFocus: true,
    onGridReady: updateData
  }));
};

var _default = /*#__PURE__*/(0, _react.forwardRef)(TableServer);

exports["default"] = _default;