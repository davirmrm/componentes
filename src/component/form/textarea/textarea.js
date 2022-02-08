import React from 'react'

export function Textarea({ 
  children, 
  action, 
  value = '', 
  label, 
  name, 
  color = '',
  required = {},
  maxLength = '1000' 
}) {
  const require = Object.keys(required)
  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      <label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>
      <div>
        <textarea name={name} id={`id-${name}`} onChange={action} value={value} />

        {children && children.length ? (
          children.map(e => {
            return e && e.type && e.type.name === 'ActionForm' ? e : null
          })
        ) : children && children.type && children.type.name === 'ActionForm' ? (
          <div className='textarea-actions'>{children}</div>
        ) : null}
      </div>
      {children && children.length
        ? children.map(e => {
            return e && e.type && e.type.name !== 'ActionForm' ? e : null
          })
        : children && children.type && children.type.name !== 'ActionForm'
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
