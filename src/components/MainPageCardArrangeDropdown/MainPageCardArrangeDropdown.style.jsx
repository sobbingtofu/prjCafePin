import styled from 'styled-components';

export const CardArrangeDropDownContainer = styled.div`
  position: relative;
  margin: 0px 0px 0px auto;
  z-index: 2;
  transition: 0.3s;
  height: 50px;
`;

export const CardArrangeDropDownTitle = styled.div`
  font-size: 0.95rem;
  border: none;
  background-color: #dbc5b1;
  color: #4d2c0e;
  padding: 18px 20px;
  font-weight: 600;
  border-radius: 10px 10px 5px 5px;
  &:hover {
    cursor: pointer;
  }
  width: 130px;
  text-align: start;
`;

export const CardArrangeDropDownList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 0.9rem;
  border: none;
  padding: 10px;
  color: #4d2c0e;
  background-color: #dbc5b1f4;
  border-radius: 5px 5px 10px 10px;
  transition: 0.3s;
`;

export const CardArrangeDropDownItem = styled.div`
  padding: 10px 10px;
  color: #4d2c0e;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
