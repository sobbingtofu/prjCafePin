import styled, { keyframes } from 'styled-components';

const dropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 120px;
  height: fit-content;
  top: 75px;
  right: 40px;
  border-radius: 10px;
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  background-color: white;
  animation: ${dropdownAnimation} 0.3s ease-in-out;

  .first {
    &:hover {
      border-radius: 10px 10px 0 0;
      background-color: #f6f0e9;
      color: #4d2c0e;
    }
  }
  .second {
    &:hover {
      border-radius: 0 0 10px 10px;
      background-color: #f6f0e9;
      color: #4d2c0e;
    }
  }
`;

export const Item = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 15px;
  font-size: 15px;
  cursor: pointer;
`;
