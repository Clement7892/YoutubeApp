/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

const ViewVideoItem = ({video}) => {
  return (
    <View>
      <Video
      source={{uri: video.watch}}
        style={{ width: '100%', aspectRatio: 16 / 9 }}
      />
    </View>
  );
};

export default ViewVideoItem;
