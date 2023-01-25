/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {FlatList, View} from 'react-native';
import Header from '../Components/Header';
import youtube from '../../assets/videoyoutube.json';
import ViewVideoItem from '../Components/ViewVideo';
import styled from 'styled-components';
import Footer from '../Components/Footer';

const Video = ({video}) => {
  return (
    <Container>
      <Header />
      <Youtube>
        <FlatList
          data={youtube}
          renderItem={Data => <ViewVideoItem video={Data.item} />}
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
export default Video;
