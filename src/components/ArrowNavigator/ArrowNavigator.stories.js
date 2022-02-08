import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { ArrowNavigator } from '../';
import CenterView from '../CenterView';

export default {
  title: 'ArrowNavigator',
  component: ArrowNavigator,
  decorators: [withKnobs],
};
export const Default = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <ArrowNavigator />
  </CenterView>
);
