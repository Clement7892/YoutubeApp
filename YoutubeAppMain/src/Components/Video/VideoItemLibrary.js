/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const VideoItem = ({video}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={{uri: video.thumbnail_url}} style={{height: 200}} />
      <DesContainer>
          <Image
            source={{uri: video.chanlenmage}}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
        <VideoDetails>
        <TouchableOpacity onPress={() => navigation.navigate('Video', {id: video.id})}>
          <AuthorTitle>{video.author_name}</AuthorTitle>
        </TouchableOpacity>
          <VideoTitle numberOfLines={2}>
            {video.title}
          </VideoTitle>
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
  background-color: #fff
`;

const DesContainer = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;

const VideoDetails = styled.View`
  padding-horizontal: 15px;
`;

const AuthorTitle = styled.Text`
  font-size: 17px;
  padding-top: 4px;
  font-weight: bold;
`;

const VideoTitle = styled.Text`
  font-size: 14px;
  padding-top: 4px;
`;

export default VideoItem;
