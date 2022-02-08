import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';


const InfoNumber = ({testid = false, style = {}, status='', label='', number={}}) => {
  return (
    <div testid={testid} className='infoNumber' style={style}>
      <span className={status}>{number}</span>
      {label}
    </div>
  );
}

InfoNumber.propTypes = {
  style: PropTypes.object,
  status: PropTypes.string,
  label: PropTypes.string,
  number: PropTypes.number,
}

export default InfoNumber;
