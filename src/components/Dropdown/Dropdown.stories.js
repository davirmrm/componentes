import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import CenterView from '../CenterView';
import { Dropdown, DropdownCheckboxList, DropdownDateAndHour } from '../';

export default {
  title: 'Dropdown',
  component: Dropdown,
  decorators: [withKnobs],
};

const initialData = [{label: 'Estabelecimento comercial', check: false}, {label: 'Instituição financeira', check: false}];
const initialFields = {dateFrom: '', timeFrom: '', dateTo: '', timeTo: ''};

export const dropdownWithDateAndHour = () => {
  const [toggle, setToggle] = useState(false)
  const [fields, setFields] = useState(initialFields);

  return (
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <Dropdown title='Data e hora da solicitação' label='8' toggle={toggle} onClick={() => {setToggle(!toggle)}}>
      <DropdownDateAndHour
        dateFrom={fields.dateFrom}
        timeFrom={fields.timeFrom}
        dateTo={fields.dateTo}
        timeTo={fields.timeTo}
        onChange={(e, from) => {setFields({...fields, [from]: e.target.value})}}
        onClickCancel={() => {setToggle(!toggle); setFields(initialFields); }}
        onClickConfirm={() => {setToggle(!toggle)}}
        >
      </DropdownDateAndHour>
    </Dropdown>
  </CenterView>
)};

export const dropdownSecondaryWithDateAndHour = () => {
  const [toggle, setToggle] = useState(false)
  const [fields, setFields] = useState(initialFields);

  return (
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <Dropdown title='Data e hora da solicitação' label='8' toggle={toggle} onClick={() => {setToggle(!toggle)}} state='secondary'>
      <DropdownDateAndHour
        state='secondary'
        dateFrom={fields.dateFrom}
        timeFrom={fields.timeFrom}
        dateTo={fields.dateTo}
        timeTo={fields.timeTo}
        onChange={(e, from) => {setFields({...fields, [from]: e.target.value})}}
        onClickCancel={() => {setToggle(!toggle); setFields(initialFields); }}
        onClickConfirm={() => {setToggle(!toggle)}}
        >
      </DropdownDateAndHour>
    </Dropdown>
  </CenterView>
)};

export const dropdownWithCheckbox = () => {
  const [toggle, setToggle] = useState(false)
  const [selectedData, setSelectedData] = useState([{label:'Estabelecimento comercial'}]);
  const [data, setData] = useState(initialData);

  return (
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <Dropdown title='Nome' label='8' toggle={toggle} onClick={() => {setToggle(!toggle)}}>
      <DropdownCheckboxList
        data={data}
        onChange={list => setSelectedData([...list])} 
        selectedData={selectedData}
        onClickCancel={() => {setToggle(!toggle); setData(initialData); }}
        onClickConfirm={() => {setToggle(!toggle)}}
        >
      </DropdownCheckboxList>
    </Dropdown>
  </CenterView>
)};


export const dropdownWithCheckboxSearchable = () => {

  const [toggle, setToggle] = useState(false)
  const [selectedData, setSelectedData] = useState([{label:'Estabelecimento comercial'}]);
  const [data, setData] = useState(initialData);

  return (
  <CenterView bg={{ backgroundColor: 'var(--background-primary)' }}>
    <Dropdown title='Nome' label='8' toggle={toggle} onClick={() => {setToggle(!toggle)}}>
      <DropdownCheckboxList
        data={data}
        haveSearch={true}
        onChange={list => setSelectedData([...list])} 
        onClickCancel={() => {setToggle(!toggle);  setData(initialData); }}
        onClickConfirm={() => {setToggle(!toggle)}}
        selectedData={selectedData}
        >
      </DropdownCheckboxList>
    </Dropdown>
  </CenterView>
)};
