import React, { useState, useRef, useEffect } from 'react'
import useOutsideClick from '../../useOusideClick/useoutsideclick'
import { IcoClose, IcoSearch } from '../../icon/icon'
import { validarCampo } from '../../validation/Validation'

const chargeDefault = { max: 500, text: 'Mais itens', action: () => null }
export function Select({
  children,
  options,
  action,
  actionClose,
  selected,
  label,
  name,
  color = '',
  closeOnSelect = null,
  multiSelect = false,
  disabled = false,
  selectedIten = true,
  textCustom = ['Select', 'Selected', 'Selecteds', 'Tick all'],
  filter = false,
  charge = chargeDefault,
  optionLabel = 'name',
  optionValue = 'id',
  optionCustom = '',
  required = {}
}) {
  closeOnSelect = closeOnSelect === null ? ( multiSelect ? false : true ) : closeOnSelect
  const [selectOpen, setSelectOpen] = useState(false)
  const [selectState, setSelectState] = useState([])
  const openSelect = e => {
    setSelectOpen(e)
  }

  //testanso
  const ref = useRef()
  useOutsideClick(ref, e => {
    openSelect(e)
    if (!e && selectOpen === true) {
      closeAction(selected)
    }
  })

  useEffect(() => {
    setSelectState(options ? options : [])
  }, [options])

  const veryfiMultiSelect = e => {
    const verify = selected.filter(elem => {
      return elem[optionValue] === e[optionValue] ? elem : null
    })

    const res = selected.filter(elem => {
      return elem[optionValue] !== e[optionValue] ? elem : null
    })

    if (selected.length === 0) {
      return [e]
    } else {
      if (verify.length === 0) {
        return selected.concat(e)
      } else {
        return res
      }
    }
  }

  const selectAction = e => {
    const resp = multiSelect ? (e ? veryfiMultiSelect(e) : []) : e ? e : {}
    action({ target: { name: name, value: resp, type: 'select' } })
  }

  const textButton = e => {
    if (!multiSelect) {
      const verifyObject = Object.keys(e)
      if (e[optionLabel]) {
        return e[optionLabel]
      } else {
        return verifyObject.length ? e : textCustom[0]
      }
    } else {
      if (e.length === 0) {
        return textCustom[0]
      } else if (e.length === 1) {
        return `${textCustom[1]} - ${e[0][optionLabel]} `
      } else {
        return `${textCustom[2]} ( ${e.length} ) `
      }
    }
  }

  const veryfiSelected = e => {
    if (!multiSelect) {
      return selected[optionValue] === e[optionValue] ? true : false
    } else {
      if (selected.length === 0) {
        return false
      } else {
        const verify = selected.filter(elem => {
          return elem[optionValue] === e[optionValue] ? elem : null
        })

        if (verify.length === 0) {
          return false
        } else {
          return (verify[0] && verify[0][optionValue]) === e[optionValue] ? true : false
        }
      }
    }
  }

  const selectAll = e => {
    action({ target: { name: name, value: e ? options : [], type: 'select' } })
  }
  
  const closeAction = e => {
    e = closeOnSelect && multiSelect ? selected : e
    const resp = multiSelect ? (e ? e : []) : e ? e : {}
    const v = (require.length) ? validarCampo({target: {name, value: resp, pattern: multiSelect ? 'multiselect' : 'select' }}) : {}
    if (actionClose) {actionClose(resp, v)}
    openSelect(false)
  }

  const require = Object.keys(required)
  const typename = 'Oe'
  console.log(children, typename, 'filterSelect', children?.type?.name) 
  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      <label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>
      <div ref={ref}>
        <button
          className={`select-selected ${selectOpen ? 'open' : ''}`}
          onClick={() => openSelect(!disabled ? !selectOpen : false)}
        >
          {textButton(selected)}
        </button>

        {selectOpen ? (
          <div className={`select-box ${multiSelect ? 'multiselect' : ''}`}>
            
       

            {children && children.length ? (
              children.map(e => {
                return e && e.type && (e.type.name === 'FilterSelect' || e.type.name === typename) ? e : null
              })
            ) : children && children.type && (children.type.name === 'FilterSelect' || children.type.name === typename) ? (
              children
            ) : filter ? (
              <FilterSelect
                clean={filter.clean}
                action={e => setSelectState(FilterAction(options, e))}
                filter={filter.text}
                title={filter.title}
              />
            ) : null}

            {multiSelect? 
              (<div className={`select-all ${selected.length > 0 && selected.length === options.length? 'selected' : ''}`} 
              onClick={() => [selectAll(selected.length !== options.length? true : ''), closeOnSelect ? closeAction(selected) : null]}>
                <span className='checkelement'></span>
                {textCustom[3]}
              </div>)
            :null}

            <div className='select-options'>
              {!multiSelect && selectedIten ? (
                <div
                  className={selected === {} ? 'selected' : ''}
                  onClick={e => [selectAction(), closeOnSelect ? closeAction() : null]}
                >
                  {textCustom[0]}
                </div>
              ) : null}

              {selectState.map((e, i) => {
                return (
                  <div
                    className={veryfiSelected(selectState[i]) ? 'selected' : ''}
                    key={`${name}-${e[optionValue]}`}
                    onClick={e => [selectAction(selectState[i]), closeOnSelect ? closeAction(selectState[i]): null]}
                  >
                    {multiSelect ? <span className='checkelement'></span> : null}
                    {optionCustom ? optionCustom(e) : e[optionLabel]}
                  </div>
                )
              })}
              {selectState.length >= (charge.max ? charge.max : chargeDefault.max) ? (
                <button
                  className='btn secondary normal block'
                  onClick={() => (charge.action ? charge.action : chargeDefault.action)}
                  title={charge.text ? charge.text : chargeDefault.text}
                >
                  {charge.text ? charge.text : chargeDefault.text}
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
      
      {
        required.erro?.[name] ?
          <span className='campo-obrigatorio'>{required.message}</span>
        :null
      }
    </div>
  )
}

export function FilterAction(d, e, n = 'name') {
  return d.filter(i => (e !== '' ? ([i[n]].includes(e) ? i : null) : i))
}

export function FilterSelect({
  children,
  clean = <IcoClose />,
  filter = <IcoSearch />,
  action = () => null,
  title = 'Filtrar'
}) {
  const [filterState, setFilterState] = useState('')
  const cleanFilter = () => {
    setFilterState('')
  }
  return (
    <div className='select-filter'>
      <input
        type='text'
        name='filter-select'
        id={`id-filter-select`}
        value={filterState}
        onChange={e => setFilterState(e.target.value)}
        placeholder={title}
      />
      <div className='input-actions'>
        <button
          className={filterState === '' ? 'hidden' : ''}
          onClick={() => [cleanFilter(), action('')]}
          title={clean}
        >
          {clean}
        </button>

        <button onClick={() => action(filterState)} title={title}>
          {filter}
        </button>
        {children}
      </div>
    </div>
  )
}


export const verifySelectValue = e => {
  if (Array.isArray(e.value)) {
    const val = e.value[0]
    const sel = e.list.filter((v)=> v[e.val?e.val:'name'] === val[e.val?e.val:'name'])
    return sel.length ? sel[0] : {}
  } else {
    const sel = e.list.filter((v)=> v[e.val?e.val:'name'] === e.value)
    return sel.length ? sel[0] : {}
  }
}