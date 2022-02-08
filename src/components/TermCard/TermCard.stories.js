import React, { useState } from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { TermCard } from '../';
import CenterView from '../CenterView';
import { term } from './data';

export default {
  title: 'TermCard',
  component: TermCard,
  decorators: [withKnobs],
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
      <TermCard
        term={term}
        checked={checked}
        onClick={() => setChecked(!checked)}
        title="Contrato de Adesão"
        checkboxLabel="Concordo com o Contrato de Adesão"
      />
    </CenterView>
  );
};
