import React, { useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const Modal = ({testid = false, style = {}, show = true, closeModal = () => {}, children, className = ''}) => {

  
  useEffect(() => {
    const listener = event => {
      let bool = false;
      let ignore = true;
      event.path.forEach(elem => {
        if (elem.className !== undefined && elem.className.includes && elem.className.includes('modal ')) {
          bool = true;
        }
        if (elem.className !== undefined && elem.className.includes && elem.className.includes('modalWrapper')) {
          ignore = false;
        }
      });
      if (ignore) {
        return;
      }
      if (!bool) {
        closeModal();
      }
    }
    if (show) {
      document.addEventListener('mousedown', listener);
    } else {
      document.removeEventListener('mousedown', listener);
    }
    return () => {
      document.removeEventListener('mousedown', listener);
    }
  }, [show])

  return (
    show &&
    <div className='modalWrapper' style={style}>
      <div testid={testid} className={`modal ${className}`}>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  style: PropTypes.object,
  show: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default Modal;
