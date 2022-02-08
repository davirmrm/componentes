import React from 'react'
import { validarCampo } from '../../validation/Validation'
import { MaskData } from '../Mask'

export function InputDate({ 
  children, 
  action,
  actionBlur,
  value, 
  label, 
  name = '', 
  color = '', 
  disabled = false,
  required = {}
}) {
  const require = Object.keys(required)
  const pattern = e => {
    if (typeof required?.pattern === 'object') {
      return JSON.stringify(required.pattern)
    } else if (typeof required?.pattern === 'string') {
      return required.pattern
    } else {
      return 'date'
    }
  }
  const typename = 'X'
  const typename2 = 'ne'

  const validar = e => {
    const v = (require.length) ? validarCampo(e) : {}
    if (actionBlur) actionBlur(e, v)
  }

  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      <label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>
      <div>
        <input 
          id={`id-${name}`} 
          type='text' 
          name={name} 
          value={MaskData(value)} 
          onChange={action} 
          onBlur={e => validar(e)} 
          disabled={disabled}
          maxLength={10}
          pattern={pattern()}
          placeholder='dd / mm / aaaa'
        />
        <div className='input-actions'>
          {children && children.length
            ? children.map(e =>  {
              return e?.type && (e.type?.name === 'ActionForm' || e.type?.name === typename || e.type?.name === typename2) ? e : null
            })
            : children && children.type && (children.type?.name === 'ActionForm' || children.type?.name === typename || children.type?.name === typename2)
            ? children
            : null}
        </div>
      </div>
      {children && children.length
        ? children.map(e => e?.type && (e.type?.name !== 'ActionForm' && e.type?.name !== typename && e.type?.name !== typename2) ? e : null)
        : children && children.type && (children.type?.name !== 'ActionForm' && children.type?.name !== typename && children.type?.name !== typename2)
        ? children
        : null}
      {
        required.erro?.[name] ?
          <span className='campo-obrigatorio'>{required.message}</span>
        :null
      }
    </div>
  )
}
