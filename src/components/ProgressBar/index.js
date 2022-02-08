import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon } from '../';


const ProgressBar = ({testid = false, style = {}, percent = 50, totalValue='0,00', partialValue='0,00', editClick = () => {}, edit = false, infoClick = () => {}}) => {
  return (
    <div testid={testid} className='progressBar' style={style}>
      <div className='progressBar_content'>
        <div className='progressBar_title'>
          <p>Limite operacional</p>
          <Icon icon='Info' size='0.75' onClick={() => infoClick()} />
        </div>
        <p>{`${percent ? percent : 0}% de R$ ${totalValue}`}</p>
        {edit && <Icon icon='Edit' onClick={() => editClick()} />}
      </div>
      <div className='progressBar_barBg'>
        <div className={`progressBar_barContent ${percent > 100 ? 'warning' : 'success'}`} style={{width: `${percent ? percent : 0}%`}}>
          <span>{`R$ ${partialValue}`}</span>
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  style: PropTypes.object
}

export default ProgressBar;
