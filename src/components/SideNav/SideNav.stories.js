import React from 'react';

import {
  withKnobs,
} from '@storybook/addon-knobs';

import Logo from '../../assets/image/logo.svg'
import { SideNav } from '../';

export default {
  title: 'SideNav',
  component: SideNav,
  decorators: [withKnobs],
};
export const sideNav = () => (
  <SideNav
    logo={Logo}
    useNavLink={false}
  />
);
