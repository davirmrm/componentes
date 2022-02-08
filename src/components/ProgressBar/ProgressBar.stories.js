import React from 'react';

import { withKnobs, text } from '@storybook/addon-knobs';

import { ProgressBar } from '..';

import CenterView from '../CenterView';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  decorators: [withKnobs],
};
export const progressBar = () => (
  <CenterView>
    <ProgressBar
      style={{ width: '70%' }}
      percent={text('Porcentagem', 50)}
      totalValue="100.000,00"
    />
  </CenterView>
);
