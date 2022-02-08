import React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { CardLogo } from '../';

export default {
  title: 'CardLogo',
  component: CardLogo,
  decorators: [withKnobs],
};
export const cardLogo = () => (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <div style={{width: '200px', height: '210px'}}>
    <CardLogo
    icon='Metricas'
    title='Métricas'
    label='Visualize as métricas detalhadas de cotações, operações, taxas e chargebacks.'
    >
    </CardLogo>
    </div>  
  </CenterView>
);
