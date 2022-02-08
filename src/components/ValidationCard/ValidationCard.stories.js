import React from 'react';

import {
  withKnobs, select,
} from '@storybook/addon-knobs';

import { ValidationCard } from '../';
import CenterView from '../CenterView';

export default {
  title: 'ValidationCard',
  component: ValidationCard,
  decorators: [withKnobs],
};

export const Default = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <ValidationCard
      state={select('Estado', ['success', 'warning'], 'success')}
      title="Padaria sensação un. 1"
      label="300.902.680/0001-03"
    />
  </CenterView>
);
