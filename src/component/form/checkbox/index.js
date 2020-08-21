import React from 'react'

export function Checkbox({ options, action, checked, label, name, type = 'checkbox', color = '', text = '' }) {
  const veryfiCheck = e => {
    const verify = checked.filter(elem => {
      return elem.id === e.id ? elem : null
    })

    const res = checked.filter(elem => {
      return elem.id !== e.id ? elem : null
    })

    if (checked.length === 0) {
      return [e]
    } else {
      if (verify.length === 0) {
        return checked.concat(e)
      } else {
        return res
      }
    }
  }

  const checkedAction = e => {
    const resp = options ? (e ? veryfiCheck(e) : []) : e
    action({ target: { name: name, value: resp, type: type } })
  }

  const veryfiChecked = e => {
    if (!options) {
      return checked.id === e.id ? true : false
    } else {
      if (checked.length === 0) {
        return false
      } else {
        const verify = checked.filter(elem => {
          return elem.id === e.id ? elem : null
        })

        if (verify.length === 0) {
          return false
        } else {
          return (verify[0] && verify[0].id) === e.id ? true : false
        }
      }
    }
  }

  return (
    <div className={`input-box ${color} `}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div>
        {options ? (
          options.map(c => {
            return (
              <div
                key={`${name}-${c.id}`}
                className={`check-box ${veryfiChecked(c) ? 'checked' : ''}`}
                onClick={() => checkedAction(c)}
              >
                <span className={type}></span>
                {c.name}
              </div>
            )
          })
        ) : (
          <div className={`check-box ${checked ? 'checked' : ''}`} onClick={() => checkedAction(!checked)}>
            <span className={type}></span>
            {text}
          </div>
        )}
      </div>
    </div>
  )
}
