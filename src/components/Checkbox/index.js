import React from 'react';

import PropTypes from 'prop-types';

import Icon from '../Icon';
import styles from './style.scss';

const Checkbox = ({
  testid = false, 
  style = {}, label = 'checkbox', checked = false, onClick = () => {}, type='primary', strong = '', clickStrong = () => {}
}) => { 
  const handleClick = e => {
    if (e.target.nodeName !== 'STRONG') {
      onClick(e);
    }
  }

  return (
  <div testid={testid} className={`checkbox ${checked ? 'checked' : ''} ${type}`} style={style} onClick={(e) => handleClick(e)}>
    <div className="box">
      <Icon icon="Check" className="check" size="0.8" />
    </div>
    {label}
    {strong &&
    <>
      &nbsp;
      <strong onClick={() => {clickStrong()}}>
        {strong}
      </strong>
    </>
    }
  </div>
)};

Checkbox.propTypes = {
  style: PropTypes.object,
};

export default Checkbox;
