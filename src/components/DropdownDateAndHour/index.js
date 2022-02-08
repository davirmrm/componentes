import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';

import { Input, Button } from '../';


const DropdownDateAndHour = ({testid = false, style = {}, state = 'primary', dateFrom = '', timeFrom = '', dateTo = '', timeTo = '', onClickConfirm = () => {}, onClickCancel = () => {}, onChange = () => {}}) => {
  const canConfirm = () => {
    if (`${dateFrom}${timeFrom}${dateTo}${timeTo}` === '') {
      return true;
    }
    if (dateFrom.length > 9 || dateTo.length > 9 || timeFrom.length > 4 || timeTo.length > 4) {
      return true;
    }
    return false;
  }
  return (
    <div testid={testid} className={`dropdownDateAndHourContainer ${state}`}>
      <div className='line'>
        <Input value={dateFrom} onChange={(e) => {onChange(e, 'dateFrom')}} mask='date' label='de' placeholder='00/00/0000' />
        <Input value={timeFrom} onChange={(e) => {onChange(e, 'timeFrom')}}  mask='time' placeholder='00:00' />
      </div>
      <div className='line'>
        <Input value={dateTo} onChange={(e) => {onChange(e, 'dateTo')}}  mask='date' label='até' placeholder='00/00/0000' />
        <Input value={timeTo} onChange={(e) => {onChange(e, 'timeTo')}}  mask='time' placeholder='00:00' />
      </div>
      <div className='buttons'>
        <Button onClick={() => onClickCancel()} label='cancelar' size='small' state={`${state === 'primary' ? 'transparent' : 'white'}`} />
        <Button onClick={() => onClickConfirm()} label='aplicar' size='small' disabled={!canConfirm()} />
      </div>
    </div>
  );
}

DropdownDateAndHour.propTypes = {
  style: PropTypes.object
}

export default DropdownDateAndHour;
