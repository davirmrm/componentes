/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Button } from '..';

import CenterView from '../CenterView';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};
export const button = () => (
  <CenterView>
    <Button
      onClick={action('clicked')}
      state={select(
        'Qual tipo de botão',
        [
          'default',
          'dark',
          'light',
          'neutral',
          'danger',
          'dangerFilled',
          'success',
          'warning',
        ],
        'default',
      )}
      label={text('Texto do botão', 'Botão')}
      icon={text('Digite o nome do ícone', '')}
      disabled={select('Botão está desabilitado', [false, true], false)}
      rounded={select('Botão é redondo', [false, true], false)}
    />
  </CenterView>
);
