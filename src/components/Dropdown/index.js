import React, { useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';

import { Icon, Counter } from '../';


const Dropdown = ({testid = false, style = {}, state = 'primary', toggle, children, title, label = '', width = '', onClick = () => {}, selected = {}, closeOnClick = false, right = false}) => {

  useEffect(() => {
    if (toggle) {
      document.addEventListener('mousedown', callback);
    }
    return () => {      
      document.removeEventListener('mousedown', callback);
    }
  }, [toggle]);

  
  const callback = (e) => {
    let onContent = false;
    e.path.map(node => {if (node.className && node.className.includes && node?.className?.includes('dropdownContent')) {onContent = true}});
    if (!onContent || closeOnClick) {
      document.removeEventListener('mousedown', callback);
      onClick(e);
    }
  }
  // TODO construir renderer do select :)

  return (
    <div testid={testid} className={`dropdownContainer ${toggle ? "open" : ""} ${state} ${state === 'status' ? selected.state : ''} ${state === 'statusForeground' ? `${selected.state}Foreground` : ''} ${label ? 'withLabel': ''}`} style={width ? {width, minWidth: width, maxWidth: width} : null}>
      <div className='dropdownHeader' onClick={(e) => { onClick(e); }}>
        <span style={{width: `calc(${width} - 28px)`}}>
          {state.includes('status') ? selected.label : <div>{title} {label && <Counter label={label} />} </div>}
        </span>
        <Icon icon={toggle ? 'Chevron Up' : 'Chevron Down'} size='1' style={{marginLeft: '0.75rem', cursor: 'pointer'}} />
      </div>
      {toggle &&
      <div className={`dropdownContent ${right ? 'right' : ''}`}>
        {children}
      </div>}
    </div>
  );
}

Dropdown.propTypes = {
  style: PropTypes.object
}

export default Dropdown;
