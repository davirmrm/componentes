import React, { useState } from 'react';

import {
  withKnobs, text, select,
} from '@storybook/addon-knobs';

import { Card } from '../';
import CenterView from '../CenterView';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};
export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
      <Card label={text('Texto', 'Pessoa física')} checked={checked} onClick={() => setChecked(!checked)} iconLeft={select('ícone a esquerda', ['Check Circle', null], 'Check Circle')} iconRight="Chevron Right" style={{ width: '600px' }} />
    </CenterView>
  );
};
