/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const PlayCircle = props => {
  const navigation = useNavigation();
  return (
    <Container>
      <Feather
        size={27}
        name="play-circle"
        color="#242526"
        onPress={() => navigation.navigate('Shorts')}
      />
      <TextFooter>Shorts</TextFooter>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const TextFooter = styled.Text`
  font-size: 11px;
`;

export default PlayCircle;
