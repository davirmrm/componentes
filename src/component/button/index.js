import React from 'react'
import './button.css'

export function Button({ children, action, color = 'secondary', varian = 'normal', size = 'medium' }) {
  return (
    <button className={`btn ${color} ${varian} ${size} `} onClick={action} title={children}>
      {children}
    </button>
  )
}
