import React, { useState, useEffect, useRef, forwardRef } from 'react';

import { AgGridReact } from 'ag-grid-react';
import PropTypes from 'prop-types';

// import { AllModules } from '@ag-grid-enterprise/all-modules';

import { localeTxt } from './data';
import styles from './style.scss';

let first = true;

const Table = (
  {
    testid = false,
    style = {},
    theme = 'default',
    handleRowClick = () => {},
    data = [],
    columnDef = [],
    components = {},
    pagination = true,
    onCellValueChanged = () => {},
    deleteRowClick = () => {},
    deleteColumnClick = () => {},
  },
  ref,
) => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (
      (ref.current !== null && data.length > 0) ||
      (ref.current !== null && !first)
    ) {
      first = false;
      setRowData(data);
      injectFuntions();
    }
  }, [data]);

  const toggleHoverToColumn = (state, column) => {
    console.log('veio na função');
    const elems = document.querySelectorAll(`[col-id=${column}]`);
    if (state) {
      elems[0].getElementsByClassName('customHeader')[0].classList.add('hover');
      elems.forEach(e => {
        e.classList.add('RateTableColumnSelectedBackground');
      });
    } else {
      elems[0]
        .getElementsByClassName('customHeader')[0]
        .classList.remove('hover');
      elems.forEach(e => {
        e.classList.remove('RateTableColumnSelectedBackground');
      });
    }
  };

  useEffect(() => {
    const callbackForRowListener = e => {
      deleteRowClick(e);
    };
    const callbackForColumnListener = e => {
      deleteColumnClick(e);
    };
    document.addEventListener('clickOnRowToRemove', callbackForRowListener);
    document.addEventListener(
      'clickOnColumnToRemove',
      callbackForColumnListener,
    );
    return () => {
      document.removeEventListener(
        'clickOnRowToRemove',
        callbackForRowListener,
      );
      document.addEventListener(
        'clickOnColumnToRemove',
        callbackForColumnListener,
      );
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
    rowStyle: { cursor: 'pointer' },
  };

  const injectFuntions = () => {
    ref.current.inject = {
      toggleHoverToColumn,
    };
  };

  return (
    <div
      testid={testid}
      className={`ag-theme-alpine${
        theme === 'dark' ? '-dark' : theme === 'light' ? '-light' : ''
      }`}
      style={{ height: '100%' }}
    >
      <AgGridReact
        // modules={AllModules}
        columnDefs={grid.columnDefs} // Definição das colunas
        pagination={pagination} // Indica que tem paginação
        // onGridReady={onGridReady} // Callback principal da tabela
        defaultColDef={grid.defaultColDef} // Definições gerais da coluna
        paginationAutoPageSize // Tabela adapta paginação ao tamanho da tela
        rowModelType={grid.rowModelType} // Indica que é scroll infinito
        components={grid.components} // Tras componentes extras para serem exibidos (no caso, o loader)
        onRowClicked={e => {
          handleRowClick(e);
        }} // Handler do click na linha
        localeText={grid.localeText} // Função que trás os textos para que possam ser traduzidos
        rowStyle={grid.rowStyle} // Exemplo de injeção de estilo pra linha
        ref={ref}
        onCellValueChanged={e => {
          onCellValueChanged(e);
        }}
        stopEditingWhenGridLosesFocus
        rowData={rowData}
      />
    </div>
  );
};

export default forwardRef(Table);
