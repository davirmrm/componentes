import React from 'react'
import { validarCampo } from '../../validation/Validation'

export function InputRange({ 
  children, 
  action,
  actionBlur,
  value, 
  label, 
  name = '', 
  color = '', 
  disabled = false,
  required = {},
  min = '1',
  max = '10',
}) {
  const require = Object.keys(required)
  const pattern = e => {
    if (typeof required?.pattern === 'object') {
      return JSON.stringify(required.pattern)
    } else if (typeof required?.pattern === 'string') {
      return required.pattern
    } else {
      return ''
    }
  }
  const typename = 'K'
  const typename2 = '$'

  const validar = e => {
    const v = (require.length) ? validarCampo(e) : {}
    if (actionBlur) actionBlur(e, v)
  }

  const sliders = document.querySelectorAll(".slider-ui");

  sliders.forEach(slider => {
    let input = slider.querySelector(`input[type=range]`);
  //  let min = input.getAttribute("min");
  //  let max = input.getAttribute("max");
    let valueElem = slider.querySelector(".value");

  //  slider.querySelector(".min").innerText = min;
  //  slider.querySelector(".max").innerText = max;

    const setValueElem = (e) => {
    //  valueElem.innerText = input.value;
      let percent = (e.target.value - min) / (max - min) * 100;
      valueElem.style.left = percent + "%";
    }
  //  setValueElem({target: {value:5}});

    input.addEventListener("input", setValueElem);
    input.addEventListener("mousedown", () => {
      valueElem.classList.add("up");
    });
    input.addEventListener("mouseup", () => {
      valueElem.classList.remove("up");
    });
  });

   return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      {label?<label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>:null}
      <div className='slider-ui color1'>
        <input 
          id={`id-${name}`} 
          type="range"
          min={min} 
          max={max}
          name={name} 
          value={value} 
          onChange={action} 
          onBlur={e => validar(e)} 
          disabled={disabled}
          pattern={pattern()}
        />
        <div className="bar" style={{backgroundColor: color, boxShadow: `0 5px 0 ${color + '80'}` }}>
          <span className="min"></span>
          <span className="max"></span>
        </div>
        <div className="track">
          <div className="value" style={{borderColor: color + '80', left: (value*10) + '%'}}></div>
        </div>
      </div>
      
      {children && children.length
        ? children.map(e => e?.type && (e.type?.name !== 'ActionForm' && e.type?.name !== typename && e.type?.name !== typename2) ? e : null)
        : children && children.type && (children.type?.name !== 'ActionForm' && children.type?.name !== typename && children.type?.name !== typename2)
        ? children
        : null}
      {
        required.erro?.[name] ?
          <span className='campo-obrigatorio'>{required.message}</span>
        :null
      }
    </div>
  )
}
