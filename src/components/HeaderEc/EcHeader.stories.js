import React from 'react';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { HeaderEc } from '../';

export default {
  title: 'HeaderEc',
  component: HeaderEc,
  decorators: [withKnobs],
};

export const headerEC = () => (
  <HeaderEc
    totalValue='100.000,00'
    percent={text('Porcentagem', 50)}
    ecName='Crevisa'
    username='maria das neves'
    buttonLabel='Simular cotação'
    value='1592700'
    ifList={[
      { nome: 'if 1', id: 1321 },
      { nome: 'if 32113123123 1 312 321 312 21 313 12 12312', id: 431321 },
      { nome: 'if 3', id: 13215 },
    ]}
    selectNewIf={e => console.log(e)}
  />
);
