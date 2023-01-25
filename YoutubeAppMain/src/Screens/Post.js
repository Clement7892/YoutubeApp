/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import styled from 'styled-components';
import People from '../Components/Icons/People';
import Play from '../Components/Icons/Play';
import Sound from '../Components/Icons/Sound';
import Upload from '../Components/Icons/Upload';
import Footer from '../Components/Footer';

const Post = props => {
  return (
    <View>
      <CreateTitle>Create</CreateTitle>
      <Row>
        <Play/>
        <TextPost>Create shorts</TextPost>
      </Row>
      <Row>
        <Upload/>
        <TextUpload>Upload a video</TextUpload>
      </Row>
      <Row>
        <Sound/>
        <TextLive>Go live</TextLive>
      </Row>
      <Row>
        <People/>
        <TextPost>Perform live together</TextPost>
      </Row>
      <ContainerFooter>
        <Footer/>
      </ContainerFooter>
    </View>
  );
};

const Row = styled.View`
  flex-direction: row;
  margin-top: 40px;
  margin-left: 20px;
`;

const CreateTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: black;
  margin-left: 15px;
  margin-top: 15px;
`;

const TextPost = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

const TextUpload = styled.Text`
  margin-left: 20px;
  font-size: 18px;
`;

const TextLive = styled.Text`
  margin-left: 16px;
  font-size: 18px;
`;

const ContainerFooter = styled.View`
  margin-top: 345px;
  margin-left: 20px;
`;

export default Post;
