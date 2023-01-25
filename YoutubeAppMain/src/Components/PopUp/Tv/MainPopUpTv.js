/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Television from '../../Icons/Television';
import InfoCircle from '../../Icons/InfoCircle';
import Close from '../../Icons/Close';
import ModalPopUpTv from './ModalPopUpTv';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';

const MainPopUpTv = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View>
      <ModalPopUpTv visible={visible}>
          <HeaderPopUp>
            <TextPopUpTitle>Connecting to a device</TextPopUpTitle>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Close />
            </TouchableOpacity>
          </HeaderPopUp>
          <Design>
            <TextPopUpOther>no device found</TextPopUpOther>
          </Design>
           <Design>
            <Television/>
            <TextPopUp>Associate with a TV code</TextPopUp>
          </Design>
          <Design>
            <InfoCircle/>
            <TextPopUp2>Find out more</TextPopUp2>
          </Design>
      </ModalPopUpTv>
      <FontAwesome5Brands size={25} name="chromecast" color="#242526" onPress={() => setVisible(true)} />
    </View>
  );
};

const HeaderPopUp = styled.View`
  align-items: flex-end;
  height: 30px;
  width: 260px;
  flex-direction: row;
`;

const TextPopUpTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 40px;
`;

const Design = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const TextPopUp = styled.Text`
  font-size: 17px;
  margin-left: 10px;
`;

const TextPopUp2 = styled.Text`
  font-size: 17px;
  margin-top: 5px;
  margin-left: 8px;
`;

const TextPopUpOther = styled.Text`
  font-size: 15px;
`;


export default MainPopUpTv;
