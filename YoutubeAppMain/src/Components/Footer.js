/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import PlusBlack from './Icons/PlusBlack';
import Subscribe from './Icons/Subscibe';
import MultiBox from './Icons/MultiBox';
import Home from './Icons/Home';
import PlayCircle from './Icons/PlayCircle';

const TestFooter = () => {
  return (
    <Container>
      <NavBar>
        <NavbarIcon>
          <Home />
          <Margin />
          <PlayCircle/>
          <Margin />
          <PlusBlack />
          <Margin />
          <Subscribe />
          <Margin />
          <MultiBox />
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
  margin-left: 20px;
`;

const NavbarIcon = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

const Margin = styled.View`
  margin-right: 37px;
`;

export default TestFooter;
