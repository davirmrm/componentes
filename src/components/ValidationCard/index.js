import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';


const ValidationCard = ({testid = false, style = {}, state='success', title='', label=''}) => {
  return (
    <div testid={testid} className='validationCard' style={style}>
      <Icon className={state} size='2' icon={state === 'success' ? 'Check Circle' : (state === 'warning' ? 'Alert Circle' : '')} />
      <div>
        <h3>
          {title}
        </h3>
        <h4>
          {label}
        </h4>
      </div>
    </div>
  );
}

ValidationCard.propTypes = {
  style: PropTypes.object,
  state: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
}

export default ValidationCard;
