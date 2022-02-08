import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { DropdownStateRenderer } from '../';
import CenterView from '../CenterView';

export default {
  title: 'DropdownStateRenderer',
  component: DropdownStateRenderer,
  decorators: [withKnobs],
};

export const dropdownStateRenderer = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>    
    <DropdownStateRenderer {...{data: { dropdownStateData: [{label: 'Em análise de aprovação', state: 'warning'}, {label: 'Atrasado', state: 'danger'}, {label: 'Concluído', state: 'success'}, {label: 'Inativo', state: 'inative'}] }, value: {label: 'pendente', state: 'warning'}}} />
  </CenterView>
);