import React, { useCallback, useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import { data } from './data';


const DatePicker = ({testid = false, style = {}, show = false, onDayClick = () => {}, onWrapperClick = () => {}, pos =  {x: 100, y: 100}, selectedDays = []}) => {
  
  const callback = useCallback((e) => {
    let indicator = true;
    e.path.forEach(p => {
      if (p.className === 'DayPicker') {
        indicator = false;
      }
    })
    if (indicator) {
      onWrapperClick();
      document.removeEventListener('mousedown', callback);
    }
  }, [])
  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', callback);
    }
    return () => {
      document.removeEventListener('mousedown', callback);
    };
  }, [callback, onWrapperClick, show]);
  
  return (
    show &&
    <div testid={testid} className='datePickerWrapper' style={{paddingLeft: `${pos.x}px`, paddingTop: `${pos.y}px`}}>
      <DayPicker showOutsideDays onDayClick={(e) => onDayClick(e)} selectedDays={selectedDays} 
      locale={data.locale}
      months={data.months}
      weekdaysLong={data.weekdaysLong}
      weekdaysShort={data.weekdaysShort}
      firstDayOfWeek={data.firstDayOfWeek}/>
    </div>
  );
}

DatePicker.propTypes = {
  style: PropTypes.object
}

export default DatePicker;
