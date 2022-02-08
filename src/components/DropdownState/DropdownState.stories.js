import React, {useState} from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import { DropdownState, Dropdown } from '../';

export default {
  title: 'DropdownState',
  component: DropdownState,
  decorators: [withKnobs],
};
export const dropdownState = () => {

  const [data, setData] = useState([{label: 'Em análise de aprovação', state: 'warning'}, {label: 'Atrasado', state: 'danger'},  {label: 'Concluído', state: 'success'},])
  const [selected, setSelected] = useState({label: 'Em análise de aprovação', state: 'warning'})
  const [toggle, setToggle] = useState(false);

  return(
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <Dropdown state='status' selected={selected} toggle={toggle} onClick={() => {setToggle(!toggle)}} closeOnClick>
      <DropdownState
        data={data}
        onChange={index => {setSelected(data[index])}}
        >
      </DropdownState>
    </Dropdown>
  </CenterView>
)};

export const dropdownStateSecondary = () => {

  const [data, setData] = useState([{label: 'Em análise de aprovação', state: 'warning'}, {label: 'Atrasado', state: 'danger'}, {label: 'Concluído', state: 'success'}, {label: 'Inativo', state: 'inative'},])
  const [selected, setSelected] = useState({label: 'Em análise de aprovação', state: 'warning'})
  const [toggle, setToggle] = useState(false);

  return(
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <Dropdown state='statusForeground' selected={selected} toggle={toggle} onClick={() => {setToggle(!toggle)}} closeOnClick>
      <DropdownState
        data={data}
        onChange={index => {setSelected(data[index])}}
        state='secondary'
        >
      </DropdownState>
    </Dropdown>
  </CenterView>
)};
