import React, { useRef, forwardRef } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';


const Input = ({ testid = false, style = {}, label = null, placeholder = 'Placeholder', disabled = false, value = undefined, onChange = () => {}, rows = '1'}, ref) => {
  const input = useRef();


  return (
    <div testid={testid} className='inputTextArea' style={style}>
      {label && <label onClick={() => { ref.current.focus() }}>{label}</label>}
      <div className={disabled ? 'disabled' : ''}>
        <textarea ref={ref} value={value} onChange={(e) => {onChange(e)}} disabled={disabled} placeholder={placeholder} rows={rows} />
      </div>
    </div>
  );
}

Input.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.string,
}

export default forwardRef(Input);
