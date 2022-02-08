import React, { useState, useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';



const DropdownState = ({testid = false, style = {}, data = [], onChange = () => {}, state = 'primary'}) => {
  return (
    <div testid={testid} className={`DropdownStateContainer ${state}`}>
      {data.map((e, index) => (
        <div key={index} onMouseDown={() => onChange(index)} id={`dropdownState#${index}`}>
          {e.label}
        </div>
      ))}
    </div>
  );
}

DropdownState.propTypes = {
  style: PropTypes.object
}

export default DropdownState;
