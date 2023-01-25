/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Home = props => {
  const navigation = useNavigation();
  return (
    <Container>
      <Entypo
        size={28}
        name="home"
        color="#242526"
        onPress={() => navigation.navigate('Home')}
      />
      <TextFooter>Home</TextFooter>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const TextFooter = styled.Text`
  margin-right: 2px;
  font-size: 11px;
`;

export default Home;
