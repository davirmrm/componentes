import React, { useRef } from 'react';

import PropTypes from 'prop-types';

import { Icon } from '../';
import styles from './style.scss';

const LabelWithIconRenderer = (props) => (
  <div testid={props?.testid} className="labelWithIconRenderer">
    Até {props.value} dias
    <Icon onClick={() => { document.dispatchEvent(new CustomEvent('clickOnRowToRemove', { detail: props.data })); }} icon="Trash" />
  </div>
);

LabelWithIconRenderer.propTypes = {
  style: PropTypes.object,
};

export default LabelWithIconRenderer;
