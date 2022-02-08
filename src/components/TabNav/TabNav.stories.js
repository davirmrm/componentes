import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { TabNav } from '../';
import CenterView from '../CenterView';

export default {
  title: 'TabNav',
  component: TabNav,
  decorators: [withKnobs],
};
export const tabNav = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <TabNav useNavLink={false} />
  </CenterView>
);
