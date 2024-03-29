import React from 'react'
import Portal from '../potal/portal'
import './modal.css'

import { IcoClose } from '../icon/icon'

const typename = 'Ce'

export function Modal({ title = '', children, open = false, close = {}, closeText = 'Fechar', size = 'medium' }) {
  if (children?.length === undefined) { children = [children] }
  return (
    <Portal name='modal'>
      {open
        ? size === 'fullScreen'
          ? fulscren({ title, children, size, closeText, close })
          : modalNormal({ title, children, size, closeText, close })
        : null}
    </Portal>
  )
}

const fulscren = ({ title, children, closeText, close }) => {
  return (
    <div className={`box-modal fullScreen`}>
      <div className='modal-header'>
        {title}
        {children?.map(e => {
          console.log(children.type.name, 'modal full');
          return e?.type?.name && (e.type.name === typename || e.type.name === 'ActionsModal') ? (
            <div key={`${e.type}-actions-modal`} className='modal-actions'>
              <button className='btn secondary normal' onClick={close}>
                {closeText}
              </button>
              {e}
            </div>
          ) : null
        })}
      </div>
      {children?.map(e => {
        return e?.type?.name  && (e.type.name === typename || e.type.name === 'ActionsModal') ? null : (
          <div key={`${e.type}-actions-modal`} className='modal-content'>
            {e}
          </div>
        )
      })}
    </div>
  )
}

const modalNormal = ({ title, children, size, closeText, close }) => {
  return (
    <div className={`box-modal`}>
      <div className={`size-${size}`}>
        <div className='modal-header'>
          {title}
          <button className='modal-close' onClick={close} title={closeText}>
            <IcoClose />
          </button>
        </div>

        {children.map((e, i) =>  {
            console.log(e, typename, 'modal', e.type?.name);
          return e?.type?.name  && (e.type.name === typename || e.type.name === 'ActionsModal') ? (
            <div key={`${e.type}-actions-modal`} className='modal-actions'>
              <button className='btn secondary normal' onClick={close}>
                {closeText}
              </button>
              {e}
            </div>
          ) : (
            <div key={`${e}-actions-modal`} className='modal-content'>
              {e}
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export function ActionsModal({ children }) {
  return <>{children}</>
}
