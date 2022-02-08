import React from 'react';

import PropTypes from 'prop-types';

import icons from '../../assets/icons/sprites.svg';

const Icon = ({
  testid = false, className = '', icon, size = 1.25, onClick = () => {}, style,
}) => {
  
  const processSize = () => {
    if (typeof size === 'object') {
      return {
        width: `${size?.width}rem`, minWidth: `${size?.width}rem`,
      }
    } else {
      return {width: `${size}rem`, height: `${size}rem`, minWidth: `${size}rem`, minHeight: `${size}rem`}
    }
  }
  
  return (
  <svg 
    testid={testid}
    className={`${className} icon`}
    viewBox="0 0 24 24"
    onClick={(e) => onClick(e)}
    style={{
      ...style, ...processSize()
    }}
  >
    <use xlinkHref={`${icons}#${icon}`} />
  </svg>
)};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Icon;
