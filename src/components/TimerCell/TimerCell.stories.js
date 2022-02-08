import React from 'react';

import {
  withKnobs, text, select, boolean,
} from '@storybook/addon-knobs';

import { TimerCell } from '../';
import CenterView from '../CenterView';

export default {
  title: 'TimerCell',
  component: TimerCell,
  decorators: [withKnobs],
};
export const timerCell = () => (
  <CenterView>
    <TimerCell
      state={select('Estado do timer', ['success', 'warning', 'danger', 'neutral'], 'success')}
      label={text('Texto do timer', '0H00M')}
    />
  </CenterView>
);
