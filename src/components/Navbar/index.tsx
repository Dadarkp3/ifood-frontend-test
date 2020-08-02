import React from 'react';

import logo from '../../assets/img/logo.png';

import { Nav, Logo } from './styles';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo src={logo} />
    </Nav>
  );
};

export default Navbar;
