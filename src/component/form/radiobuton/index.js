import React from 'react'

export function RadioButton({ options, action, checked, label, name, type = 'checkbox', color = '', text = '' }) {
  const checkedAction = e => {
    const resp = e
    action({ target: { name: name, value: resp, type: type } })
  }

  const veryfiChecked = e => {
    return checked.id === e.id ? true : false
  }

  return (
    <div className={`input-box ${color} `}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div>
        {options
          ? options.map(c => {
              return (
                <div
                  key={`${name}-${c.id}`}
                  className={`radio-box ${veryfiChecked(c) ? 'checked' : ''}`}
                  onClick={() => checkedAction(c)}
                >
                  <span className={type}></span>
                  {c.name}
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}
