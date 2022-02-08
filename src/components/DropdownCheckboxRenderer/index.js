import React, { useState, useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import {Dropdown, DropdownCheckboxList} from '../';


const DropdownCheckboxRenderer = (props) => {

  
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if (props.data) {
      setData(props.data.dropdownCheckboxData);
    }
  }, [props.data]);

  return (
    <span testid={props?.testid} className='dropdownCheckboxRenderer'>
      {props.data ? 
      <Dropdown title={props.value} label='' toggle={toggle} onClick={() => {setToggle(!toggle)}} state='secondary'>
        <DropdownCheckboxList
          state='secondary'
          data={data}
          onChange={index => {let newData = [...data]; newData[index] = {...data[index], check: !data[index].check}; setData(newData)}}
          onClickCancel={() => {setToggle(!toggle); setData(initialData); }}
          onClickConfirm={() => {setToggle(!toggle); document.dispatchEvent(new CustomEvent('dropdownCheckboxEvent', { detail: {line : props.data, data} }))}}
          >
        </DropdownCheckboxList>
      </Dropdown>
      :
      '-'
      }
    </span>
  )
}

DropdownCheckboxRenderer.propTypes = {
  style: PropTypes.object,
  status: PropTypes.string,
  label: PropTypes.string,
}

export default DropdownCheckboxRenderer;
