import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import CenterView from '../CenterView';

import { Alert, Button } from '../';

export default {
  title: 'Alert',
  component: Alert,
  decorators: [withKnobs],
};
export const alert = () =>  {
  const [show, setShow] = useState(false);
  
  return (
  <CenterView bg={{ backgroundColor: '#171819' }}>
    <Button
      label="clique aqui :)"
      onClick={() => setShow(true)}
    />
    <Alert
      show={show}
      closeAlert={() => {setShow(false)}}
      state='danger'
      label='Erro ao fazer login'
      buttonLabel='Entendi'
      >
    </Alert>
  </CenterView>
)}
;
