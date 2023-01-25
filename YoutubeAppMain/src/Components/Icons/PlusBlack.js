/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const PlusBlack = props => {
  const navigation = useNavigation();
  return (
    <AntDesign
      size={35}
      name="pluscircleo"
      color="#242526"
      onPress={() => navigation.navigate('Post')}
    />
  );
};

export default PlusBlack;
