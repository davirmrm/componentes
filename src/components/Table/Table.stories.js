import React, { useRef, useEffect, useState } from 'react';

import {
  withKnobs,
  select
} from '@storybook/addon-knobs';

import { Table } from '../';
import { columnDefExample, dataExample } from './data';

export default {
  title: 'Table',
  component: Table,
  decorators: [withKnobs],
};
export const Default = () => {
  const table = useRef();

  const [data, setData] = useState([])

  useEffect(() => {
    setTimeout(() => {      
      setData(dataExample);
    }, 3000);
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Table
        ref={table}
        editable
        pagination={true}
        data={data}
        columnDef={columnDefExample}
        theme={select("Selecione o tema da tabela", ['default', 'dark', 'light'])}
      />
    </div>
  );
};
