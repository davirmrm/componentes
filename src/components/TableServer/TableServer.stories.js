import React, { useRef, useState, useEffect } from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { TableServer, Table, Button } from '../';
import { columnDefExample, dataExample } from './data';
import { requestToBackEnd } from './requestToBackEnd';

export default {
  title: 'TableServer',
  component: TableServer,
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
    <TableServer
      ref={table}
      editable
      pagination={true}
      columnDef={columnDefExample}
      request={async params => await requestToBackEnd(dataExample, params)}
    />
    </div>
  );
};
