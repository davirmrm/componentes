import React, { useEffect, useState, useCallback } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Input, Button } from '../';
import { int2Brl } from '../../utils/real'
import { monetary } from '../../utils/masks';
import { round } from '../../utils/round';


const PriceCard = ({testid = false, style = {}, selected = false, rate = null, time = null, timeGoesZero = () => {}, dayCount = null, mcc = null, value = null, onChange = () => { }, id = null, status = 'danger', handleClickToUnselect = () => { }, onClick = () => {}, timeout = 5, forceTemporaryBlock = null }) => {

  const [updatedRate, setUpdatedRate] = useState(rate);

  const [timeoutToBlock, setTimeoutToBlock] = useState(null);

  let timeToCloseHelper = null;

  const [timerToClose, setTimerToClose] = useState(timeToCloseHelper);

  let timer = null;

  let intervalOnlineRate = null;

  useEffect(() => {
    setUpdatedRate(monetary(String(rate)));
  }, [setUpdatedRate, selected]);

  useEffect(() => {
    const now = new Date();
    let interval = null;
    timeToCloseHelper = time.getTime() - now.getTime();
    if (timeToCloseHelper < 0) {
      setTimerToClose(0);
      return;
    }
    if (timeToCloseHelper > 120000) {
      interval = setInterval(() => {
        timeToCloseHelper = timeToCloseHelper - 60000;
        setTimerToClose(timeToCloseHelper);
        if (timeToCloseHelper < 120000) {
          clearInterval(interval);
          interval = setInterval(() => {
            timeToCloseHelper = timeToCloseHelper - 1000;
            setTimerToClose(timeToCloseHelper);
            if (timeToCloseHelper < 0) {
              timeGoesZero();
              clearInterval(interval);
            }
          }, 1000);
        }
      }, 60000);
    } else {
      interval = setInterval(() => {
        timeToCloseHelper = timeToCloseHelper - 1000;
        setTimerToClose(timeToCloseHelper);
        if (timeToCloseHelper < 0) {
          timeGoesZero();
          clearInterval(interval);
        }
      }, 1000);
    }
    setTimerToClose(timeToCloseHelper);
    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    return () => {
      clearInterval(intervalOnlineRate);
    }
  }, [])

  const callback = useCallback((e) => {
    let indicator = true;
    e.path.forEach(p => {
      if (p.className && p.className.includes && p.className.includes('priceCard') && p.className.includes('selected') && p.id === `priceCard#${id}`) {
        indicator = false;
      }
    })
    if (indicator) {
      handleClickToUnselect();
      document.removeEventListener('mousedown', callback);
    }
  })
  useEffect(() => {
    if (selected === true) {
      document.addEventListener('mousedown', callback);
    } else {
      document.removeEventListener('mousedown', callback);
    }
    return () => {
      document.removeEventListener('mousedown', callback);
    };
  }, [callback, handleClickToUnselect, id, rate, selected]);
  
  const temporaryBlock = (initialTimer = timeout) => {
    timer = initialTimer;
    intervalOnlineRate = setInterval(() => {
      if (timer === 1) {
        clearInterval(intervalOnlineRate);
        timer = timeout;
        setTimeoutToBlock(null);
      } else {
        timer = timer - 1;
        setTimeoutToBlock(timer);
      }
    }, 1000);
    setTimeoutToBlock(initialTimer);
  }

  useEffect(() => {
    if (forceTemporaryBlock) {
      temporaryBlock(forceTemporaryBlock);
    }
  }, [forceTemporaryBlock])

  return (
    <div testid={testid} id={`priceCard#${id}`} style={style} className={`priceCard ${selected ? 'selected' : ''} ${timeoutToBlock !== null ? 'opacity' : ''}`} onClick={() => {if(!selected && timeoutToBlock === null) {onClick()}}}>
      <div className='counter'>
        <span>{timerToClose > 60000 ? Math.trunc(timerToClose / 60000) : Math.trunc(timerToClose / 1000)}</span>
        {timerToClose > 60000 ? 'min' : 'seg'}
      </div>
      <div className='labels'>
        <h3>R$ {int2Brl(value)}</h3>
        <h4>{dayCount} {dayCount === 1 ? ' dia' : ' dias'}</h4>
        <h4>{mcc}</h4>
      </div>
      {selected
        ? <div className='editInput'>
            <Input step='0.01' type='number' value={updatedRate} placeholder='Taxa' onChange={(e) => { setUpdatedRate(monetary(e.target.value)) }} />
            <Button state='neutral' icon='Check' onClick={() => {temporaryBlock(); onChange(round(updatedRate*100)); document.removeEventListener('mousedown', callback);  handleClickToUnselect();}}/>
          </div>
        : <div className='rate'>{rate ? `${int2Brl(rate)}%` : '-'}<span className={status} /></div>
      }
      {timeoutToBlock !== null && <span className='timer'>{timeoutToBlock}s</span>}
    </div>
  );
}

PriceCard.propTypes = {
  style: PropTypes.object,
  selected: PropTypes.bool,
  rate: PropTypes.number,
  time: PropTypes.number,
  dayCount: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  status: PropTypes.string,
}

export default PriceCard;
