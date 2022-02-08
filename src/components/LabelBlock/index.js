import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const LabelBlock = ({testid = false, style = {}, children, label}) => {
  return (
    <div testid={testid} className='labelBlock' style={style}>
      <div className='label'>
        {label}
      </div>
      <div className='block'>
        {children}
      </div>
    </div>
  );
}

LabelBlock.propTypes = {
  style: PropTypes.object
}

export default LabelBlock;
