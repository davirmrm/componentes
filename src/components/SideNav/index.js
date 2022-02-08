import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Icon } from '../';
import styles from './style.scss';
import ReactTooltip from 'react-tooltip';

const SideNav = ({
  version,
  env,
  testid = false,
  style = {},
  data = [
    { id: '1', icon: 'Home', route: '/index', tooltip: 'Home' },
    {
      id: '2',
      icon: 'Operacoes',
      route: '/index/operacoes',
      tooltip: 'Operações',
    },
    { id: '3', icon: 'Taxas', route: '/index/taxas', tooltip: 'Taxas' },
    { id: '1321', icon: 'Taxas', route: '/index/taxas', tooltip: 'Taxas' },
    { id: '654654', icon: 'Taxas', route: '/index/taxas', tooltip: 'Taxas' },
    { id: '321312', icon: 'Taxas', route: '/index/taxas', tooltip: 'Taxas' },
    { id: '354354', icon: 'Taxas', route: '/index/taxas', tooltip: 'Taxas' },
    { id: '41123', icon: 'Taxas', route: '/index/taxas', tooltip: 'Taxas' },
    { id: '332', icon: 'Taxas', route: '/index/taxas', tooltip: 'Taxas' },
    { id: '4', icon: 'Logout', route: 'logout', tooltip: 'Logout' },
  ],
  useNavLink = false,
  onClick = () => {},
  logo = null,
  state = 'primary',
}) => {
  return (
    <aside testid={testid} className='sideNav' style={style}>
      <div className='sideNavHeader'>
        <img src={logo} className={`logo ${state}`} />
        {env && <div className='env'>{env}</div>}
        {version && <div className='version'>{version}</div>}
      </div>
      <div className='navScroll'>
        {useNavLink
          ? data.map(e => (
              <NavLink
                exact
                key={e.id}
                className='linkBox'
                activeClassName='sideNavLinkActive'
                to={e.route}
              >
                <Icon className='sideNavLink' icon={e.icon} size='1.75' />
              </NavLink>
            ))
          : data.map(e => (
              <a
                data-tip={e.tooltip}
                className={`linkBox ${
                  window.location.pathname.replace(/(\/)$/, '') === e.route
                    ? 'sideNavLinkActive'
                    : ''
                } ${e.icon === 'Logout' ? 'logout' : ''}`}
                key={e.id}
                onClick={() => onClick(e.route)}
              >
                <Icon className='sideNavLink' icon={e.icon} size='1.75' />
              </a>
            ))}
      </div>
      <ReactTooltip
        place='right'
        effect='solid'
        delayShow={250}
        className='tooltip'
      />
    </aside>
  );
};

SideNav.propTypes = {
  style: PropTypes.object,
};

export default SideNav;
