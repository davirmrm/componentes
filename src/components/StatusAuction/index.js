import React, { useEffect, useState } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import {Icon} from '..';


const StatusAuction = (props) => {

  return (
    props.data && 
      <>
        <span testid={props?.testid} className={`statusAuction ${props.value ? 'success' : 'danger'}`}>
        </span>
      </>
  );
}

StatusAuction.propTypes = {
  style: PropTypes.object,
}

export default StatusAuction;
