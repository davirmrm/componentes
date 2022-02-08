/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-cycle */
import React from 'react';

import PropTypes from 'prop-types';

import Icon from '../Icon';
import styles from './style.scss';

const ArrowNavigator = ({testid = false, style = {}, handleClickLeft = () => {}, handleClickRight = () => {} }) => (
  <div testid={testid} className="arrowNavigator">
    <div onClick={() => { handleClickLeft(); }}>
      <Icon icon="Arrow Left" size="1.25" />
    </div>
    <div onClick={() => { handleClickRight(); }}>
      <Icon icon="Arrow Right" size="1.25" />
    </div>
  </div>
);

ArrowNavigator.propTypes = {
  style: PropTypes.object,
  handleClickLeft: PropTypes.func,
  handleClickRight: PropTypes.func,
};

export default ArrowNavigator;
