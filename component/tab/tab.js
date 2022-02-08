import React, { useEffect } from 'react'
import { useState } from 'react'
import './tab.css'

export function Tab({ data = [], type = 'normal', tabSelect = '', actionTab }) {
  const [tabState, setTabState] = useState('')
  const [tabStateId, setTabStateId] = useState('')
  useEffect(()=> {
    const selectTab = data.filter((e)=> e.id === (tabSelect?tabSelect:data[0].id))
    setTabState(selectTab[0].content)
    setTabStateId(selectTab[0].id)
  }, [data])

  return (
    <div className={`box-tab-${type}`}>
      <div className='tab-head'>
        { data.map((e)=> <div key={e.id} className={e.id === tabStateId? 'active' : ''} onClick={()=> [setTabStateId(e.id), setTabState(e.content), actionTab(e.id)]}>{e.head}</div>) }
      </div>
      <div className='tab-content'>
        {tabState}
      </div>
    </div>
  )
}
