import React, { useEffect, useRef } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';
import { round } from './../../utils/round';
import * as masks from '../../utils/masks';



const Input = ({ 
  testid = false, 
  style = {}, 
  className = '', 
  label = null, 
  placeholder = 'Placeholder', 
  type = 'text', 
  iconRight = null, 
  iconLeft = null, 
  disabled = false, 
  inconLeftClickHandle = () => {}, 
  inconRightClickHandle = () => {}, 
  value = undefined, 
  onChange = () => {},
  step = '1', 
  textAlign='left', 
  state = '', 
  mask = null, 
  errors = null, 
  maxLength = '524288', 
  onBlur = () => {}, 
  onFocus = () => {}, 
  onClick = () => {},
  keyPress = () => {},
  haveLabelIcon = false,
  labelIconClick = () => {}}) => {
    

  useEffect(() => {
    if (value !== undefined) {
      if (mask) {
        const valueBackup = value;
        value = masks[mask](`${value}`);
        if (value !== valueBackup) {
          onChange({target: {value}});
        }
      }
    }
  }, [value]);

  const input = useRef();

  const handleArrows = (direction) => {
    let newValue = 0;
    if (value) {
      newValue = value;
    }
    newValue = direction === 'up' ? parseFloat(newValue) + parseFloat(step) : newValue - parseFloat(step);
    if (step.indexOf('.') > -1 || step.indexOf(',') > -1) {
      onChange({target: {value: String(round(newValue).toFixed(2)) }});
    } else {
      onChange({target: {value: String(parseInt(round(newValue))) }});
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      keyPress('Enter');
    }
  }


  return (
    <div testid={testid} className={`input ${state} ${className}`} style={style}  onClick={() => { input.current.focus() }}>
      {label && 
        <header>
          <label>
            {label}
          </label>
          {haveLabelIcon && <Icon icon='Info' size='0.75' onClick={() => labelIconClick()} />}
        </header>
      }
      <div className={disabled ? 'disabled' : ''} onClick={(e) => {onClick(e)}}>
        {iconLeft && <Icon onClick={() => { !disabled && inconLeftClickHandle() }} icon={iconLeft} style={{marginRight: '0.75rem'}} />}
        <input onKeyDown={handleKeyDown} maxLength={maxLength} style={{textAlign: type === 'number' ? 'right' : textAlign}} value={value} step={step} onChange={(e) => {if(mask) {e.target.value = masks[mask](e.target.value); }onChange(e)}} onBlur={() => {onBlur()}} onFocus={() => {onFocus()}} disabled={disabled} type={type} placeholder={placeholder} ref={input} />
        {type==='number' &&
        <div className='arrows'>
          <Icon onClick={() => {handleArrows('up')}} icon='Arrow Number Up' size='0.75' style={{marginLeft: '0.75rem'}} />
          <Icon onClick={() => {handleArrows('down')}} icon='Arrow Number Down' size='0.75' style={{marginLeft: '0.75rem'}} />
        </div>}
        {iconRight && <Icon onClick={(e) => { inconRightClickHandle(e) }} icon={iconRight} style={{marginLeft: '0.75rem', cursor: 'pointer'}} />}
      </div>
      {errors && <span className='error'>{errors}</span>}
    </div>
  );
}

Input.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  iconRight: PropTypes.string,
  iconLeft: PropTypes.string,
  disabled: PropTypes.bool,
  inconLeftClickHandle: PropTypes.func,
  inconRightClickHandle: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  step: PropTypes.string,
  textAlign: PropTypes.string,
}

export default Input;
