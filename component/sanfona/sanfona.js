import React, { useEffect } from 'react'
import { useState } from 'react'
import { IcoMais, IcoMenos } from '..'
import './sanfona.css'

export function Sanfona({ data = [], tabSelect = '', actionTab, type }) {
  const [tabStateId, setTabStateId] = useState('')
  useEffect(()=> {
    if (data) {
      const selectTab = data.filter((e)=> e.id === (tabSelect?tabSelect:data[0].id))
      if (selectTab.length) {
        setTabStateId(selectTab[0].id)
      }
    }
  }, [data])

  return (
    <div className={`${type === 'custom' ? 'custom-tab' : 'box-tab'} ` }>
      { data?.map((e)=> <div key={e.id} className={e.id === tabStateId? 'open' : ''} >
        <div className='sanfona-header' onClick={()=> [setTabStateId(tabStateId === e.id ? '' : e.id), actionTab(e.id)]}>
          <h6>{e.title}</h6>
          <span>{e.id === tabStateId? <IcoMenos /> : <IcoMais />}</span>
        </div>
        <div className='sanfona-content'>{e.content}</div>
      </div>) }
    </div>
  )
}
