/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

const ChanelSubscribe = ({video}) => {
  return (
    <Container>
      <DesContainer>
        <Image
          source={{uri: video.chanlenmage}}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
        <VideoDetails>
          <AuthorTitle>{video.author_name}</AuthorTitle>
        </VideoDetails>
      </DesContainer>
    </Container>
  );
};

const Container = styled.View`
  padding: 10px;
  shadow-color: #000;
  shadow-radius: 4px;
  elevation: 5;
  background-color: #fff;
`;

const DesContainer = styled.View`
  padding-top: 10px;
  align-items: center;
  justify-content: center;
`;

const VideoDetails = styled.View`
  padding-horizontal: 15px;
`;

const AuthorTitle = styled.Text`
  font-size: 17px;
  padding-top: 4px;
  font-weight: bold;
`;

export default ChanelSubscribe;
