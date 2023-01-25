/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const AccountCircle = props => {
  const navigation = useNavigation();
  return <MaterialCommunityIcons size={25} name="account-circle-outline" color="#242526" onPress={() => navigation.navigate('Login')}/>;
};

export default AccountCircle;
