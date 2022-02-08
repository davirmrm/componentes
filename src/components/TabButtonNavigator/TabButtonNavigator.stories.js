import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { TabButtonNavigator } from '../';

export default {
  title: 'TabButtonNavigator',
  component: TabButtonNavigator,
  decorators: [withKnobs],
};
export const tabButtonNavigator = () => {
  
const [selected, setSelected] = useState(null)
return (
  <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
    <TabButtonNavigator 
    data={[{label: 'Op 1'},{label: 'Op 2'},{label: 'Op 3'}]}
    onClick={(s) => {setSelected(s)}}
    selected={selected}
    >
    </TabButtonNavigator>
  </CenterView>
)};
