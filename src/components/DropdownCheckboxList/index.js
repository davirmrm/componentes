import React, { useState, useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';

import { Checkbox, Button, Input } from '../';


const DropdownCheckboxList = ({testid = false, style = {}, data = [], state='primary', onClickConfirm = () => {}, onClickCancel = () => {}, onChange = () => {}, haveSearch = false, selectedData = []}) => {


  const [localData, setLocalData] = useState(data);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setLocalData(data);
  }, [data])

  const doSearch = (e) => {
    const newData = data.filter(checkbox => checkbox.label.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
    setLocalData(newData);
    setSearchValue(e.target.value);
  }

  const isSelected = e => !!selectedData.find(selected => selected.label === e.label);

  const onClick = e => {
    const localSelectedData = selectedData;
    let i = -1;
    if (!!localSelectedData.find((selected, index) => {if (e.label === selected.label) {i = index; return selected}})) {
      localSelectedData.splice(i, 1);
    } else {
      localSelectedData.push(e);
    }
    onChange(localSelectedData);
  }

  return (
    <div testid={testid} className={`DropdownCheckboxListContainer ${state}`}>
      {haveSearch && <Input iconLeft='Search' placeholder='Buscar...' value={searchValue} onChange={(e) => doSearch(e)} />}
      <div className='checkList'>
        {localData.map((check, index) => (
          <Checkbox key={index} type='secondary' label={check.label} checked={isSelected(check)} onClick={() => onClick(check)} />
        ))}
      </div>
      <div className='buttons'>
        <Button onClick={() => onClickCancel()} label='cancelar' size='small' state={`${state === 'primary' ? 'transparent' : 'white'}`} />
        <Button onClick={() => onClickConfirm()} label='aplicar' size='small' />
      </div>
    </div>
  );
}

DropdownCheckboxList.propTypes = {
  style: PropTypes.object
}

export default DropdownCheckboxList;
