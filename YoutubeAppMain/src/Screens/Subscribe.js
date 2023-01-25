/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import youtube from '../../assets/subscribeyoutube.json';
import chanel from '../../assets/subscribechanelyoutube.json';
import VideoItemSubscribe from '../Components/Video/VideoItemSubscribe';
import ChanelSubscribe from '../Components/Video/ChanelSubscribe';
import {View, FlatList} from 'react-native';

const Subscribe = props => {
  return (
    <Container>
      <Header />
      <View style={{flex: 10}}>
        <FlatList
          data={chanel}
          renderItem={Data => <ChanelSubscribe video={Data.item} />}
          horizontal={true}
        />
        <View style={{flex: 60}}>
        <FlatList
          data={youtube}
          renderItem={Data => <VideoItemSubscribe video={Data.item} />}
        />
        </View>
      </View>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
const ContainerFooter = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export default Subscribe;
