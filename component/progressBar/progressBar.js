import React from 'react'
import './progressBar.css'

export function ProgressBar({
  progress, 
  text = {start: 'Start', finish: 'Finish'}, 
  color = ''
}) {
  return (
      <div className='box-progress-bar'>
        <div className='cal-group'>
          <div className='cal-iten cal-auto'>
            {text.start}
          </div>
          <div className='cal-iten cal-90'>
            <div className={`bar ${color}`} title={`${progress}%`}>
              <div style={{width: `${progress}%`}}></div>
            </div>
          </div>
          <div className='cal-iten cal-auto'>
            {text.finish}
          </div>
        </div>
      </div>
  )
}
