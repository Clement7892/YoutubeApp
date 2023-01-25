/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import Header from '../Components/Header';
import styled from 'styled-components';
import Time from '../Components/Icons/Time';
import BoxOutline from '../Components/Icons/BoxOutline';
import MovieOpen from '../Components/Icons/MovieOpen';
import Down from '../Components/Icons/Down';
import Plus from '../Components/Icons/Plus';
import ClockCircle from '../Components/Icons/ClockCircle';
import Like from '../Components/Icons/Like';
import Footer from '../Components/Footer';
import {FlatList, ScrollView} from 'react-native';
import youtube from '../../assets/libraryyoutube.json';
import VideoItemLibrary from '../Components/Video/VideoItemLibrary';

const Library = ({video}) => {
  return (
    <Container>
      <Header />
      <IconHistory>
        <Time />
        <TextHistory>History</TextHistory>
        <TextAll>Show all</TextAll>
      </IconHistory>
      <ScrollView>
        <FlatList
          data={youtube}
          renderItem={Data => <VideoItemLibrary video={Data.item} />}
          horizontal={true}
          />
      </ScrollView>
      <Trait />
      <Row>
        <BoxOutline />
        <TextRow>Your videos</TextRow>
      </Row>
      <Row>
        <MovieOpen />
        <TextRow>Your movies and series</TextRow>
      </Row>
      <Trait />
      <Playlists>
        <TextPlaylists>Playlists</TextPlaylists>
        <TextPlaylist>Recently added videos</TextPlaylist>
        <Down />
      </Playlists>
      <OtherLibrary>
        <Plus />
        <OtherTextLibrary>New Playlist</OtherTextLibrary>
      </OtherLibrary>
      <Row>
        <ClockCircle />
        <TextRow>To watch later</TextRow>
      </Row>
      <Row>
        <Like />
        <TextRow>Videos "Like"</TextRow>
      </Row>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: #fff;
  flex: 1;
`;

const IconHistory = styled.View`
  margin-left: 15px;
  flex-direction: row;
`;

const TextHistory = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: black;
  margin-left: 15px;
`;

const TextAll = styled.Text`
  color: blue;
  margin-top: 5px;
  margin-left: 188px;
  font-size: 17px;
`;

const Playlists = styled.View`
  flex-direction: row;
  margin-top: 25px;
`;

const TextPlaylists = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-left: 15px;
`;

const TextPlaylist = styled.Text`
  font-size: 17px;
  color: black;
  margin-left: 90px;
  margin-right: 5px;
`;

const OtherLibrary = styled.View`
  flex-direction: row;
  margin-top: 25px;
  margin-left: 25px;
`;

const OtherTextLibrary = styled.Text`
  font-size: 18px;
  color: blue;
  margin-left: 25px;
  margin-top: 2px;
`;

const Row = styled.View`
  flex-direction: row;
  margin-top: 25px;
  margin-left: 25px;
`;

const TextRow = styled.Text`
  font-size: 18px;
  color: black;
  margin-left: 25px;
  margin-top: 2px;
`;

const Trait = styled.View`
  margin-top: 25px;
  border-bottom-color: grey;
  border-bottom-width: 1px;
`;

const ContainerFooter = styled.View`
  margin-top: 30px;
  margin-left: 15px;
  flex: 1;
`;

export default Library;
