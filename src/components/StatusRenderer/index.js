import React, { useEffect, useState } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import {Icon} from '../';


const StatusRenderer = (props) => {

  const [localData, setLocalData] = useState({state: '', label: ''});

  const map = {
    ativo: {state: 'success', label: 'Ativo'},
    pendente: {state: 'warning', label: 'pendente'},
    rejeitado: {state: 'danger', label: 'rejeitado'},
    inativo: {state: 'inative', label: 'inativo'},
    carga_automatica: {state: 'success', label: 'Carga automática'},
  }

  useEffect(() => {
    if (props.data) {
      setLocalData(map[props.value]);
    }
  }, [props])

  return (
    <span testid={props?.testid} className='statusRenderer'>
      {props.data ? <span className={localData?.state}>{localData?.label}</span> : '-'}
    </span>
  );
}

StatusRenderer.propTypes = {
  style: PropTypes.object,
}

export default StatusRenderer;
