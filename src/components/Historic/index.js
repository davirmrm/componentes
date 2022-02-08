import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { dateToDDMMYYYY } from '../../utils/masks';

const Historic = ({testid = false, style = {}, historic = [], type='one'}) => {

  const renderInfo = e => {
    if (type === 'one') {
      return (
        <div className='text'>
          <span>{dateToDDMMYYYY(new Date(e.data), true)}</span>
          <h3>{e.nome}</h3>
          {e.responsavel}
        </div>
      )
    }
    if (type === 'two') {
      return (
        <div className='text status'>
          <span>{dateToDDMMYYYY(new Date(e.data), true)}</span>
          <h3 className={e.state}>{e.status}</h3>
        </div>
      )
    }
  }

  return (
    <div testid={testid} className='historicContainer'>
      {historic.map((e,index) => (
        <div className='historicItem' key={index}>
          <div className='mark'>
            <div className='markBall'></div>
            {index === historic.length -1 ? '' : <div className='markDash'></div>}
          </div>
          {renderInfo(e)}
        </div>
        ))}
    </div>
  );
}

Historic.propTypes = {
  style: PropTypes.object,
  historic: PropTypes.array,
}

export default Historic;
