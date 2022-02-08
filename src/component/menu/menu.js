import React from 'react'
import { useLocation } from 'react-router-dom'
import { history } from '../../helpers'
import './menu.css'

export function Menu({ 
  children, 
  data, 
  action=()=>{} 
}) {
  const location = useLocation()
  const isActive = address => location.pathname === address
  const actionMenu = (e) => {
    if (window.screen.width < 780) {
      action(false)
    }
    if (e.url) {
      window.open(e.url, "_blank")
    } else{
      history.push(e.go)
    }
  }

  return (
    <div className='menu'>
      {data && data.length
        ? data.map(item => {
            return (
              <button key={item.id} className={isActive(item.go) ? 'active' : ''} onClick={() => actionMenu(item)}>
                {item.label}
              </button>
            )
          })
        : null}

      {children}
    </div>
  )
}
