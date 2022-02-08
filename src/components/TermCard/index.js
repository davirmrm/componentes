/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Checkbox } from '../';
import Icon from '../Icon';
import styles from './style.scss';

const TermCard = ({
  testid = false, style = {}, title = '', checkboxLabel = '', term = '', checked = false, onClick = () => {},
}) => {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    setParagraphs(term.split('\n'));
  }, []);

  return (
    <div testid={testid} className="termCard" style={style}>
      <header>
        <Icon icon="Check Circle" className={`${checked ? 'checked' : ''}`} size="1.5" />
        <h2>{title}</h2>
      </header>
      <section>
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </section>
      <Checkbox label={checkboxLabel} checked={checked} onClick={() => onClick()} />
    </div>
  );
};

TermCard.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  checkboxLabel: PropTypes.string,
  checked: PropTypes.bool,
  term: PropTypes.string,
  onClick: PropTypes.func,
};

export default TermCard;
