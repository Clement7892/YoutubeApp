/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import LogoHome from './Logo/LogoHome';
import Bell from './Icons/Bell';
import Search from './Icons/Search';
import MainPopUpTv from './PopUp/Tv/MainPopUpTv';
import AccountCircle from './Icons/AccountCircle';

const Header = () => {
  return (
    <Container>
      <NavBar>
        <LogoHome />
        <NavbarIcon>
          <MainPopUpTv/>
          <Margin />
          <Bell />
          <Margin />
          <Search />
          <Margin />
          <AccountCircle />
          <Margin />
        </NavbarIcon>
      </NavBar>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const NavBar = styled.View`
  height: 55px;
  shadow-color: #000;
  flex-direction: row;
  background-color: #fff;
`;

const NavbarIcon = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

const Margin = styled.View`
  margin-right: 30px;
`;

export default Header;
