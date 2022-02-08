import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { IconCellRenderer } from '../';
import CenterView from '../CenterView';

export default {
  title: 'IconCellRenderer',
  component: IconCellRenderer,
  decorators: [withKnobs],
};

export const iconCellRenderer = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <IconCellRenderer {...{data: { icon: 'Trash' }, value: 'Trash'}} />
  </CenterView>
);