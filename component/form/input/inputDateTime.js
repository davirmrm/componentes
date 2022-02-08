import React from 'react'
import { validarCampo } from '../../validation/Validation'
import { MaskData } from '../Mask'

export function InputDateTime({ 
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

  const validar = e => {
    const v = (require.length) ? validarCampo(e) : {}
    if (actionBlur) actionBlur(e, v)
  }

  const MaskDataTime = (valor) => {
    let val = valor
    .replace(/\D/g, '')
    .replace('/', '')
    .replace('-', '')

    let dia = val.slice(0, 2)
    let mes = val.slice(2, 4)
    let ano = val.slice(4, 8)
    let min = val.slice(8, 10)
    let seg = val.slice(10, 12)

    // if (dia > 31) {
    //   val = `${31}${mes}${ano}${23}${seg}`
    // }
    // if (mes > 12) {
    //   val = `${dia}${12}${ano}${23}${seg}`
    // }
    if (min > 23) {
      val = `${dia}${mes}${ano}${23}${seg}`
    }
    if (seg > 59) {
      val = `${dia}${mes}${ano}${min}${59}`
    }
    let valueNew = val
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1 - $2')
      .replace(/(.{15})(\d)/, '$1:$2')
    return valueNew
  }

  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      <label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>
      <div>
        <input 
          id={`id-${name}`} 
          type='text' 
          name={name} 
          value={MaskDataTime(value)} 
          onChange={action} 
          onBlur={e => validar(e)} 
          disabled={disabled}
          maxLength={18}
          pattern={pattern()}
          placeholder='dd / mm / aaaa - hh:mm'
        />
        <div className='input-actions'>
          {children && children.length
            ? children.map(e =>  {
              return e?.type && (e.type?.name === 'ActionForm') ? e : null
            })
            : children && children.type && (children.type?.name === 'ActionForm')
            ? children
            : null}
        </div>
      </div>
      {children && children.length
        ? children.map(e => e?.type && (e.type?.name !== 'ActionForm') ? e : null)
        : children && children.type && (children.type?.name !== 'ActionForm')
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
