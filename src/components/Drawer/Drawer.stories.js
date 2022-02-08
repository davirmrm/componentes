import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Drawer } from '..';

export default {
  title: 'Drawer',
  component: Drawer,
  decorators: [withKnobs],
};
export const drawer = () => (
  <Drawer
    onClick={action('clicked')}
    show={select('Mostrar drawer', [false, true], false)}
    shadow
  >
    <div style={{ width: '300px', height: '100vh', backgroundColor: 'var(--background-secondary)' }}>
      Drawer
    </div>
  </Drawer>
);
