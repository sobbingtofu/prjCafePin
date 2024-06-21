import styled from 'styled-components';

export const MapContainer = styled.div`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
`;

export const MarkerDiv = styled.div`
  position: relative;
  max-width: 260px;
  width: 260px;
  min-height: 150px;
  display: flex;
  padding: 15px 15px;
  box-sizing: border-box;
`;

export const Title = styled.p`
  width: 90%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const Address = styled.p`
  font-size: 13px;
  margin: 5px 0;
`;
export const RoadAdd = styled.p`
  font-size: 13px;
  margin: 5px 0;
`;
export const Phone = styled.p`
  font-size: 13px;
  margin: 10px 0;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  left: 90%;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
