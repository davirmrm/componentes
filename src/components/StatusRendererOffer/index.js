import React, { useEffect, useState } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import {Icon} from '../';


const StatusRendererOffer = (props) => {

  const [localData, setLocalData] = useState({state: '', label: ''});

  const map = {
    finalizada: {state: 'success', label: 'Finalizada'},
    pendente: {state: 'warning', label: 'Pendente'},
    cancelada: {state: 'danger', label: 'Cancelada'},
  }

  useEffect(() => {
    if (props.data) {
      setLocalData(map[props.value]);
    }
  }, [props])

  return (
    <span testid={props?.testid} className='statusRendererOffer'>
      {props.data ? 
      <span>
        <Icon className={localData?.state} icon={localData?.state === 'success' ? 'Check Circle' : localData?.state === 'neutral' ? 'Alert' : 'Clock'} size='1'/>
        <span className={localData?.state}>{localData?.label}</span>
      </span>
      : '-'}
    </span>
  );
}

StatusRendererOffer.propTypes = {
  style: PropTypes.object,
}

export default StatusRendererOffer;
