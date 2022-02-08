import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { Style } from '../';

export default {
  title: 'Style',
  component: Style,
  decorators: [withKnobs],
};
export const style = () => (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <Style>
    </Style>
  </CenterView>
);
