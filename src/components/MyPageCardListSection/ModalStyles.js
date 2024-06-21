import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달의 앱 엘리먼트 설정

export const CustomModal = styled(Modal)`
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f6f0e9;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #4d2c0e;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalContent = styled.div`
  font-size: 16px;
  color: #4d2c0e;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;

  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalInput = styled.input`
  width: 97.5%;
  padding: 10px 5px;
`;

export const ModalTextArea = styled.textarea`
  width: 97.5%;
  padding: 10px 5px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #dbc5b1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: #59371f;
  }

  & + button {
    margin-left: 10px;
  }
`;
