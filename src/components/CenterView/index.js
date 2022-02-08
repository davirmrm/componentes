import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

export default function CenterView({ children, bg }) {
  return <div style={{...style.main, ...bg}}>{children}</div>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
