/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import Header from '../Components/Header';
import {View, FlatList} from 'react-native';
import youtube from '../../assets/videoyoutube.json';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import VideoItem from '../Components/Video/VideoItem';

const Home = props => {
  return (
    <Container>
      <Header />
      <Youtube>
        <FlatList
          data={youtube}
          renderItem={Data => <VideoItem video={Data.item} />}
        />
      </Youtube>
      <ContainerFooter>
        <Footer/>
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
const Youtube = styled.View`
  flex: 10;
`;

export default Home;
