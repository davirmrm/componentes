import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { InfoItemHeading } from '../';
import CenterView from '../CenterView';

export default {
  title: 'InfoItemHeading',
  component: InfoItemHeading,
  decorators: [withKnobs],
};
export const infoItemHeading = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <InfoItemHeading />
  </CenterView>
);
