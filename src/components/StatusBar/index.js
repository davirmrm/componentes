import React, { useEffect, useState } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { intervalToDuration } from 'date-fns'


const StatusBar = ({testid = false, style = {}, isOnline = true, time = null, timeout = () => {}}) => {

  const [timeToShow, setTimeToShow] = useState('');
  let pointCounter = '';

  let globalInterval = null;

  useEffect(() => {
    if (time === null) {
      setTimeToShow('-');
      return;
    }

    clearInterval(globalInterval);
    let interval = null;
    let result = null;
    interval = setInterval(() => {
      let date = new Date();
      try {
        result = intervalToDuration({
          start: date,
          end: new Date(time)
        }) 
        if (result.hours + result.minutes + result.seconds === 0) {
          timeout();
        }
        setTimeToShow(`${result.hours}h${result.minutes}m${result.seconds}s`)
      } catch(err){
        pointCounter = pointCounter + '.';
        if (pointCounter.length > 3) {
          pointCounter = '';
        }
        setTimeToShow(pointCounter)
        }
      }, 1000);
      globalInterval = interval;
      return () => clearInterval(interval);
    }, [time]);

  return (
    <div testid={testid} className='statusBar'>
      <p>Sistema</p>
      <div className='statusBar_content'>
        <div className={isOnline ? 'online' : 'offline'}></div>
        {isOnline ? 'online' : 'offline'} | {isOnline ? 'fechamento' : 'abertura'} em {timeToShow}
      </div>
    </div>
  );
};

StatusBar.propTypes = {
  style: PropTypes.object,
  isOnline: PropTypes.bool,
}

export default React.memo(StatusBar);
