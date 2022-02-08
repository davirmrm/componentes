import React, { useState } from 'react';

import {
  withKnobs, text, select, boolean,
} from '@storybook/addon-knobs';

import { Input } from '../';

import CenterView from '../CenterView';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const input = () => {
  const [value, setValue] = useState('13213213');
  return (
  <CenterView>
    <Input
      style={{ width: '50%' }}
      label={text('Label', 'label')}
      placeholder={text('Placeholder', 'placeholder')}
      type={select('Tipo', ['text', 'number'], 'text')}
      iconLeft={select('Ícone à esquerda', ['Search', ''], 'Search')}
      iconRight={select('Ícone à direita', ['Chevron Down', ''], 'Chevron Down')}
      disabled={boolean('Desabilitar input', false)}
      onChange={(e) => { setValue(e.target.value) }}
      inconLeftClickHandle={() => { console.log('clicou'); }}
      mask='brl'
      value={value}
      errors={'teste'}
    />
  </CenterView>
)};
