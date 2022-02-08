import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';

import { moderateIf as status } from '../../utils/maps';


const StatusRendererModerateIf = props => {

  return (
    <div className={`statusRenderer ${status[props.value]?.state}`}>
      {status[props.value]?.label}
    </div>
  );
}

StatusRendererModerateIf.propTypes = {
  style: PropTypes.object
}

export default StatusRendererModerateIf;
