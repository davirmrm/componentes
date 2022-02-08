import React, {useState} from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import { DropdownCheckboxList } from '..';

export default {
  title: 'DropdownCheckboxList',
  component: DropdownCheckboxList,
  decorators: [withKnobs],
};
export const dropdownCheckboxList = () => {
  
  const [selectedData, setSelectedData] = useState([{label:'Estabelecimento comercial'}]);
  const [data, setData] = useState([{label: 'Estabelecimento comercial', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}])

  return(
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <DropdownCheckboxList
      data={data}      
      onChange={list => setSelectedData([...list])} 
      selectedData={selectedData}
      >
    </DropdownCheckboxList>
  </CenterView>
)};

export const dropdownCheckboxListWithSearch = () => {

  const [data, setData] = useState([{label: 'Estabelecimento comercial', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}, {label: 'Instituição financeira', check: false}])
  const [selectedData, setSelectedData] = useState([{label:'Estabelecimento comercial'}]);

  return(
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <DropdownCheckboxList
      haveSearch={true}
      data={data}
      selectedData={selectedData}
      onChange={list => setSelectedData([...list])}
      >
    </DropdownCheckboxList>
  </CenterView>
)};
