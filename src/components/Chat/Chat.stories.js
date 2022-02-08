import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { Chat } from '../';

export default {
  title: 'Chat',
  component: Chat,
  decorators: [withKnobs],
};
export const chat = () => (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <Chat style={{width: '700px'}}>
    </Chat>
  </CenterView>
);

export const secondary = () => (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <Chat style={{width: '700px'}} messages={[]} clientSide>
    </Chat>
  </CenterView>
);
