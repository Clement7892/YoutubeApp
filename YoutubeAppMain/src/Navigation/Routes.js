/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Shorts from '../Screens/Shorts';
import Post from '../Screens/Post';
import Subscribe from '../Screens/Subscribe';
import Library from '../Screens/Library';
import Video from '../Screens/Video';

const Stack = createNativeStackNavigator();

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Shorts" component={Shorts} options={{headerShown: false}}  />
        <Stack.Screen name="Post" component={Post} options={{headerShown: false}} />
        <Stack.Screen name="Subscribe" component={Subscribe} options={{headerShown: false}}  />
        <Stack.Screen name="Library" component={Library} options={{headerShown: false}} />
        <Stack.Screen name="Video" component={Video} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
