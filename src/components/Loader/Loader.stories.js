import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { Loader } from '../';

export default {
  title: 'Loader',
  component: Loader,
  decorators: [withKnobs],
};
export const loader = () => (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <Loader>
    </Loader>
  </CenterView>
);
