import React, {useEffect, useState } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import {TimerCell} from '../';
import { intervalToDuration } from 'date-fns'


const map = {
  em_leilao: {label: 'Em leilão', state: 'warning'},
  cancelada: {label: 'Cancelado', state: 'neutral'},
  aguardando_registro: {label: 'Aguardando registro', state: 'warning'},
  aguardando_liquidacao: {label: 'Aguardando liquidação', state: 'warning'},
  aguardando_saldo: {label: 'Aguardando saldo', state: 'warning'},
  concluida: {label: 'Concluída', state: 'success'},
  aguardando_confirmacao_ec: {label: 'Aguardando confirmação', state: 'warning'},
  cancelado_manual: {label: 'Cancelado manual', state: 'neutral'},
  aguardando_aprovacao_operador: {label: 'Aguardando aprovação', state: 'warning'}
}


const TimerCellRenderer = (props) => {
  const [params, setParams] = useState({label : '', state: ''});
  useEffect(() => {

    const processLabel = (data) => {
      // Padroniza hora para 00H00M
      const minutosAbsolutos = data.minutosLiquidacaoPrevista;

      let dateToPay = new Date(data.dataRegistro);
      dateToPay.setMinutes(dateToPay.getMinutes() + minutosAbsolutos);
      const atualDate = new Date();
      const state = dateToPay > atualDate ? 'warning' : 'danger';

      const label = intervalToDuration({
        start: atualDate,
        end: dateToPay
      });

      const days = label.days > 9 ? label.days : `0${label.days}`;
      const hours = label.hours > 9 ? label.hours : `0${label.hours}`;
      const minutes = label.minutes > 9 ? label.minutes : `0${label.minutes}`;

      const time = label.days > 0 ? `${days}D${hours}H${minutes}M` : `${hours}H${minutes}M` 

      return [time, state];
    } 
    
    
    if (props.data) {
      const situacao = props.data.situacao;
      let {label, state} = map[situacao];
      if (situacao === 'aguardando_liquidacao') {
        [label, state] = processLabel(props.data);
      }
      setParams({label, state});
    }
  }, [props]);

  return (
    <>
      {props.data ? <TimerCell label={params.label} state={params.state}/> : '-'}
    </>
  );
}

TimerCellRenderer.propTypes = {
  style: PropTypes.object,
  state: PropTypes.string,
  label: PropTypes.string,
}

export default TimerCellRenderer;
