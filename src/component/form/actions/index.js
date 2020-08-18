import React from 'react'

export function Action({ children, action, title = '', color = 'secondary' }) {
  return (
    <button onClick={action} title={title}>
      {children}
    </button>
  )
}
