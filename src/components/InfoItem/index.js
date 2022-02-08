import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { int2Brl } from './../../utils/real';


const InfoItem = ({testid = false, style = {}, className = '', label = 'Valor bruto', value = 'Não informado', onClick = () => {}}) => {
  return (
    <div testid={testid} className={`infoItem ${className}`} style={style} onClick={() => onClick()}>
      <span>{label}</span>
      {value}
    </div>
  );
}

InfoItem.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.string,
}

export default InfoItem;
