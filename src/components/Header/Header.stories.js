import React from 'react';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Header } from '../';

export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs],
};
export const header = () => (
  <Header
    isOnline={boolean('Online', true)}
    time={new Date('2020', '05', '15', '20', '15', '23', '00')}
    totalValue="100.000,00"
    percent={text('Porcentagem', 50)}
    ifname="Crevisa"
    username="maria das neves"
    ifList={[{nome: 'if 1', id: 1321}, {nome: 'if 32113123123 1 312 321 312 21 313 12 12312', id: 431321}, {nome: 'if 3', id: 13215}]}
    selectNewIf={(e) => console.log(e)}
  />
);
