import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import {Icon} from '../';


const IconCellRenderer = (props) => {

  const processClick = () => {
    let field = '';
    Object.keys(props.data).find(k => {if (props.data[k] === props.value) {field = k; return true;} return false;});
    document.dispatchEvent(new CustomEvent('clickOnIconCell', { detail: { data: props.data, field } }));
  }

  return (
    <span testid={props?.testid} className='iconCell' onClick={() => processClick()} >
      {props.data ? <Icon icon={props.value} size='1' className={props.data.className ? props.data.className : ''} /> : '-'}
    </span>
  );
}

IconCellRenderer.propTypes = {
  style: PropTypes.object,
  status: PropTypes.string,
  label: PropTypes.string,
}

export default IconCellRenderer;
