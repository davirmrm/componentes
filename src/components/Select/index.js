import React, { useState, useRef, useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Input } from '../';
import toGenerateId from '../../utils/toGenerateId';


const Select = ({
  testid = false, 
  style = {}, 
  selected = {id: '', label: ''}, 
  data = [],
  searchType = 'client', 
  handleSearchToRequest = () => {}, 
  label = '',
  placeholder = '',
  type = 'text',
  iconLeft = '',
  disabled = false,
  state = 'secondary',
  onSelect = () => {},
  onBlur = () => {}, 
  onFocus = () => {}, 
  onChange = () => {},
  errors = null, 
  mcc = false,
  haveLabelIcon = false,
  labelIconClick = () => {}
}) => {

  const [showDropdown, setShowDropdown] = useState(false);
  const select = useRef();
  const [localData, setLocalData] = useState([]);
  const [selectedData, setSelectedData] = useState(selected);
  const [searchValue, setSearchValue] = useState(selected.label);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  useEffect(() => {
    selectNewElement(selected, false);
  }, [selected]);

  const handleClickToOpen = () => {
    const [input] = select.current.getElementsByTagName('input');
    if (!showDropdown) {
      input.focus();
      input.select();
      addListenerToClickOut();
      setShowDropdown(!showDropdown);
    } else {
      input.blur();
    }
  }

  const handleSearch = (v) => {
    if (!showDropdown) {
      handleClickToOpen();
    }
    if (searchType === 'client') {
      applyLocalSearch(v);
    } else {
      handleSearchToRequest(v);
    }
    setSearchValue(v);
  }

  const selectNewElement = (e, propagate = true) => {
    setSelectedData(e);
    setSearchValue(e.label);
    if (propagate) {
      onSelect(e);
    }
  }
  const handleDropdownClick = (e) => {
    selectNewElement(e);
  }

  const applyLocalSearch = (v) => {
    if (mcc) {
      // setLocalData(data.map(elem => ({label: elem.label, mcc: elem.mcc.filter(mccData => mccData.label.toLowerCase().indexOf(v.toLowerCase()) > -1)})));
      setLocalData(data.map(groupOfMccs => ({ ...groupOfMccs, politicas: groupOfMccs.politicas.filter(mccData => mccData.label.toLowerCase().indexOf(v.toLowerCase()) > -1)})));
    } else {
      setLocalData(data.filter(elem => elem.label.toLowerCase().indexOf(v.toLowerCase()) > -1));
    }
  }

  const callback = (e) => {
    if (e.target.id.indexOf('selectCell#') === -1) {
      setSearchValue(selectedData.label);
    } else {
      const [,label, id] = e.target.id.split('#'); 
      onChange(label);
      handleDropdownClick({id, label})
    }
    setLocalData(data);
    document.removeEventListener('mousedown', callback);
    setShowDropdown(false);
  }

  const addListenerToClickOut = () => {
    document.addEventListener('mousedown', callback);
  }

  const renderLocalData = () => (
    localData.length > 0 ? 
    localData.map(d => (
      <div key={d.id} id={`selectCell#${d.label}#${d.id}`}>
        {d.label}
      </div>
    )) :
      <div key='-1' className='disabled'>
        Nenhum campo a ser exibido.
      </div>
  );

  const renderServerData = (d) => (
    data.length > 0 ? 
    data.map(d => (
      <div key={d.id} id={`selectCell#${d.label}#${d.id}`}>
        {d.label}
      </div>
    )) :
    <div key='-1' className='disabled'>
      Nenhum campo a ser exibido.
    </div>
  )

  const renderGroupOfMCC = g => {
    if (g.politicas && g.politicas.length > 0) {
      return (
        <>
          <div key={toGenerateId('select')} className='selectLabel'>{g.situacao === 'valido' ? 'Válido' : 'Inválido'}</div>
          {g.politicas.map(mccData => (
            <div key={toGenerateId('select')} id={`selectCell#${mccData.label}#${mccData.id}`}>
              {mccData.descricaoMcc}
            </div>
            ))}
        </>
      )
    }
    return null;
  }

  return (
    <div testid={testid} className={`select ${mcc ? 'mccStyle' : null}`} style={style} ref={select}>
      <Input 
        haveLabelIcon={haveLabelIcon}
        labelIconClick={labelIconClick}
        className='selectInput'
        label={label}
        placeholder={placeholder}
        type={type}
        iconLeft={iconLeft}
        iconRight={showDropdown ? 'Chevron Up' : 'Chevron Down'}
        disabled={disabled}
        state={state}
        onChange={(e) => {handleSearch(e.target.value);}}
        onClick={(e) => {handleClickToOpen(); }}
        value={searchValue}
        onBlur={() => onBlur()}
        onFocus={() => onFocus()}
        errors={errors}
        />
        {showDropdown &&
        (mcc ?
        <div className='dropdown mccDropdown'>
          {localData.map(groupOfMccs => renderGroupOfMCC(groupOfMccs))}
        </div>
        :
        <div className={`dropdown ${!label && 'noLabel'}`}>
          {searchType === 'client' ?
          renderLocalData() : 
          renderServerData()}
        </div>)}
    </div>
  );
}

Select.propTypes = {
  style: PropTypes.object
}

export default Select;
