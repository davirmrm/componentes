import React, { useCallback, useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const Drawer = ({testid = false, style = {}, children, show = false, handleClickToUnShow = () => {}, shadow = false }) => {

  const callback = useCallback((e) => {
    let indicator = true;
    e.path.forEach(p => {
      if (p.id === 'drawerElement' || p.className === 'modalWrapper') {
        indicator = false;
      }
    })
    if (indicator) {
      handleClickToUnShow();
      document.removeEventListener('mousedown', callback);
    }
  })
  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', callback);
    }
    return () => {
      document.removeEventListener('mousedown', callback);
    };
  }, [callback, handleClickToUnShow, show]);

  return (
    <div testid={testid} className={`${show ? 'drawer show': 'drawer'} ${shadow ? 'shadow' : ''}`}>
      <div id='drawerElement'>
      {show && children}
      </div>
    </div>
  )

} 

Drawer.propTypes = {
  style: PropTypes.object
}

export default Drawer;
