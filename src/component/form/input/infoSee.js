import React from 'react'

export function InfoSee({
  value, 
  valueCustom=false, 
  label,
}) {
  return (
    <div>
      <label>{label}</label>
      <div>
        {
          valueCustom?
          valueCustom
          :
          <p>{value}</p>
        }
      </div>
    </div>
  )
}
