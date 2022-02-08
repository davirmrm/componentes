import React, { useState, useEffect } from 'react';

import {
  withKnobs, text, select,
} from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import { PriceCard } from '../';

export default {
  title: 'PriceCard',
  component: PriceCard,
  decorators: [withKnobs],
};
export const Default = () => {
  const [selected, setSelected] = useState(false);
  const [rate, setRate] = useState(120);

  const [timer, setTimer] = useState(new Date(2020, 11, 1, 17, 36, 0, 0));

  // useEffect(() => {
  //   let date = new Date();
  //   date.setMinutes(date.getMi() + 2);
  //   setTimer(date);
  // }, [])

  return (
    <CenterView bg={{ backgroundColor: 'var(--background-secondary)' }}>
      <PriceCard
        style={{ width: '330px' }}
        selected={selected}
        rate={rate}
        time={timer}
        mcc="mcc XPTO grande XPTO grande XPTO grande XPTO grande"
        dayCount={Number.parseInt(text('Contagem de dias', '10'))}
        value={Number.parseInt(text('Valor', '100000'))}
        status={select('Status', ['danger', 'success'], 'danger')}
        onChange={(e) => { console.log(e); setRate(e); }}
        handleClickToUnselect={() => { setSelected(false); }}
        onClick={() => { setSelected(true); }}
        timeout={1}
        // forceTemporaryBlock='4'
      />
    </CenterView>
  );
};
