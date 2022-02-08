import React from 'react';

import { action } from '@storybook/addon-actions';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import { UploadArea } from '../';
import CenterView from '../CenterView';

export default {
  title: 'UploadArea',
  component: UploadArea,
  decorators: [withKnobs],
};
export const Default = () => (
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <UploadArea
      receiveFilesChange={action('')}
      style={{ width: '46rem' }}
      columns="3"
      height="9.5"
      changeFilesFeedback={e => console.log(e)}
    />
  </CenterView>
);
