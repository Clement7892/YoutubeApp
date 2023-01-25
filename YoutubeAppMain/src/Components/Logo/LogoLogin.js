/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

function Logo() {
  const imageUrl =
    'https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg';
  return (
    <View>
      <Image
        style={{
          width: 200,
          height: 200,
          marginLeft: 100,
        }}
        source={{uri: imageUrl}}
      />
    </View>
  );
}

export default Logo;
