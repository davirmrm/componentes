import React from 'react';

import { action } from '@storybook/addon-actions';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import { Documentation } from '../';
import CenterView from '../CenterView';

export default {
  title: 'Documentation',
  component: Documentation,
  decorators: [withKnobs],
};
// const docList = [{ label: 'Documento-xyz.png', id: '1' }, { label: 'Documento-xyz.png', id: '2' }, { label: 'Documento-xyz.png', id: '3' }];
export const documentation = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <Documentation onClick={(e) => {console.log(e)}} data={[]} style={{ width: '50%' }} handleButtonClick={action('botão foi clicado')} handleIconClick={action('Icon foi clicado')} />
  </CenterView>
);
