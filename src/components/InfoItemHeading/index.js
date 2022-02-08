import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const InfoItemHeading = ({testid = false, style = {}, label = 'Valor bruto', value = 'RS 1.000,00', onClick = () => {}}) => {
  return (
    <div testid={testid} className='infoItemHeading' style={style} onClick={() => onClick()}>
      <span>{label}</span>
      {value}
    </div>
  );
}

InfoItemHeading.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.number,
}

export default InfoItemHeading;
