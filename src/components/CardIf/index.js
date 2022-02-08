import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';

import { Icon } from '../';


const CardIf = ({testid = false, style = {}, label = '', suLabel = '', onClick = () => {}}) => {
  return (
    <div testid={testid} style={style} className='cardIf' onClick={(e) => {onClick(e)}}>
      <div className='text'>
        <h3>{label}</h3>
        <h5>{suLabel}</h5>
      </div>
      <Icon icon='Login' size='2' />
    </div>
  );
}

CardIf.propTypes = {
  style: PropTypes.object
}

export default CardIf;
