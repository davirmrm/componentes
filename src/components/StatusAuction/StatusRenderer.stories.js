import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { StatusAuction } from '../';
import CenterView from '../CenterView';
import { data } from '../DatePicker/data';

export default {
  title: 'StatusAuction',
  component: StatusAuction,
  decorators: [withKnobs],
};

export const statusAuction = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <StatusAuction {...{value: false, data: 'other Data'}} />
  </CenterView>
);