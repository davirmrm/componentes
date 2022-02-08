import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';

const Card = ({testid = false, style = {}, iconLeft = null, iconRight = null, label = '', checked = false, onClick = () => {} }) => {
  return (
    <div testid={testid} className='card' style={style} onClick={(e) => onClick(e)}>
      {iconLeft && <Icon className={`iconLeft ${checked ? 'checked': ''}`} icon={iconLeft} size='1.5'/>}
      <h3>{label}</h3>
      {iconRight && <Icon className='iconRight' icon={iconRight} size='1.5'/>}
    </div>
  );
}

Card.propTypes = {
  style: PropTypes.object
}

export default Card;
