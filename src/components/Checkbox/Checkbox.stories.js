import React, { useState } from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { Checkbox } from '../';
import CenterView from '../CenterView';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withKnobs],
};
export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <CenterView>
      <Checkbox checked={checked} onClick={() => setChecked(!checked)}  strong='CLIQUE AQUI'/>
    </CenterView>
  );
};
