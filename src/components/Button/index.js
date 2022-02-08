import React from 'react';
import styles from './style.scss';
import PropTypes from 'prop-types';

import { Icon } from '../';
import Loader from '../Loader';

const Button = ({
  testid = false,
  state = 'default',
  icon = null,
  label = null,
  style = {},
  onClick,
  disabled = false,
  size = 'default',
  loading = false,
  rounded = false,
}) => {
  return (
    <button
      testid={testid}
      className={`${state} size-${size} ${rounded ? 'rounded ' : ''}${
        disabled ? 'disabled ' : ''
      }button `}
      style={style}
      onClick={!disabled && !loading ? onClick : null}
    >
      <span style={{ opacity: loading ? 0 : 1 }}>
        {icon && (
          <Icon
            className={state}
            icon={icon}
            size='1'
            style={label ? { marginRight: '.5rem' } : {}}
          />
        )}
        {label}
      </span>
      {loading && <Loader width={38} height={38} />}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  state: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
