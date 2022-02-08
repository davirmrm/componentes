import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { StatusRenderer } from '../';
import CenterView from '../CenterView';
import { data } from '../DatePicker/data';

export default {
  title: 'StatusRenderer',
  component: StatusRenderer,
  decorators: [withKnobs],
};

export const statusRenderer = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <StatusRenderer {...{value: 'pendente', data: 'other Data'}} />
  </CenterView>
);