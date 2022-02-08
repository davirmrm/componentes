import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const StatusRenderer = props => {

  const status = {
    "gerado com erro": {label: 'Gerado com erro', state: 'danger'},
    "gerado com sucesso": {label: 'Gerado com sucesso', state: 'success'},
    "processado com erro": {label: 'Processado com erro', state: 'danger'},
    "processado com sucesso": {label: 'Processado com sucesso', state: 'success'},
    "enviado com erro": {label: 'Enviado com erro', state: 'danger'},
    "enviado com sucesso": {label: 'Enviado com sucesso', state: 'success'},
    "recebido com erro": {label: 'Recebido com erro', state: 'danger'},
    "recebido com sucesso": {label: 'Recebido com sucesso', state: 'success'},
    "aguardando arquivo": {label: 'Aguardando arquivo', state: 'warning'},
  }

  return (
    <div className={`statusRenderer ${status[props.value]?.state}`}>
      {status[props.value]?.label}
    </div>
  );
}

StatusRenderer.propTypes = {
  style: PropTypes.object
}

export default StatusRenderer;
