import React from 'react'

export function InputOnlyVisible({
  value, 
  label, 
  name = '', 
  color = '', 
  required = {},
  cursor = 'no-drop',
}) {
  const require = Object.keys(required)

  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      {label?<label className='label-input'> {label}</label>:null}
      
      <div>
        <p className='input' style={{cursor: cursor}}>{value}</p>
      </div>
    </div>
  )
}
