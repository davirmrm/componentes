import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';


const BackButton = ({testid = false, style = {}, onClick = () => {}, label = 'Voltar', icon = 'Arrow Left'}) => {
  return (
    <div testid={testid} style={style} className='backButton' onClick={() => onClick()}>
      <Icon icon={icon} size='1'/>
      <h6>{label}</h6>
    </div>
  );
}

BackButton.propTypes = {
  style: PropTypes.object
}

export default BackButton;
