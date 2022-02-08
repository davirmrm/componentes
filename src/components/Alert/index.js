import React, { useEffect, useState } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Modal, Button, Icon } from '../';


const Alert = ({testid = false,style = {}, state = 'success', label = 'Texto', buttonLabel='ok', show = false, closeAlert = () => {}}) => {


  return (
    <div className={`alert ${show ? '' : 'hidden'}`}>
      <Modal
        testid={testid}
        show={show}
        closeModal={() => closeAlert()}>
        <Icon className={state} icon={state === 'success' ? 'Check Circle' : (state === 'warning' ? 'Alert Circle' : 'Alert')} size='5' />
        <span>{label}</span>
        <Button label={buttonLabel} state='default' onClick={() => closeAlert()} />
      </Modal>
    </div>
  );
}

Alert.propTypes = {
  style: PropTypes.object
}

export default Alert;
