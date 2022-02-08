import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';


const TimerCell = ({testid = false, style = {}, state='success', label=''}) => {
  return (
    <div testid={testid} className={`timerCell timerCell-${state}`} style={style}>
      <Icon icon={state === 'success' ? 'Check Circle' : state === 'neutral' ? 'Alert' : 'Clock'} size='1'/>
      <span>{label}</span>
    </div>
  );
}

TimerCell.propTypes = {
  style: PropTypes.object,
  state: PropTypes.string,
  label: PropTypes.string,
}

export default TimerCell;
