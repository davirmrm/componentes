/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

import { ProgressBar, StatusBar, Dropdown, DropdownState } from '..';

const Header = ({
  testid = false, style = {}, time = null, isOnline = true, percent = 50, totalValue = '0,00', partialValue='0,00', ifname = '', username = '', editClick = () => {}, showProgressBarAndSelect = true, ifList = [], selectNewIf = () => {}, canViewOpLimit = false, canEditOpLimit = false, infoClickOnProgressBar = () => {}, timeout = () => {}
}) => {
  
  const [toggle, setToggle] = useState(false);
  const [ifLocalList, setIfLocalList] = useState([]);
  const [selected, setSelected] = useState({label: '', state: ''})

  useEffect(() => {
    if (ifname) {
      setSelected({label: ifname, state: ''});
    }
  }, [ifname]);

  useEffect(() => {
    if (ifList?.length) {
      setIfLocalList(ifList.map(ifs => ({ label: ifs?.nome, state: '', id: ifs?.id })));
    }
  }, [ifList]);

  return (
  <header testid={testid} style={style} className="header">
    <div className="content">
      <StatusBar time={time} isOnline={isOnline} timeout={() => timeout()}/>
      {showProgressBarAndSelect && canViewOpLimit && <ProgressBar infoClick={infoClickOnProgressBar} totalValue={totalValue} partialValue={partialValue} percent={percent} editClick={() => editClick()} edit={canEditOpLimit} />}
      <div className="rightInfo">
        {showProgressBarAndSelect && 
          <Dropdown title={selected.label} label='' toggle={toggle} onClick={() => {setToggle(!toggle)}} state='secondary' closeOnClick right>
            <DropdownState
              data={ifLocalList}
              onChange={index => {console.log(index); selectNewIf(ifLocalList[index]); setSelected(ifLocalList[index]);}}
              state='secondary'
              >
            </DropdownState>
          </Dropdown>
        }
        <span>{username}</span>
      </div>
    </div>
  </header>
)};

Header.propTypes = {
  style: PropTypes.object,
  isOnline: PropTypes.bool,
  totalValue: PropTypes.string,
  percent: PropTypes.number,
  username: PropTypes.string,
  ifname: PropTypes.string,
};

export default Header;
