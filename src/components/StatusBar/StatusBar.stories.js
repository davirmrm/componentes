import React, { useState, useEffect } from 'react';

import {
  withKnobs, boolean,
} from '@storybook/addon-knobs';

import { StatusBar } from '..';

import CenterView from '../CenterView';

export default {
  title: 'StatusBar',
  component: StatusBar,
  decorators: [withKnobs],
};
export const statusBar = () => {
  

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setTimer(new Date('2020', '12', '01', '18', '27', '0', '00'))
    }, 4000);
  }, [])

  return (
  <CenterView>
    <StatusBar
      isOnline={boolean('Esta online', true)}
      time={timer}
    />
  </CenterView>
)};
