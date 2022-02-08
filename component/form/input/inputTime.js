import React from 'react'
import { validarCampo } from '../../validation/Validation'

export function InputTime({ 
  children, 
  action,
  actionBlur,
  value, 
  label, 
  name = '', 
  type = 'text', 
  color = '', 
  disabled = false,
  required = {},
  maxLength = '1000'
}) {
  const require = Object.keys(required)
  const pattern = e => {
    if (typeof required?.pattern === 'object') {
      return JSON.stringify(required.pattern)
    } else if (typeof required?.pattern === 'string') {
      return required.pattern
    } else {
      return ''
    }
  }
  const typename = 'X'
  const typename2 = 'ne'

  const validar = e => {
    const v = (require.length) ? validarCampo(e) : {}
    if (actionBlur) actionBlur(e, v)
  }

  const MaskTime = (valor) => {
    let val = valor
    let min = valor.substr(0, 2)
    let seg = valor.substr(3, 5)
    if (min > 23) {
      val = `${23}${seg}`
    }
    if (seg > 59) {
      val = `${min}${59}`
    }
    return val.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1:$2').substr(0, 5)
  }

  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      <label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>
      <div>
        <input 
          id={`id-${name}`} 
          type={type} 
          name={name} 
          value={MaskTime(value)} 
          onChange={action} 
          onBlur={e => validar(e)} 
          disabled={disabled}
          maxLength={maxLength}
          pattern={pattern()}
          placeholder='--:--'
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
