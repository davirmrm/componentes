import React from 'react';
import { NavLink } from 'react-router-dom';
import { Counter } from '../';

import PropTypes from 'prop-types';

import styles from './style.scss';

const TabNav = ({testid = false, style = {}, data = [{ id: '1', label: 'Histórico', route: 'historico' }, { id: '2', label: 'Liquidação', route: 'liquidacao' }, { id: '3', label: 'Estabelecimento Comercial', route: 'comercial' }, { id: '4', label: 'Recebíveis', route: 'recebiveis', counter: '8' }], useNavLink = false, onClick = () => {}, selected = '' }) => (
  <div testid={testid} className="tabNav" style={style}>
    {
        useNavLink
          ? data.map((e) => (
            <NavLink exact key={e.id} className="linkBox" activeClassName="tabNavLinkActive" to={e.route}>
              <div className="tabNavLink">{e.label}</div>
            </NavLink>
          ))
          : data.map((e) => (
            <div className={`linkBox ${selected === e.route ? "tabNavLinkActive" : ""}`} key={e.id} onClick={() => onClick(e.route)}>
              <div className="tabNavLink">
                {e.label}
              {e.counter && <Counter label={e.counter} />}
              </div>
            </div>
          ))
      }
  </div>
);

TabNav.propTypes = {
  style: PropTypes.object,
};

export default TabNav;
