import React from 'react';

import {
  withKnobs, text, boolean, number,
} from '@storybook/addon-knobs';

import { TextArea } from '../';
import CenterView from '../CenterView';

export default {
  title: 'TextArea',
  component: TextArea,
  decorators: [withKnobs],
};

export const textArea = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <TextArea
      style={{ width: '50%' }}
      label={text('Label', 'label')}
      placeholder={text('Placeholder', 'placeholder')}
      disabled={boolean('Desabilitar input', false)}
      onChange={(e) => { console.log(e.target.value); }}
      rows={number('Número de linhas', '5')}
    />
  </CenterView>
);
