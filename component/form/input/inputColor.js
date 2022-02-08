import React from 'react'
import { validarCampo } from '../../validation/Validation'

export function InputColor({ 
  children, 
  action,
  actionBlur,
  value, 
  lista = [],
  label, 
  name = '', 
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
  const typename = 'K'
  const typename2 = '$'

  const validar = e => {
    const v = (require.length) ? validarCampo(e) : {}
    if (actionBlur) actionBlur(e, v)
  }

  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      {label?<label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>:null}
      <div>
        <input 
          id={`id-${name}`} 
          type='color' 
          name={name} 
          value={value} 
          onChange={action} 
          onBlur={e => validar(e)} 
          disabled={disabled}
          maxLength={maxLength}
          pattern={pattern()}
          list={`${name}Colors`}
        />
        <datalist id={`${name}Colors`}>
          {
            lista.map((cor, i)=> <option key={`${i}-${cor}`}>{cor}</option>)
          }
        </datalist>
        <div className='input-actions'>
          {children && children.length
            ? children.map(e =>  {
              // console.log(e, typename, 'input', e?.type?.name) 
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
