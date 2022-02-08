import React from 'react';

import {
  withKnobs, text, select,
} from '@storybook/addon-knobs';

import { InfoNumber } from '../';
import CenterView from '../CenterView';

export default {
  title: 'InfoNumber',
  component: InfoNumber,
  decorators: [withKnobs],
};
export const infoNumber = () => (
  <CenterView>
    <InfoNumber
      status={select('Estado', ['warning', 'danger', 'success'], 'warning')}
      label={text('Texto', 'pendentes')}
      number={Number.parseInt(text('Número', '10'))}
    />
  </CenterView>
);
