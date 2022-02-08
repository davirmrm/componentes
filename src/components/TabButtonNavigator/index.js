import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


import { Button } from '../';


const TabButtonNavigator = ({testid = false, style = {}, className, data, selected, onClick = () => {}}) => {
  return (
    <div testid={testid} className={`tabButtonNavigatorContainer ${className}`} style={style}>
      {data.map((btn, index) => (
        <Button key={index} label={btn.label} onClick={() => onClick(btn)} state={`tab-button${selected?.label === btn.label ? '-selected' : ''}`}></Button>
      ))}
    </div>
  );
}

TabButtonNavigator.propTypes = {
  style: PropTypes.object
}

export default TabButtonNavigator;
