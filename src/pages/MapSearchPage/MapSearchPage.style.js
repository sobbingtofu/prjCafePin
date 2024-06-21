import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh - 80px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const SearchDiv = styled.div`
  max-width: 1200px;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  form {
    display: flex;
    flex-direction: row;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 50px;
  border: transparent;
  background-color: #efefef;
  padding: 0 20px;
  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  height: 28px;
  display: block;
  margin: auto;
  border: transparent;
  background-color: #dbc5b1;
  margin-left: 10px;
  color: white;
  border-radius: 50px;
  width: 50px;
  font-weight: 600;
`;

export const SettingBtn = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #4d2c0e;
  border: transparent;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const MyLocationBtn = styled.button`
  width: 120px;
  height: 28px;
  border-radius: 50px;
  background-color: #dbc5b1;
  border: transparent;
  color: white;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 3px;
  }
  &:hover {
    background-color: #4d2c0e;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  p {
    font-size: 25px;
    font-weight: 600;
    color: #4d2c0e;
  }
`;
