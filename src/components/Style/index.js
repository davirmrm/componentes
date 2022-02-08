import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const Style = ({testid = false, style = {}}) => {
  return (
    <>
      Style
    </>
  );
}

Style.propTypes = {
  style: PropTypes.object
}

export default Style;
