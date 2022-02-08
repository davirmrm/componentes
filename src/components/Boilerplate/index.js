import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const Boilerplate = ({style = {}}) => {
  return (
    <>
      Boilerplate
    </>
  );
}

Boilerplate.propTypes = {
  style: PropTypes.object
}

export default Boilerplate;
