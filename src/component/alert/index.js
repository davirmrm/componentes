import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Portal from '../potal'
import './alert.css'

import { IcoCross } from '../icon'
import { Remove } from './actions'
export * from './actions'

export function Alert() {
  const dispatch = useDispatch()
  const alerts = useSelector(state => state.alerts)

  return (
    <Portal name='alert'>
      {alerts.map(alert => {
        setTimeout(
          function () {
            dispatch(Remove(alert.id))
          },
          alert.time ? alert.time : 3000
        )
        return (
          <div key={alert.id} className={`box-alert alert-${alert.type}`}>
            <div dangerouslySetInnerHTML={{ __html: alert.mensage }}></div>
            <button className='alert-close' onClick={() => dispatch(Remove(alert.id))}>
              <IcoCross />
            </button>
          </div>
        )
      })}
    </Portal>
  )
}
