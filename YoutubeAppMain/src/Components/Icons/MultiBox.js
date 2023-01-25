/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const MultiBox = props => {
  const navigation = useNavigation();
  return (
    <Container>
      <MaterialCommunityIcons
        size={27}
        name="play-box-multiple-outline"
        color="#242526"
        onPress={() => navigation.navigate('Library')}
      />
      <TextFooter>Library</TextFooter>
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

export default MultiBox;
