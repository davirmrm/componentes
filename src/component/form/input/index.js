import React from 'react'

export function Input({ children, action, value, label, name, type = 'text', color = '' }) {
  return (
    <div className={`input-box ${color} `}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div>
        <input type={type} name={name} id={`id-${name}`} value={value} onChange={action} />

        {children && children.length ? (
          children.map(e => {
            return e && e.type && e.type.name === 'Action' ? e : null
          })
        ) : children && children.type && children.type.name === 'Action' ? (
          <div className='input-actions'>{children}</div>
        ) : null}
      </div>
      {children && children.length
        ? children.map(e => {
            return e && e.type && e.type.name !== 'Action' ? e : null
          })
        : children && children.type && children.type.name !== 'Action'
        ? children
        : null}
    </div>
  )
}
