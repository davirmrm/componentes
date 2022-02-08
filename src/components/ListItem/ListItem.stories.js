import React from 'react';

import {
  withKnobs, boolean,
} from '@storybook/addon-knobs';

import { ListItem } from '../';
import CenterView from '../CenterView';

export default {
  title: 'ListItem',
  component: ListItem,
  decorators: [withKnobs],
};

const arr = [{ label: 'Banco Santander', value: 'agência 0000 - conta corrente 0000000-0', id: '1' }, { label: 'Banco Santander', value: 'agência 0000 - conta corrente 0000000-0', id: '2' }, { label: 'Banco Santander', value: 'agência 0000 - conta corrente 0000000-0', id: '3' }];
export const listItem = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <ListItem data={arr} style={{ width: '50%' }} icon='Eye' clickable isHeading={boolean('É do tipo heading', true)} />
  </CenterView>
);
