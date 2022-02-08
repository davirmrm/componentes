import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { StatusRendererOffer } from '..';
import CenterView from '../CenterView';
import { data } from '../DatePicker/data';

export default {
  title: 'StatusRendererOffer',
  component: StatusRendererOffer,
  decorators: [withKnobs],
};

export const statusRenderer = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <StatusRendererOffer {...{value: 'pendente', data: 'other Data'}} />
  </CenterView>
);