import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { InfoItem } from '../';
import CenterView from '../CenterView';

export default {
  title: 'InfoItem',
  component: InfoItem,
  decorators: [withKnobs],
};
export const infoItem = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <InfoItem />
  </CenterView>
);
