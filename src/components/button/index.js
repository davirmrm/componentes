import React from 'react'
import style from './button.css'

export const Button = ({
  children,
  action = ()=> null,
  type = 'btn',
  color = 'secondary',
  variant = 'normal',
  size = 'medium',
  title = '',
  disabled = false
}) =>  {
  return (
    <button
      className={`${type} ${color} ${variant} ${size} `}
      onClick={action}
      title={title ? title : children}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
