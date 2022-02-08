import React from 'react'
import './list.css'

export function List({ head = [], data = [], listCustom = () => null, children, text = 'No registers' }) {
  return (
    <div className='box-scrool'>
      <table className='list-box'>
        <thead>
          <tr>
            {head.map(header => {
              return (
                <td className={header.className} key={header.colunm}>
                  {header.text}
                </td>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data?.length ? data.map((container, i) => {
            listCustom(container, i)
            return (
              <tr key={container.id ? container.id : i}>
                {head.map(header => {
                  return (
                    <td className={header.className} key={`${container.id ? container.id : i}-${header.colunm}`}>
                      {container[header.colunm] ? container[header.colunm] : ''}
                    </td>
                  )
                })}
              </tr>
            )
          }): <tr><td colSpan={head.length} style={{textAlign: 'center'}}>{text}</td></tr>}
        </tbody>
      </table>
    </div>
  )
}
