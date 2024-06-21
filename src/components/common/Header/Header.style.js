import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 10px gainsboro;
  padding: 0 37px;
  box-sizing: border-box;
  position: relative;
`;

export const Logo = styled.div`
  a {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  .logo-text {
    margin-left: 10px;
    font-family: 'Playwrite CO', cursive;
    font-size: 32px;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .user-name {
    font-size: 20px;
  }
  .user-img {
    width: 50px;
    height: 50px;
    background-color: #efefef;
    border-radius: 50%;
    margin-left: 25px;
    border: transparent;
  }
`;

export const ProfileImg = styled.img`
  cursor: pointer;
`;

export const ProfileDiv = styled.div`
  width: 50px;
  height: 50px;
  background-color: #efefef;
  border-radius: 50%;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
