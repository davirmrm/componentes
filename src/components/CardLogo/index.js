import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';

import { Icon } from '../';


const CardLogo = ({testid = false, style = {}, className = '', title='', label='', icon='Home', onClick = () => {}}) => {
  return (
    <div testid={testid} className={`cardLogo ${className} ${window.innerHeight < 670 ? 'mini' : ''}`} style={style} onClick={() => onClick()} >
      <Icon size='3' icon={icon} />
      <h1>{title}</h1>
      {label}
      <span>Acessar <Icon icon='Arrow Right'/></span>
    </div>
  );
}

CardLogo.propTypes = {
  style: PropTypes.object
}

export default CardLogo;
