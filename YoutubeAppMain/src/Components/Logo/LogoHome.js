/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

function LogoHome() {
  const imageUrl =
    'https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg';
  return (
    <View>
      <Image
        style={{
          height: 50,
          width: 100,
          resizeMode: 'cover',
          marginRight: 70,
          marginLeft: 10,
        }}
        source={{uri: imageUrl}}
      />
    </View>
  );
}

export default LogoHome;
