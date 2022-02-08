import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { DropdownCheckboxRenderer } from '../';
import CenterView from '../CenterView';

export default {
  title: 'DropdownCheckboxRenderer',
  component: DropdownCheckboxRenderer,
  decorators: [withKnobs],
};

export const dropdownCheckboxRenderer = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <DropdownCheckboxRenderer {...{data: { dropdownCheckboxData: [{label: 'Estabelecimento comercial', check: false}, {label: 'Instituição financeira', check: false}] }, value: 'DropdownTexto'}} />
  </CenterView>
);