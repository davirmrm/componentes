import React from 'react'
import { useState } from 'react';
import { DataTransform } from '../form/Mask';
import { IcoArrowForward } from '../icon/arrow-forward';
import './menuWizard.css'

export function MenuWizard({ children, data, selected, action, maisInfo, actionMaisInfo }) {
  const [widthitem, setwidthitem] = useState('15px')
  setTimeout(() => {
    const WHwizard = document.querySelectorAll('.menuWizard'),
          wBtn = 30,
          Wwizard = WHwizard?.[0]?.clientWidth,
          Hwizard = WHwizard?.[0]?.clientHeight,
          Witens = (data?.length * wBtn) + ((data?.length - 1) * 15);
          setwidthitem( Witens >= Wwizard ? '15px' : `${(Wwizard - (data?.length * wBtn)) / (data?.length - 1)}px` )
  }, 100);

  return (
    <div className='menuWizard'>
      <div>
        {data && data.length
        ? data.map((item, i) => {
            return (<div key={i}>
              {i > 0 ?
                <span style={{width: widthitem}}></span>
                :null
              }
              <button className={selected.id === item.id ? 'active' : ''} onClick={() => action(item)} title={item.description}>
                {item.text}
              </button>
              <div className='info-menuWizard'>{item.description}</div>
            </div>
            )
          })
        : null}
        {maisInfo ? (<div>
          <span style={{width: widthitem}}></span>
          <button onClick={() => actionMaisInfo('maisInfo')}>
             <IcoArrowForward />
          </button>
          </div>
        )
        : null}
      </div>
      

      {children}
    </div>
  )
}
