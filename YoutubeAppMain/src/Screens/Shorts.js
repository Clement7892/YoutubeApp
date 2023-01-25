/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Footer from '../Components/Footer';

const Shorts = props => {
  return (
    <Container>
      <ShortsText>Under maintenance</ShortsText>
      <ShortsText>Sorry...</ShortsText>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  margin: auto;
  margin-top: 300px;
  backgroung-color: #fff
`;

const ShortsText = styled.Text`
  font-size: 30px;
`;

const ContainerFooter = styled.View`
  flex: 1;
  margin-top: 310px;
  margin-left: 12px;
`;

export default Shorts;
