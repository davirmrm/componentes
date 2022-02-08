import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const Counter = ({testid = false, style = {}, label = ''}) => {
  return (
    <span testid={testid} className='counter' style={style}>
      {label}
    </span>
  );
}

Counter.propTypes = {
  style: PropTypes.object
}

export default Counter;
