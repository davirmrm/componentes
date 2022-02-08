import React from 'react'
import CKEditor from "react-ckeditor-component";

export function TextareaEditor({ 
  children, 
  action, 
  value = '', 
  label, 
  name, 
  color = '',
  required = {},
  maxLength = '1000' 
}) {
  const require = Object.keys(required)

  const handleEditor = ({data, editor}) =>{
    let newContent = editor.getData();
    action({target: {name, event:'event', editor, value: newContent}})
  }
  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      <label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>
      <div>
        <CKEditor
          activeClass={name} 
          content={value} 
          events={{
            "blur": handleEditor,
            "afterPaste": handleEditor,
            "change": handleEditor
          }}
        />
      </div>
        {
          required.erro?.[name] ?
            <span className='campo-obrigatorio'>{required.message}</span>
          :null
        }
    </div>
  )
}