import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { Historic } from '../';
import CenterView from '../CenterView';

export default {
  title: 'Historic',
  component: Historic,
  decorators: [withKnobs],
};

const data = [
  { data: '2020-07-09T13:46:03.959Z', nome: 'Título da ação', responsavel: 'Nome do usuário que executou a ação' },
  { data: '2020-07-09T13:46:03.959Z', nome: 'Título da ação', responsavel: 'Nome do usuário que executou a ação' },
  { data: '2020-07-09T13:46:03.959Z', nome: 'Título da ação', responsavel: 'Nome do usuário que executou a ação' }];

const dataTwo = [
  { data: '2020-07-09T13:46:03.959Z', status: 'Processado com sucesso', state: 'success' },
  { data: '2020-07-09T13:46:03.959Z', status: 'Erro ao gerar arquivo', state: 'danger' },
  { data: '2020-07-09T13:46:03.959Z', status: 'Erro no processamento', state: 'danger' }];

export const historic = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <Historic historic={data} />
  </CenterView>
);

export const historicTypeTow = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <Historic historic={dataTwo} type='two' />
  </CenterView>
);
