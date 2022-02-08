import React, { useEffect, useState } from 'react';

import {
  withKnobs, select, boolean,
} from '@storybook/addon-knobs';

import { Select } from '../';
import CenterView from '../CenterView';

export default {
  title: 'Select',
  component: Select,
  decorators: [withKnobs],
};
export const Default = () => {
  const [selected, setSelected] = useState({label:''});
  
  useEffect(() => {
    setTimeout(() => {
      setSelected({label:'Valor injetado'})
    }, 3000);
  }, [])

  return (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <Select
      style={{ width: '50%' }}
      data={[{ label: 'teste 1', id: 1 }, { label: 'teste 2', id: 2 }]}
      searchType="client"
      placeholder="placeholder"
      selected={selected}
      iconLeft={select('Ícone a esquerda', ['Search', null], 'Search')}
      disabled={boolean('Desativado', false)}
      state={select('Qual estado', ['primary', 'secondary'], 'secondary')}
      onSelect={(e) => console.log(e)}
    />
  </CenterView>
)};


const data = [{"situacao":"valido","politicas":[{"id":-8011,"situacao":"valido","idMcc":952,"codigoMcc":"9999","descricaoMcc":"GERAL","label":"GERAL","dataAlteracao":"2020-07-16T21:53:25.468356Z"}, {"id":-8011,"situacao":"valido","idMcc":952,"codigoMcc":"9999","descricaoMcc":"CLIENT DEFINED MCC","label":"CLIENT DEFINED MCC","dataAlteracao":"2020-07-16T21:53:25.468356Z"}]},{"situacao":"invalido","politicas":[{"id":-8011,"situacao":"valido","idMcc":952,"codigoMcc":"9999","descricaoMcc":"OUTRO MCC","label":"OUTRO MCC","dataAlteracao":"2020-07-16T21:53:25.468356Z"}, {"id":-8011,"situacao":"valido","idMcc":952,"codigoMcc":"9999","descricaoMcc":"CLIENT DEFINED MCC","label":"CLIENT DEFINED MCC","dataAlteracao":"2020-07-16T21:53:25.468356Z"}]}]
export const Mcc = () => (
  <CenterView bg={{ backgroundColor: 'black' }}>
    <Select
      style={{ width: '50%' }}
      data={data}
      label="Taxas MCC"
      disabled={boolean('Desativado', false)}
      state={select('Qual estado', ['primary', 'secondary'], 'secondary')}
      onSelect={(e) => console.log(e)}
      mcc
      selected={{ label: 'Política geral', id: 0 }}
    />
  </CenterView>
);
