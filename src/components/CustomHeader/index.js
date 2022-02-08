import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';


const CustomHeader = (props) => {
  return (
    <div testid={props?.testid} className='customHeader'>
      {props.displayName}
      <Icon onClick={() => {document.dispatchEvent(new CustomEvent('clickOnColumnToRemove', {detail: props.column}))}} icon='Trash' />
    </div>
  );
}

CustomHeader.propTypes = {
  style: PropTypes.object
}

export default CustomHeader;
