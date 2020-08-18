import React from 'react'
import './button.css'

export function Button({ children, action, type = 'btn', color = 'secondary', variant = 'normal', size = 'medium' }) {
  return (
    <button className={`${type} ${color} ${variant} ${size} `} onClick={action} title={children}>
      {children}
    </button>
  )
}
