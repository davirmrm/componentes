import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { LabelBlock, ListItem } from '../';
import CenterView from '../CenterView';

export default {
  title: 'LabelBlock',
  component: LabelBlock,
  decorators: [withKnobs],
};

const arr = [{ label: 'Banco Santander', value: 'agência 0000 - conta corrente 0000000-0', id: '1' }, { label: 'Banco Santander', value: 'agência 0000 - conta corrente 0000000-0', id: '2' }, { label: 'Banco Santander', value: 'agência 0000 - conta corrente 0000000-0', id: '3' }];

export const labelBlock = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <LabelBlock
      label="Domicílios Bancários"
      style={{ width: '636px' }}
    >
      <ListItem data={arr} isHeading />
    </LabelBlock>
  </CenterView>
);
