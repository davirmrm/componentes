import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};
export const button = () => (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <Button>
      button
    </Button>
  </CenterView>
);
