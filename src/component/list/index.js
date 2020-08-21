import React from 'react'
import './list.css'

export function List({ head = [], content = [], listActions = () => null, children }) {
  console.log(head, 'head', children)
  return (
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
        {content.map(container => {
          return (
            <tr key={container.id}>
              {head.map(header => {
                return (
                  <td className={header.className} key={`${container.id}-${header.colunm}`}>
                    {container[header.colunm] ? container[header.colunm] : listActions(container)}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
