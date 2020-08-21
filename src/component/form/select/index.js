import React, { useState, useRef, useEffect } from 'react'
import useOutsideClick from '../../useOusideClick'
import { IcoClose, IcoSearch } from '../../icon'

export function Select({
  children,
  options,
  action,
  selected,
  label,
  name,
  color = '',
  closeOnSelect = true,
  multiSelect = false,
  disabled = false,
  textCustom = ['Selecione', 'Selecionado', 'Selecionados', 'Marcar todos', 'Desmarcar todos'],
  filter = false
}) {
  const [selectState, setSelectState] = useState({})
  const openSelect = e => {
    setSelectState({ ...selectState, open: e })
  }

  const ref = useRef()
  useOutsideClick(ref, e => {
    openSelect(e)
  })

  useEffect(() => {
    setSelectState({ open: false, options: options ? options : [] })
  }, [options])

  const veryfiMultiSelect = e => {
    const verify = selected.filter(elem => {
      return elem.id === e.id ? elem : null
    })

    const res = selected.filter(elem => {
      return elem.id !== e.id ? elem : null
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
      if (e.name) {
        return e.name
      } else {
        return verifyObject.length ? e : textCustom[0]
      }
    } else {
      if (e.length === 0) {
        return textCustom[0]
      } else if (e.length === 1) {
        return `${textCustom[1]} - ${e[0].name} `
      } else {
        return `${textCustom[2]} ( ${e.length} ) `
      }
    }
  }

  const veryfiSelected = e => {
    if (!multiSelect) {
      return selected.id === e.id ? true : false
    } else {
      if (selected.length === 0) {
        return false
      } else {
        const verify = selected.filter(elem => {
          return elem.id === e.id ? elem : null
        })

        if (verify.length === 0) {
          return false
        } else {
          return (verify[0] && verify[0].id) === e.id ? true : false
        }
      }
    }
  }

  const selectAll = e => {
    action({ target: { name: name, value: e ? options : [], type: 'select' } })
  }

  return (
    <div className={`input-box ${color} `}>
      <label htmlFor={`id-${name}`}>{label}</label>
      <div ref={ref}>
        <button
          className={`select-selected ${selectState.open ? 'open' : ''}`}
          onClick={() => openSelect(!disabled ? !selectState.open : false)}
        >
          {textButton(selected)}
        </button>

        {selectState.open ? (
          <div className={`select-box ${multiSelect ? 'multiselect' : ''}`}>
            {multiSelect ? (
              <div className='select-actions-all'>
                <button
                  className='btn secondary normal'
                  onClick={() => [selectAll(true), closeOnSelect ? openSelect(false) : null]}
                  title={textCustom[3]}
                >
                  {textCustom[3]}
                </button>
                <button
                  className='btn secondary normal'
                  onClick={() => [selectAll(), closeOnSelect ? openSelect(false) : null]}
                  title={textCustom[4]}
                >
                  {textCustom[4]}
                </button>
              </div>
            ) : null}

            {children && children.length ? (
              children.map(e => {
                return e && e.type && e.type.name === 'FilterSelect' ? e : null
              })
            ) : children && children.type && children.type.name === 'FilterSelect' ? (
              children
            ) : filter ? (
              <FilterSelect
                clean={filter.clean}
                action={e => setSelectState({ ...selectState, options: FilterAction(options, e) })}
                filter={filter.text}
                title={filter.title}
              />
            ) : null}

            <div className='select-options'>
              {!multiSelect ? (
                <div
                  className={selected === {} ? 'selected' : ''}
                  onClick={e => [selectAction(), closeOnSelect ? openSelect(false) : null]}
                >
                  {textCustom[0]}
                </div>
              ) : null}

              {selectState.options.map((e, i) => {
                return (
                  <div
                    className={veryfiSelected(selectState.options[i]) ? 'selected' : ''}
                    key={`${name}-${e.id}`}
                    onClick={e => [selectAction(selectState.options[i]), closeOnSelect ? openSelect(false) : null]}
                  >
                    {multiSelect ? <span className='checkelement'></span> : null}
                    {e.name}
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function FilterAction(d, e) {
  return d.filter(i => (e !== '' ? ([i.name].includes(e) ? i : null) : i))
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
