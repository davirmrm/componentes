import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { Counter } from '../';

export default {
  title: 'Counter',
  component: Counter,
  decorators: [withKnobs],
};
export const counter = () => (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <Counter label='8'>
    </Counter>
  </CenterView>
);
