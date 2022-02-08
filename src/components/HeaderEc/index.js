/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

import { ProgressBar, StatusBar, Dropdown, DropdownState, Button } from '..';

import { int2Brl } from '../../utils/real';

const HeaderEc = ({
  testid = false,
  value = '',
  style = {},
  ecName = '',
  username = '',
  editClick = () => {},
  showProgressBarAndSelect = true,
  ecList = [],
  selectNewEc = () => {},
  infoClickOnProgressBar = () => {},
  buttonLabel = '',
  buttonAction = () => {},
  showButton = true,
}) => {
  const [toggle, setToggle] = useState(false);
  const [ecLocalList, setEcLocalList] = useState([]);
  const [selected, setSelected] = useState({ label: '', state: '' });

  useEffect(() => {
    if (ecName) {
      setSelected({ label: ecName, state: '' });
    }
  }, [ecName]);

  useEffect(() => {
    if (ecList?.length) {
      setEcLocalList(
        ecList.map(ifs => ({ label: ifs?.nome, state: '', id: ifs?.id })),
      );
    }
  }, [ecList]);

  return (
    <header testid={testid} style={style} className='headerEc'>
      <div className='content'>
        <div className='leftItems'>
          <div className='leftInfo'>
            <div className='title'>Disponível para antecipação</div>
            <div className='value'>{`R$ ${int2Brl(value)}`}</div>
          </div>

          {!!showButton && (
            <Button
              label={buttonLabel}
              className='button'
              state='primary'
              rounded
              onClick={() => buttonAction()}
            />
          )}
        </div>
        <div className='rightInfo'>
          {showProgressBarAndSelect && (
            <Dropdown
              title={selected.label}
              label=''
              toggle={toggle}
              onClick={() => {
                setToggle(!toggle);
              }}
              state='secondary'
              closeOnClick
              right
            >
              <DropdownState
                data={ecLocalList}
                onChange={index => {
                  selectNewEc(ecLocalList[index]);
                  setSelected(ecLocalList[index]);
                }}
                state='default'
              ></DropdownState>
            </Dropdown>
          )}
          <span>{username}</span>
        </div>
      </div>
    </header>
  );
};

HeaderEc.propTypes = {
  style: PropTypes.object,
  isOnline: PropTypes.bool,
  totalValue: PropTypes.string,
  percent: PropTypes.number,
  username: PropTypes.string,
  ecName: PropTypes.string,
};

export default HeaderEc;
