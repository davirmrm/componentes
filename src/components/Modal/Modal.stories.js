import React, { useState } from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import { Modal, Button } from '../';
import CenterView from '../CenterView';

export default {
  title: 'Modal',
  component: Modal,
  decorators: [withKnobs],
};

export const Default = () => {
  const [show, setShow] = useState(false);

  return (
    <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
      <Button
        label="clique aqui :)"
        onClick={() => setShow(!show)}
      />
      <Modal
        show={show}
        closeModal={() => setShow(!show)}
      />
    </CenterView>
  );
};
