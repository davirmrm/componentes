import React, { useState, useEffect, useRef, forwardRef } from 'react';

import { AgGridReact } from 'ag-grid-react';
import PropTypes from 'prop-types';

// import { AllModules } from '@ag-grid-enterprise/all-modules';

import { localeTxt } from './data';
import styles from './style.scss';

const TableServer = ({
  testid = false, 
  style = {},
  theme = 'default', handleRowClick = () => { }, request = () => {}, data = [], columnDef = [], components = {}, pagination = true, onCellValueChanged = () => {},  deleteRowClick = () => {}, deleteColumnClick = () => {}, requestFilter = () => {}, filterData = {}
},
ref) => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (ref.current !== null) {
      injectFuntions();
    }
  }, [data]);

  useEffect(() => {
    if (Object.keys(filterData).length) {
      updateDataWithFilter(ref.current);
    }
  }, [filterData])

  const toggleHoverToColumn = (state, column) => {
    console.log('veio na função')
    const elems = document.querySelectorAll(`[col-id=${column}]`);
    if (state) {
      elems[0].getElementsByClassName('customHeader')[0].classList.add('hover');
      elems.forEach((e) => {
        e.classList.add('RateTableColumnSelectedBackground');
      });
    } else {
      elems[0].getElementsByClassName('customHeader')[0].classList.remove('hover');
      elems.forEach((e) => {
        e.classList.remove('RateTableColumnSelectedBackground');
      });
    }
  };

  useEffect(() => {
    const callbackForRowListener = (e) => {
      deleteRowClick(e);
    };
    const callbackForColumnListener = (e) => {
      deleteColumnClick(e);
    };
    document.addEventListener('clickOnRowToRemove', callbackForRowListener);
    document.addEventListener('clickOnColumnToRemove', callbackForColumnListener);
    return () => {
      document.removeEventListener('clickOnRowToRemove', callbackForRowListener);
      document.addEventListener('clickOnColumnToRemove', callbackForColumnListener);
    };
  }, []);

  const grid = {
    columnDefs: columnDef,
    localeText: localeTxt,
    components,
    defaultColDef: {
      flex: 1,
      sortable: true,
      resizable: true,
      minWidth: 120,
      suppressMenu: true,
      // floatingFilter: true,
    },
    cacheOverflowSize: 1,
    maxConcurrentDatasourceRequests: 2,
    maxBlocksInCache: 2,
    cacheBlockSize: 100,
    rowStyle: { cursor: 'pointer' },
  };

  const updateData = (params = null) => {
    try {
    const dataSource = {
      rowCount: null,
      getRows: (params) => {
        request(params).then(res => {
          const { rowsThisPage, lastRow } = res;
          params.successCallback(rowsThisPage, lastRow);
        });
      },
    };
      params.api.setDatasource(dataSource);
    } catch (err) {}
  };

  
  const updateDataWithFilter = (params = null) => {
    try {
    const dataSource = {
      rowCount: null,
      getRows: (params) => {
        requestFilter(params, filterData).then(res => {
          const { rowsThisPage, lastRow } = res;
          params.successCallback(rowsThisPage, lastRow);
        });
      },
    };
      params.api.setDatasource(dataSource);
    } catch (err) {}
  };

  const injectFuntions = () => {
    ref.current.inject = {
      toggleHoverToColumn,
    }
  }
  return (
    <div testid={testid} className={`ag-theme-alpine${theme === 'dark' ? '-dark' : theme === 'light' ? '-light' : ''}`} style={{ height: '100%' }}>
      <AgGridReact
        // modules={AllModules}
        columnDefs={grid.columnDefs} // Definição das colunas
        pagination={pagination} // Indica que tem paginação
        // onGridReady={onGridReady} // Callback principal da tabela
        defaultColDef={grid.defaultColDef} // Definições gerais da coluna
        cacheOverflowSize={grid.cacheOverflowSize} // Quantidade de loaders que aparecem após o bloco estourar
        maxConcurrentDatasourceRequests={
          grid.maxConcurrentDatasourceRequests // Quantidade max de requisições concorrentes
        }
        maxBlocksInCache={grid.maxBlocksInCache} // Tamanho maximo de blocos na cache
        paginationAutoPageSize // Tabela adapta paginação ao tamanho da tela
        rowModelType='infinite' // Indica que é scroll infinito
        components={grid.components} // Tras componentes extras para serem exibidos (no caso, o loader)
        onRowClicked={(e) => { handleRowClick(e); }} // Handler do click na linha
        localeText={grid.localeText} // Função que trás os textos para que possam ser traduzidos
        // paginationNumberFormatter={grid.paginationNumberFormatter} // Função que formata o numero da paginação
        // rowData={rowData}  // aparentemente não obrigatorio, tentativa frustrada de exibir o valor total de dados
        rowStyle={grid.rowStyle} // Exemplo de injeção de estilo pra linha
        cacheBlockSize={grid.cacheBlockSize} // Tamanho do bloco que vem na requisição - de 100 em 100, 50 em 50
        ref={ref}
        onCellValueChanged={(e) => { onCellValueChanged(e); }}
        stopEditingWhenGridLosesFocus
        onGridReady={updateData}
      />
    </div>
  );
};

export default forwardRef(TableServer);
