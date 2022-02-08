import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { Boilerplate } from '../';

export default {
  title: 'Boilerplate',
  component: Boilerplate,
  decorators: [withKnobs],
};
export const boilerplate = () => (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <Boilerplate>
    </Boilerplate>
  </CenterView>
);
