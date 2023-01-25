/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';

const ModalPopUpTv = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);

  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 200);
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <ModalBackGround>
        <ModalContainer>{children}</ModalContainer>
      </ModalBackGround>
    </Modal>
  );
};

const ModalContainer = styled.View`
  elevation: 20;
  border-radius: 10px;
  padding-vertical: 30px;
  padding-horizontal: 20px;
  background-color: #fff;
  width: 325px;
`;

const ModalBackGround = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ModalPopUpTv;
