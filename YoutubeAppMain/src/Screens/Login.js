/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../Components/Logo/LogoLogin';
import AtOutline from '../Components/Icons/AtOutline';
import Lock from '../Components/Icons/Lock';
import Google from '../Components/Icons/Google';
import Facebook from '../Components/Icons/Facebook';
import Twitter from '../Components/Icons/Twitter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import notifee from '@notifee/react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function onDisplayNotification() {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    await notifee.displayNotification({
      title: 'Connexion',
      body: 'Vous venez de vous connecter à Youtube',
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        navigation.navigate('Home');
      }
    });
  });

  const logMeIn = async () => {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    axios({
      method: 'post',
      url: 'https://login.hikkary.com/users/login',
      data: {
        email: email,
        password: password,
      },
    })
      .then(async response => {
        if (response && response.headers && response.headers['x-access-token']) {
          await AsyncStorage.setItem('token', response.headers['x-access-token']);
        }
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };

  function onPressMulti() {
    onDisplayNotification();
    logMeIn();
  }

  return (
    <Container>
      <Logo />
      <ContentContainer>
        <TextLogin>Login</TextLogin>
        <InputContainer>
          <AtOutline />
          <InputText
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </InputContainer>
        <InputContainer>
          <Lock />
          <InputText
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </InputContainer>
        <LoginButton onPress={() => onPressMulti()}>
          <LoginText>Login</LoginText>
        </LoginButton>
        <RegisterWith>Or, login with</RegisterWith>
        <SocialContainer>
          <SocialButton>
            <Google />
          </SocialButton>
          <SocialButton>
            <Facebook />
          </SocialButton>
          <SocialButton>
            <Twitter />
          </SocialButton>
        </SocialContainer>
      </ContentContainer>
    </Container>
  );
};

const InputText = styled.TextInput`
  placeholder-text-color: #9097a3;dzd
`;

const InputContainer = styled.View`
  border-bottom-color: #e4e6e5;
  border-bottom-width: 1px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-vertical: 8px;
  margin-top: 15px;
`;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const ContentContainer = styled.View`
  margin-horizontal: 15px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 340px;
  border-radius: 6px;
  align-items: center;
  justifycontent: center;
  margin-vertical: 10px;
  background-color: #ff0000;
  padding: 14px;
  align-self: center;
`;

const LoginText = styled.Text`
  font-family: Roboto-Medium;
  font-size: 15px;
  color: #fff;
`;

const SocialContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  margin-vertical: 15px;
`;

const SocialButton = styled.View`
  border-color: #e4e6e5;
  border-width: 2px;
  border-raduis: 10px;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
`;

const TextLogin = styled.Text`
  color: #192948,
  font-family: Roboto-Medium;
  font-size: 28px;
  margin-vertical: 15px;
`;

const RegisterWith = styled.Text`
  text-align: center;
  color: #9097a3;
  font-family: Roboto-Medium;
  font-size: 16px;
`;

export default Login;
