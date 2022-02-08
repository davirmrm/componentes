import React, { useState, useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import {Dropdown, DropdownState} from '../';


const DropdownStateRenderer = (props) => {

  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data) {
      setData(props.data.dropdownStateData);
    }
  }, [props.data])

  return (
    <span testid={props?.testid} className='dropdownStateRenderer'>
      {props.data ? 
      <Dropdown state='statusForeground' selected={props.value} toggle={toggle} onClick={() => {setToggle(!toggle)}} closeOnClick>
        <DropdownState
          data={data}
          onChange={index => {setSelected(data[index])}}
          state='secondary'
          >
        </DropdownState>
      </Dropdown>
      :
      '-'
      }
    </span>
  )
}

DropdownStateRenderer.propTypes = {
  style: PropTypes.object,
  status: PropTypes.string,
  label: PropTypes.string,
}

export default DropdownStateRenderer;
