import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { CardIf } from '../';

export default {
  title: 'CardIf',
  component: CardIf,
  decorators: [withKnobs],
};
export const cardIf = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <div  style={{width: '330px'}}>
      <CardIf label='Padaria sensação un. 1' suLabel='300.902.680/0001-03' />
    </div>
  </CenterView>
);
